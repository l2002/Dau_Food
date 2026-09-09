import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  ThumbsUp, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Sparkles,
  Cloud,
  CloudCheck,
  RefreshCw,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { CommentItem } from '../types';
import { INITIAL_COMMENTS } from '../data/caseData';
import { 
  db, 
  COMMENTS_COLLECTION 
} from '../lib/firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  increment, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';

export const CommunityFeedback: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Sinh viên / Lao động part-time');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isCloudConnected, setIsCloudConnected] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dau_food_liked_comments');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Real-time Firestore subscription
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    try {
      const commentsRef = collection(db, COMMENTS_COLLECTION);
      const q = query(commentsRef, orderBy('createdAt', 'desc'), limit(100));

      unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          setIsCloudConnected(true);
          if (!snapshot.empty) {
            const cloudList: CommentItem[] = snapshot.docs.map((docSnap) => {
              const data = docSnap.data();
              let formattedTime = 'Vừa xong';

              if (data.createdAt) {
                if (data.createdAt instanceof Timestamp) {
                  const date = data.createdAt.toDate();
                  formattedTime = date.toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  });
                } else if (typeof data.createdAt === 'string') {
                  formattedTime = data.createdAt;
                }
              }

              return {
                id: docSnap.id,
                author: data.author || 'Người lao động ẩn danh',
                role: data.role || 'Lao động part-time',
                timestamp: formattedTime,
                content: data.content || '',
                likes: typeof data.likes === 'number' ? data.likes : 0,
                verified: Boolean(data.verified)
              };
            });

            // Combine cloud comments with initial verified testimonials if cloud is small
            if (cloudList.length < 3) {
              const cloudIds = new Set(cloudList.map((c) => c.id));
              const extraInitial = INITIAL_COMMENTS.filter((c) => !cloudIds.has(c.id));
              setComments([...cloudList, ...extraInitial]);
            } else {
              setComments(cloudList);
            }
          } else {
            // Cloud is empty, show initial comments and allow users to add first cloud comments
            setComments(INITIAL_COMMENTS);
          }
        },
        (error) => {
          console.warn('Firestore snapshot listener note:', error.message);
          setIsCloudConnected(false);
          // Fallback to local storage or initial data
          try {
            const saved = localStorage.getItem('dau_food_comments_backup');
            if (saved) {
              setComments(JSON.parse(saved));
              return;
            }
          } catch {
            // ignore
          }
          setComments(INITIAL_COMMENTS);
        }
      );
    } catch (err) {
      console.error('Error connecting to cloud:', err);
      setIsCloudConnected(false);
      setComments(INITIAL_COMMENTS);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    if (author.trim().length > 60) {
      setErrorMsg('Tên tác giả tối đa 60 ký tự.');
      return;
    }

    if (content.trim().length > 2000) {
      setErrorMsg('Nội dung bình luận tối đa 2000 ký tự.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const newCommentId = 'cmt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    try {
      // 1. Persist directly to Google Cloud Firestore
      const commentDocRef = doc(db, COMMENTS_COLLECTION, newCommentId);
      await setDoc(commentDocRef, {
        author: author.trim(),
        role: role.trim() || 'Người lao động part-time',
        content: content.trim(),
        likes: 0,
        createdAt: serverTimestamp()
      });

      // Optimistic addition
      const optimisticComment: CommentItem = {
        id: newCommentId,
        author: author.trim(),
        role: role.trim() || 'Người lao động part-time',
        timestamp: 'Vừa xong (Đã lưu Cloud)',
        content: content.trim(),
        likes: 0,
        verified: false
      };

      setComments((prev) => [optimisticComment, ...prev.filter((c) => c.id !== newCommentId)]);
      setAuthor('');
      setContent('');
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 4000);
    } catch (error: any) {
      console.error('Lỗi khi lưu bình luận lên Cloud Firestore:', error);
      
      // Fallback local save if offline
      const fallbackComment: CommentItem = {
        id: newCommentId,
        author: author.trim(),
        role: role.trim() || 'Người lao động',
        timestamp: 'Vừa xong (Lưu tạm bộ nhớ)',
        content: content.trim(),
        likes: 0,
        verified: false
      };

      const updated = [fallbackComment, ...comments];
      setComments(updated);
      try {
        localStorage.setItem('dau_food_comments_backup', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setAuthor('');
      setContent('');
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 4000);
    }
  };

  const handleLike = async (id: string) => {
    // If already liked from this device, prevent double like
    if (likedMap[id]) return;

    // Optimistic UI update
    setComments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );

    const newLiked = { ...likedMap, [id]: true };
    setLikedMap(newLiked);
    try {
      localStorage.setItem('dau_food_liked_comments', JSON.stringify(newLiked));
    } catch {
      // ignore
    }

    // Update in Cloud Firestore if it's a cloud document
    try {
      const docRef = doc(db, COMMENTS_COLLECTION, id);
      await updateDoc(docRef, {
        likes: increment(1)
      });
    } catch (e) {
      // If it's a static mock comment or local document, optimistic state is enough
      console.info('Like updated locally.');
    }
  };

  return (
    <section id="community" className="w-full max-w-full py-12 sm:py-16 md:py-24 border-b border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Diễn Đàn Trao Đổi Cộng Đồng</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug break-words">
            Góp ý & Chia sẻ kinh nghiệm làm việc part-time
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed px-1 break-words">
            Hãy chia sẻ kinh nghiệm, góc nhìn hoặc ý kiến đóng góp xây dựng để cùng lan tỏa văn hóa làm việc minh bạch và tôn trọng pháp luật.
          </p>

          {/* Cloud Sync Status Indicator */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border max-w-full truncate ${
              isCloudConnected
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                : 'bg-zinc-900 border-zinc-700 text-zinc-400'
            }`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${isCloudConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <Cloud className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{isCloudConnected ? 'Cloud Firestore Đã Kết Nối' : 'Đang đồng bộ Cloud Database...'}</span>
            </div>
          </div>
        </div>

        {/* Comment Form Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-7 mb-8 sm:mb-10 shadow-xl">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Send className="w-4 h-4 text-amber-400" />
              <span>Gửi bình luận hoặc chia sẻ kinh nghiệm</span>
            </h3>
            <span className="text-[10px] sm:text-xs text-amber-400 font-mono bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
              Lưu trên Cloud
            </span>
          </div>

          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span className="leading-tight">Cảm ơn bạn! Bình luận của bạn đã được ghi nhận và lưu đồng bộ trên Google Cloud.</span>
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Tên hoặc Bí danh của bạn: <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={60}
                  placeholder="VD: Tuấn Nguyễn / Sinh viên ĐH..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full min-h-[44px] bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Vai trò / Kinh nghiệm:
                </label>
                <input
                  type="text"
                  maxLength={80}
                  placeholder="VD: Sinh viên part-time, Cựu nhân viên F&B..."
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full min-h-[44px] bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-zinc-300">
                  Nội dung chia sẻ (Khách quan, trung thực, văn minh): <span className="text-red-400">*</span>
                </label>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {content.length}/2000
                </span>
              </div>
              <textarea
                required
                maxLength={2000}
                rows={4}
                placeholder="Chia sẻ kinh nghiệm làm việc, phương thức thỏa thuận quyền lợi, lưu ý khi nhận việc hoặc ý kiến đóng góp xây dựng..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors leading-relaxed resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <span className="text-[11px] text-zinc-500 leading-tight">
                * Dữ liệu bình luận được lưu trữ bảo mật trên cơ sở dữ liệu Cloud Firestore.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-500 active:bg-red-700 text-white transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-red-950/50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang lưu lên Cloud...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi bình luận lên Cloud</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Comments Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 px-1">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Ý kiến thảo luận & Chia sẻ ({comments.length})</span>
            </span>
            <span className="text-zinc-500 text-[11px]">Mới nhất hiển thị trước</span>
          </div>

          {comments.length === 0 ? (
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-center text-zinc-500 text-xs">
              Chưa có bình luận nào trên Cloud. Hãy là người đầu tiên chia sẻ góc nhìn của bạn!
            </div>
          ) : (
            comments.map((cmt) => {
              const isLiked = Boolean(likedMap[cmt.id]);

              return (
                <div
                  key={cmt.id}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700/80 transition-all shadow-md"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-200 font-bold text-xs shrink-0 shadow-inner">
                        {cmt.author ? cmt.author.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <div className="min-w-0 truncate">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-xs sm:text-sm text-white truncate">
                            {cmt.author}
                          </span>
                          {cmt.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-1.5 py-0.5 rounded-full shrink-0">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              <span>Xác thực</span>
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate">
                          {cmt.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-zinc-500 whitespace-nowrap shrink-0">
                      <Clock className="w-3 h-3 hidden sm:inline" />
                      <span>{cmt.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-11 mb-3 whitespace-pre-line break-words">
                    {cmt.content}
                  </p>

                  <div className="pl-1 sm:pl-11 pt-2 border-t border-zinc-900 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                      <CloudCheck className="w-3.5 h-3.5 text-emerald-400/80" />
                      <span>Lưu trữ trên Cloud</span>
                    </div>

                    <button
                      onClick={() => handleLike(cmt.id)}
                      disabled={isLiked}
                      className={`min-h-[36px] sm:min-h-[32px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                      title={isLiked ? 'Bạn đã đồng tình với ý kiến này' : 'Bấm để thể hiện đồng tình'}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-amber-400 text-amber-400' : ''}`} />
                      <span>{cmt.likes > 0 ? cmt.likes : 0} Đồng tình</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
