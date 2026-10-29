import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { EducationExperience } from './components/EducationExperience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DocumentModal } from './components/DocumentModal';
import { CustomCursor } from './components/CustomCursor';
import { Certification, ExperienceItem, DocumentPreviewData } from './types';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [previewDocument, setPreviewDocument] = useState<DocumentPreviewData | null>(null);

  const handleViewCertificate = (cert: Certification) => {
    setPreviewDocument({
      title: cert.title,
      subtitle: cert.category,
      issuer: cert.issuer,
      fileUrl: cert.certificateUrl || '',
      downloadName: `${cert.id}.pdf`,
      badge: cert.credentialBadge,
      color: cert.color,
      topics: cert.topics,
      description: cert.description,
      type: 'certificate'
    });
  };

  const handleViewExperienceLetter = (exp: ExperienceItem) => {
    setPreviewDocument({
      title: `${exp.role} Service Certificate`,
      subtitle: `${exp.company} • ${exp.period} (${exp.duration})`,
      issuer: exp.company,
      period: exp.period,
      fileUrl: exp.experienceLetterUrl || '',
      downloadName: `${exp.id}-experience-letter.pdf`,
      badge: 'Official Employer Record',
      description: `Official service & experience letter validating 9 months of operations leadership as ${exp.role} at ${exp.company}.`,
      type: 'experience'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      {/* Desktop Custom Fluid Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications onViewCertificate={handleViewCertificate} />
        <EducationExperience onViewExperienceLetter={handleViewExperienceLetter} />
        <Contact />
      </main>

      {/* Refined Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Generic Course & Experience Document Viewer Modal */}
      <DocumentModal
        isOpen={Boolean(previewDocument)}
        documentData={previewDocument}
        onClose={() => setPreviewDocument(null)}
      />
    </div>
  );
};

export default App;
