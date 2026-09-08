export interface TimelineEvent {
  id: string;
  date: string;
  time?: string;
  title: string;
  actor: 'laborer' | 'company' | 'legal';
  badge: string;
  description: string;
  evidenceRef?: string;
  details?: string[];
}

export interface ZaloMessage {
  sender: 'applicant' | 'hr' | 'representative';
  senderName: string;
  time: string;
  text: string;
  isImagePlaceholder?: boolean;
  imageCaption?: string;
  isHighlighted?: boolean;
}

export interface EvidenceItem {
  id: string;
  number: number;
  title: string;
  summary: string;
  keyTakeaway: string;
  lawViolationNote: string;
  messages: ZaloMessage[];
}

export interface LegalClause {
  article: string;
  law: string;
  title: string;
  quote: string;
  plainExplanation: string;
  applicationToCase: string;
}

export interface ReviewCriterion {
  label: string;
  score: number;
  maxScore: number;
  critique: string;
  impact: 'critical' | 'high' | 'medium';
}

export interface CommentItem {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  content: string;
  likes: number;
  verified?: boolean;
}
