import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { DocumentViewerSection } from './components/DocumentViewerSection';
import { EvidenceSection } from './components/EvidenceSection';
import { LegalSection } from './components/LegalSection';
import { ScorecardSection } from './components/ScorecardSection';
import { WarningCallToAction } from './components/WarningCallToAction';
import { CommunityFeedback } from './components/CommunityFeedback';
import { Footer } from './components/Footer';
import { MediationDocumentModal } from './components/MediationDocumentModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { ShareModal } from './components/ShareModal';
import { Share2, FileText, AlertTriangle } from 'lucide-react';

export default function App() {
  const [isMediationDocOpen, setIsMediationDocOpen] = useState(false);
  const [isExportHtmlOpen, setIsExportHtmlOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <Header
        onOpenMediationDoc={() => setIsMediationDocOpen(true)}
        onOpenExportHtml={() => setIsExportHtmlOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero
          onOpenShareModal={() => setIsShareModalOpen(true)}
          onOpenMediationDoc={() => setIsMediationDocOpen(true)}
        />
        <TimelineSection />
        <DocumentViewerSection
          onOpenMediationModal={() => setIsMediationDocOpen(true)}
        />
        <EvidenceSection />
        <LegalSection />
        <ScorecardSection />
        <WarningCallToAction
          onOpenShareModal={() => setIsShareModalOpen(true)}
        />
        <CommunityFeedback />
      </main>

      {/* Footer */}
      <Footer
        onOpenMediationDoc={() => setIsMediationDocOpen(true)}
        onOpenExportHtml={() => setIsExportHtmlOpen(true)}
      />

      {/* Floating Action Bar on Mobile / Quick Access */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2">
        <a
          href="#document"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
        >
          <FileText className="w-3.5 h-3.5 text-amber-400" />
          <span>Tệp đơn & ảnh thực tế</span>
        </a>

        <button
          onClick={() => setIsShareModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-950/60 text-xs font-bold transition-all hover:scale-105 active:scale-95"
        >
          <Share2 className="w-4 h-4" />
          <span>Chia sẻ đánh giá</span>
        </button>
      </div>

      {/* Modals */}
      <MediationDocumentModal
        isOpen={isMediationDocOpen}
        onClose={() => setIsMediationDocOpen(false)}
      />

      <ExportHtmlModal
        isOpen={isExportHtmlOpen}
        onClose={() => setIsExportHtmlOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
