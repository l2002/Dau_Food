import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  ThumbsUp, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Sparkles 
} from 'lucide-react';
import { CommentItem } from '../types';
import { INITIAL_COMMENTS } from '../data/caseData';

export const CommunityFeedback: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const saved = localStorage.getItem('dau_food_comments');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // fallback
    }
    return INITIAL_COMMENTS;
  });

  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Sinh viên / Lao động part-time');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('dau_food_comments', JSON.stringify(comments));
    } catch (e) {
      // ignore
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    setIsSubmitting(true);
    const newComment: CommentItem = {
      id: 'c_' + Date.now(),
      author: author.trim(),
      role: role.trim() || 'Người lao động',
      timestamp: 'Vừa xong',
      content: content.trim(),
      likes: 1,
      verified: false
    };

    setTimeout(() => {
      setComments([newComment, ...comments]);
      setAuthor('');
      setContent('');
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 4000);
    }, 400);
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <section id="community" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Diễn Đàn Cộng Đồng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bạn cũng từng gặp tình trạng tương tự tại Đậu Food?
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Hãy chia sẻ trải nghiệm thực tế hoặc ý kiến của bạn để cùng chung tay bảo vệ môi trường làm việc minh bạch, văn minh.
          </p>
        </div>

        {/* Comment Form Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 sm:p-7 mb-10 shadow-lg">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Send className="w-4 h-4 text-red-500" />
            <span>Để lại câu chuyện hoặc bình luận của bạn</span>
          </h3>

          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Cảm ơn bạn! Bình luận của bạn đã được đăng thành công.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Tên hoặc Bí danh của bạn:
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Tuấn Nguyễn / Cựu nhân viên..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Vai trò / Công việc:
                </label>
                <input
                  type="text"
                  placeholder="VD: Sinh viên part-time, Cựu nhân viên F&B..."
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Nội dung chia sẻ (Khách quan, đúng sự thật, không xúc phạm):
              </label>
              <textarea
                required
                rows={3}
                placeholder="Chia sẻ trải nghiệm làm việc, số tiền bị giữ (nếu có), hoặc lời khuyên cho các bạn chuẩn bị đi làm..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-zinc-500 hidden sm:inline">
                * Bình luận được hiển thị công khai trên landing page.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-all disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Đang gửi...' : 'Gửi bình luận'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Comments Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 px-1">
            <span>Ý kiến đóng góp ({comments.length})</span>
            <span>Mới nhất lên đầu</span>
          </div>

          {comments.map((cmt) => (
            <div
              key={cmt.id}
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-bold text-xs">
                    {cmt.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{cmt.author}</span>
                      {cmt.verified && (
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/40 px-1.5 py-0.2 rounded flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Đã xác minh
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-zinc-500">{cmt.role} • {cmt.timestamp}</span>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => handleLike(cmt.id)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                  title="Hữu ích"
                >
                  <ThumbsUp className="w-3 h-3 text-red-400" />
                  <span>{cmt.likes}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-10">
                {cmt.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
