import React, { useState } from 'react';
import { FileText, Download, User, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Linkedin, Github, Search, X } from 'lucide-react';

const CVGenerator = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [selectedTemplate, setSelectedTemplate] = useState('tech-modern');
  const [searchTemplate, setSearchTemplate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      website: '',
      summary: ''
    },
    experience: [
      { company: '', position: '', period: '', description: '' }
    ],
    education: [
      { school: '', degree: '', period: '', details: '' }
    ],
    skills: [],
    languages: [],
    certifications: [],
    projects: []
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentCertification, setCurrentCertification] = useState('');

  const templates = [
    // TECH & DÉVELOPPEMENT (5)
    { id: 'tech-modern', name: 'Tech Modern', category: 'Tech & Dev', color: 'bg-blue-600', accent: 'bg-blue-500', description: 'Parfait pour développeurs' },
    { id: 'dev-dark', name: 'Developer Dark', category: 'Tech & Dev', color: 'bg-gray-900', accent: 'bg-cyan-400', description: 'Style code-friendly' },
    { id: 'tech-gradient', name: 'Tech Gradient', category: 'Tech & Dev', color: 'bg-gradient-to-r from-purple-600 to-blue-600', accent: 'bg-purple-500', description: 'Moderne et dynamique' },
    { id: 'fullstack', name: 'Full Stack', category: 'Tech & Dev', color: 'bg-indigo-600', accent: 'bg-indigo-400', description: 'Pour développeurs polyvalents' },
    { id: 'cybersec', name: 'CyberSec', category: 'Tech & Dev', color: 'bg-red-900', accent: 'bg-red-600', description: 'Sécurité informatique' },

    // CRÉATIF & DESIGN (5)
    { id: 'creative-bold', name: 'Creative Bold', category: 'Créatif & Design', color: 'bg-pink-600', accent: 'bg-pink-400', description: 'Pour designers audacieux' },
    { id: 'artistic', name: 'Artistic', category: 'Créatif & Design', color: 'bg-gradient-to-br from-orange-500 to-pink-600', accent: 'bg-orange-500', description: 'Style artistique' },
    { id: 'minimalist-pro', name: 'Minimalist Pro', category: 'Créatif & Design', color: 'bg-black', accent: 'bg-white', description: 'Élégance minimaliste' },
    { id: 'designer-portfolio', name: 'Designer Portfolio', category: 'Créatif & Design', color: 'bg-purple-700', accent: 'bg-yellow-400', description: 'Showcase créatif' },
    { id: 'creative-dual', name: 'Creative Dual', category: 'Créatif & Design', color: 'bg-teal-600', accent: 'bg-amber-500', description: 'Deux colonnes créatives' },

    // BUSINESS & CORPORATE (5)
    { id: 'corporate-blue', name: 'Corporate Blue', category: 'Business & Corporate', color: 'bg-blue-800', accent: 'bg-blue-600', description: 'Professionnel classique' },
    { id: 'executive', name: 'Executive', category: 'Business & Corporate', color: 'bg-gray-800', accent: 'bg-gold-500', description: 'Cadres dirigeants' },
    { id: 'business-modern', name: 'Business Modern', category: 'Business & Corporate', color: 'bg-slate-700', accent: 'bg-sky-500', description: 'Business contemporain' },
    { id: 'consultant', name: 'Consultant Pro', category: 'Business & Corporate', color: 'bg-navy-900', accent: 'bg-emerald-500', description: 'Pour consultants' },
    { id: 'corporate-elite', name: 'Corporate Elite', category: 'Business & Corporate', color: 'bg-zinc-900', accent: 'bg-amber-600', description: 'Haut de gamme' },

    // MARKETING & COMMUNICATION (4)
    { id: 'marketing-vibrant', name: 'Marketing Vibrant', category: 'Marketing & Com', color: 'bg-gradient-to-r from-red-500 to-orange-500', accent: 'bg-orange-400', description: 'Énergique et dynamique' },
    { id: 'social-media', name: 'Social Media', category: 'Marketing & Com', color: 'bg-gradient-to-br from-pink-500 to-purple-600', accent: 'bg-pink-400', description: 'Community managers' },
    { id: 'brand-manager', name: 'Brand Manager', category: 'Marketing & Com', color: 'bg-rose-600', accent: 'bg-rose-400', description: 'Gestion de marque' },
    { id: 'content-creator', name: 'Content Creator', category: 'Marketing & Com', color: 'bg-violet-600', accent: 'bg-fuchsia-400', description: 'Créateurs de contenu' },

    // FINANCE & JURIDIQUE (3)
    { id: 'finance-pro', name: 'Finance Pro', category: 'Finance & Juridique', color: 'bg-emerald-800', accent: 'bg-emerald-600', description: 'Secteur financier' },
    { id: 'legal', name: 'Legal Professional', category: 'Finance & Juridique', color: 'bg-stone-800', accent: 'bg-stone-600', description: 'Professions juridiques' },
    { id: 'accounting', name: 'Accounting', category: 'Finance & Juridique', color: 'bg-teal-800', accent: 'bg-teal-500', description: 'Comptabilité' },

    // SANTÉ & MÉDICAL (3)
    { id: 'medical', name: 'Medical', category: 'Santé & Médical', color: 'bg-cyan-700', accent: 'bg-cyan-500', description: 'Professions médicales' },
    { id: 'healthcare', name: 'Healthcare', category: 'Santé & Médical', color: 'bg-blue-700', accent: 'bg-blue-400', description: 'Secteur santé' },
    { id: 'pharma', name: 'Pharmaceutical', category: 'Santé & Médical', color: 'bg-green-700', accent: 'bg-green-500', description: 'Industrie pharmaceutique' },

    // ÉDUCATION (2)
    { id: 'education', name: 'Education', category: 'Éducation', color: 'bg-amber-700', accent: 'bg-amber-500', description: 'Enseignants et formateurs' },
    { id: 'academic', name: 'Academic', category: 'Éducation', color: 'bg-orange-700', accent: 'bg-orange-500', description: 'Recherche académique' },

    // AUTRES (3)
    { id: 'startup', name: 'Startup Spirit', category: 'Autres', color: 'bg-gradient-to-r from-green-500 to-teal-500', accent: 'bg-green-400', description: 'Esprit startup' },
    { id: 'freelance', name: 'Freelance', category: 'Autres', color: 'bg-lime-600', accent: 'bg-lime-400', description: 'Travailleurs indépendants' },
    { id: 'universal', name: 'Universal', category: 'Autres', color: 'bg-neutral-700', accent: 'bg-neutral-500', description: 'Polyvalent' }
  ];

  const categories = ['all', 'Tech & Dev', 'Créatif & Design', 'Business & Corporate', 'Marketing & Com', 'Finance & Juridique', 'Santé & Médical', 'Éducation', 'Autres'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTemplate.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTemplate.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const updatePersonalInfo = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', period: '', description: '' }]
    }));
  };

  const updateExperience = (index, field, value) => {
    const newExperience = [...cvData.experience];
    newExperience[index][field] = value;
    setCvData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeExperience = (index) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, { school: '', degree: '', period: '', details: '' }]
    }));
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...cvData.education];
    newEducation[index][field] = value;
    setCvData(prev => ({ ...prev, education: newEducation }));
  };

  const removeEducation = (index) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setCvData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const removeSkill = (index) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addLanguage = () => {
    if (currentLanguage.trim()) {
      setCvData(prev => ({
        ...prev,
        languages: [...prev.languages, currentLanguage.trim()]
      }));
      setCurrentLanguage('');
    }
  };

  const removeLanguage = (index) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const addCertification = () => {
    if (currentCertification.trim()) {
      setCvData(prev => ({
        ...prev,
        certifications: [...prev.certifications, currentCertification.trim()]
      }));
      setCurrentCertification('');
    }
  };

  const removeCertification = (index) => {
    setCvData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  const getTemplateColors = (templateId) => {
    const template = templates.find(t => t.id === templateId);
    
    const colorMap = {
      'tech-modern': { header: '#2563eb', accent: '#3b82f6', text: '#1e40af' },
      'dev-dark': { header: '#111827', accent: '#22d3ee', text: '#0e7490' },
      'tech-gradient': { header: '#7c3aed', accent: '#8b5cf6', text: '#6d28d9' },
      'fullstack': { header: '#4f46e5', accent: '#6366f1', text: '#4338ca' },
      'cybersec': { header: '#7f1d1d', accent: '#dc2626', text: '#991b1b' },
      'creative-bold': { header: '#db2777', accent: '#ec4899', text: '#be185d' },
      'artistic': { header: '#f97316', accent: '#fb923c', text: '#ea580c' },
      'minimalist-pro': { header: '#000000', accent: '#ffffff', text: '#374151' },
      'designer-portfolio': { header: '#7e22ce', accent: '#facc15', text: '#6b21a8' },
      'creative-dual': { header: '#0d9488', accent: '#f59e0b', text: '#0f766e' },
      'corporate-blue': { header: '#1e40af', accent: '#2563eb', text: '#1e3a8a' },
      'executive': { header: '#1f2937', accent: '#d97706', text: '#374151' },
      'business-modern': { header: '#334155', accent: '#0ea5e9', text: '#475569' },
      'consultant': { header: '#1e3a8a', accent: '#10b981', text: '#1e40af' },
      'corporate-elite': { header: '#18181b', accent: '#d97706', text: '#27272a' },
      'marketing-vibrant': { header: '#ef4444', accent: '#f97316', text: '#dc2626' },
      'social-media': { header: '#ec4899', accent: '#f0abfc', text: '#db2777' },
      'brand-manager': { header: '#e11d48', accent: '#fb7185', text: '#be123c' },
      'content-creator': { header: '#7c3aed', accent: '#e879f9', text: '#6d28d9' },
      'finance-pro': { header: '#065f46', accent: '#059669', text: '#047857' },
      'legal': { header: '#44403c', accent: '#78716c', text: '#57534e' },
      'accounting': { header: '#115e59', accent: '#14b8a6', text: '#0f766e' },
      'medical': { header: '#0e7490', accent: '#06b6d4', text: '#155e75' },
      'healthcare': { header: '#1e40af', accent: '#3b82f6', text: '#1e3a8a' },
      'pharma': { header: '#15803d', accent: '#22c55e', text: '#166534' },
      'education': { header: '#b45309', accent: '#f59e0b', text: '#92400e' },
      'academic': { header: '#c2410c', accent: '#f97316', text: '#9a3412' },
      'startup': { header: '#16a34a', accent: '#14b8a6', text: '#15803d' },
      'freelance': { header: '#65a30d', accent: '#84cc16', text: '#4d7c0f' },
      'universal': { header: '#404040', accent: '#737373', text: '#525252' }
    };

    return colorMap[templateId] || colorMap['tech-modern'];
  };

  const generatePDF = async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let yPos = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxWidth = 170;

    const checkPageBreak = (neededSpace) => {
      if (yPos + neededSpace > pageHeight - margin) {
        doc.addPage();
        yPos = 20;
      }
    };

    const colors = getTemplateColors(selectedTemplate);
    const headerColor = colors.header;
    const accentColor = colors.accent;

    // Convertir hex en RGB
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    const headerRgb = hexToRgb(headerColor);
    const accentRgb = hexToRgb(accentColor);

    // Header
    doc.setFillColor(headerRgb.r, headerRgb.g, headerRgb.b);
    doc.rect(0, 0, 210, 45, 'F');
    
    // Nom
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont(undefined, 'bold');
    doc.text(cvData.personalInfo.fullName || 'Votre Nom', margin, 25);
    
    // Titre
    doc.setFontSize(16);
    doc.setFont(undefined, 'normal');
    doc.text(cvData.personalInfo.title || 'Votre Titre', margin, 37);
    
    yPos = 55;
    doc.setTextColor(0, 0, 0);

    // Contact Info
    doc.setFontSize(9);
    const contactInfo = [];
    if (cvData.personalInfo.email) contactInfo.push(`📧 ${cvData.personalInfo.email}`);
    if (cvData.personalInfo.phone) contactInfo.push(`📱 ${cvData.personalInfo.phone}`);
    if (cvData.personalInfo.location) contactInfo.push(`📍 ${cvData.personalInfo.location}`);
    if (cvData.personalInfo.linkedin) contactInfo.push(`💼 ${cvData.personalInfo.linkedin}`);
    if (cvData.personalInfo.github) contactInfo.push(`💻 ${cvData.personalInfo.github}`);
    if (cvData.personalInfo.website) contactInfo.push(`🌐 ${cvData.personalInfo.website}`);
    
    contactInfo.forEach(info => {
      doc.text(info, margin, yPos);
      yPos += 5;
    });
    
    yPos += 5;

    // Summary
    if (cvData.personalInfo.summary) {
      checkPageBreak(20);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('PROFIL PROFESSIONNEL', margin, yPos);
      yPos += 8;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      const summaryLines = doc.splitTextToSize(cvData.personalInfo.summary, maxWidth);
      doc.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * 5 + 8;
    }

    // Experience
    if (cvData.experience.some(exp => exp.company || exp.position)) {
      checkPageBreak(20);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('EXPÉRIENCE PROFESSIONNELLE', margin, yPos);
      yPos += 8;
      
      cvData.experience.forEach(exp => {
        if (exp.company || exp.position) {
          checkPageBreak(25);
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(0, 0, 0);
          doc.text(exp.position || 'Poste', margin, yPos);
          yPos += 6;
          
          doc.setFontSize(10);
          doc.setFont(undefined, 'normal');
          doc.setTextColor(80, 80, 80);
          doc.text(`${exp.company || 'Entreprise'} | ${exp.period || 'Période'}`, margin, yPos);
          yPos += 6;
          
          if (exp.description) {
            doc.setTextColor(0, 0, 0);
            const descLines = doc.splitTextToSize(exp.description, maxWidth);
            doc.text(descLines, margin, yPos);
            yPos += descLines.length * 5 + 3;
          }
          yPos += 3;
        }
      });
      yPos += 3;
    }

    // Education
    if (cvData.education.some(edu => edu.school || edu.degree)) {
      checkPageBreak(20);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('FORMATION', margin, yPos);
      yPos += 8;
      
      cvData.education.forEach(edu => {
        if (edu.school || edu.degree) {
          checkPageBreak(20);
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(0, 0, 0);
          doc.text(edu.degree || 'Diplôme', margin, yPos);
          yPos += 6;
          
          doc.setFontSize(10);
          doc.setFont(undefined, 'normal');
          doc.setTextColor(80, 80, 80);
          doc.text(`${edu.school || 'École'} | ${edu.period || 'Période'}`, margin, yPos);
          yPos += 6;
          
          if (edu.details) {
            doc.setTextColor(0, 0, 0);
            const detailLines = doc.splitTextToSize(edu.details, maxWidth);
            doc.text(detailLines, margin, yPos);
            yPos += detailLines.length * 5 + 3;
          }
          yPos += 3;
        }
      });
      yPos += 3;
    }

    // Skills
    if (cvData.skills.length > 0) {
      checkPageBreak(20);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('COMPÉTENCES', margin, yPos);
      yPos += 8;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      const skillsText = cvData.skills.join(' • ');
      const skillLines = doc.splitTextToSize(skillsText, maxWidth);
      doc.text(skillLines, margin, yPos);
      yPos += skillLines.length * 5 + 8;
    }

    // Languages
    if (cvData.languages.length > 0) {
      checkPageBreak(15);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('LANGUES', margin, yPos);
      yPos += 8;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      cvData.languages.forEach(lang => {
        doc.text(`• ${lang}`, margin, yPos);
        yPos += 5;
      });
      yPos += 5;
    }

    // Certifications
    if (cvData.certifications.length > 0) {
      checkPageBreak(15);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(headerRgb.r, headerRgb.g, headerRgb.b);
      doc.text('CERTIFICATIONS', margin, yPos);
      yPos += 8;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      cvData.certifications.forEach(cert => {
        checkPageBreak(7);
        doc.text(`• ${cert}`, margin, yPos);
        yPos += 5;
      });
    }

    const templateName = templates.find(t => t.id === selectedTemplate)?.name || 'CV';
    doc.save(`CV_${cvData.personalInfo.fullName || 'MonCV'}_${templateName}.pdf`);
  };

  const PreviewComponent = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    const isDark = ['dev-dark', 'minimalist-pro'].includes(selectedTemplate);

    return (
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: '842px', width: '595px', transform: 'scale(0.75)', transformOrigin: 'top' }}>
        {/* Header */}
        <div className={`${template?.color} ${isDark ? 'text-white' : 'text-white'} p-8`}>
          <h1 className="text-3xl font-bold mb-2">{cvData.personalInfo.fullName || 'Votre Nom'}</h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'opacity-90'}`}>
            {cvData.personalInfo.title || 'Votre Titre Professionnel'}
          </p>
        </div>

        <div className="p-8 space-y-5">
          {/* Contact */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            {cvData.personalInfo.email && (
              <div className="flex items-center gap-1.5">
                <Mail size={14} />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            {cvData.personalInfo.phone && (
              <div className="flex items-center gap-1.5">
                <Phone size={14} />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            {cvData.personalInfo.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>{cvData.personalInfo.location}</span>
              </div>
            )}
            {cvData.personalInfo.linkedin && (
              <div className="flex items-center gap-1.5">
                <Linkedin size={14} />
                <span className="truncate max-w-[150px]">{cvData.personalInfo.linkedin}</span>
              </div>
            )}
            {cvData.personalInfo.github && (
              <div className="flex items-center gap-1.5">
                <Github size={14} />
                <span>{cvData.personalInfo.github}</span>
              </div>
            )}
          </div>

          {/* Summary */}
          {cvData.personalInfo.summary && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                PROFIL PROFESSIONNEL
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">{cvData.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {cvData.experience.some(exp => exp.company || exp.position) && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                EXPÉRIENCE PROFESSIONNELLE
              </h2>
              <div className="space-y-3">
                {cvData.experience.map((exp, idx) => (
                  (exp.company || exp.position) && (
                    <div key={idx}>
                      <h3 className="font-semibold text-sm text-gray-900">{exp.position || 'Poste'}</h3>
                      <p className="text-xs text-gray-600 mb-1">
                        {exp.company || 'Entreprise'} | {exp.period || 'Période'}
                      </p>
                      {exp.description && (
                        <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {cvData.education.some(edu => edu.school || edu.degree) && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                FORMATION
              </h2>
              <div className="space-y-2">
                {cvData.education.map((edu, idx) => (
                  (edu.school || edu.degree) && (
                    <div key={idx}>
                      <h3 className="font-semibold text-sm text-gray-900">{edu.degree || 'Diplôme'}</h3>
                      <p className="text-xs text-gray-600">
                        {edu.school || 'École'} | {edu.period || 'Période'}
                      </p>
                      {edu.details && (
                        <p className="text-xs text-gray-700">{edu.details}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {cvData.skills.length > 0 && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                COMPÉTENCES
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {cvData.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: getTemplateColors(selectedTemplate).accent + '20',
                      color: getTemplateColors(selectedTemplate).text
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                LANGUES
              </h2>
              <div className="flex flex-wrap gap-2">
                {cvData.languages.map((lang, idx) => (
                  <span key={idx} className="text-xs text-gray-700">• {lang}</span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {cvData.certifications.length > 0 && (
            <div>
              <h2 className={`text-base font-bold mb-2`} style={{ color: getTemplateColors(selectedTemplate).text }}>
                CENTRES D'INTÉRÊTS
              </h2>
              <div className="space-y-1">
                {cvData.certifications.map((cert, idx) => (
                  <p key={idx} className="text-xs text-gray-700">• {cert}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg">
                <FileText className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Générateur de CV Professionnel
                </h1>
                <p className="text-gray-600">30 templates modernes pour tous les profils</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentStep('form')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 'form'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📝 Informations
              </button>
              <button
                onClick={() => setCurrentStep('preview')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 'preview'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🎨 Templates
              </button>
            </div>
          </div>
        </div>

        {currentStep === 'form' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Column */}
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Informations Personnelles</h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    value={cvData.personalInfo.fullName}
                    onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <input
                    type="text"
                    placeholder="Titre professionnel *"
                    value={cvData.personalInfo.title}
                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email *"
                      value={cvData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone *"
                      value={cvData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Localisation"
                    value={cvData.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="LinkedIn"
                      value={cvData.personalInfo.linkedin}
                      onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <input
                      type="text"
                      placeholder="GitHub / Portfolio"
                      value={cvData.personalInfo.github}
                      onChange={(e) => updatePersonalInfo('github', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <textarea
                    placeholder="Résumé professionnel - Présentez-vous en quelques phrases..."
                    value={cvData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">Expérience Professionnelle</h2>
                  </div>
                  <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium"
                  >
                    + Ajouter
                  </button>
                </div>
                <div className="space-y-4">
                  {cvData.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border-2 border-gray-100 rounded-lg space-y-3 hover:border-blue-200 transition">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-600">Expérience #{idx + 1}</span>
                        {cvData.experience.length > 1 && (
                          <button
                            onClick={() => removeExperience(idx)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Supprimer
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Poste occupé"
                        value={exp.position}
                        onChange={(e) => updateExperience(idx, 'position', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Entreprise"
                          value={exp.company}
                          onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Période (ex: Jan 2020 - Présent)"
                          value={exp.period}
                          onChange={(e) => updateExperience(idx, 'period', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <textarea
                        placeholder="Décrivez vos missions et réalisations..."
                        value={exp.description}
                        onChange={(e) => updateExperience(idx, 'description', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">Formation</h2>
                  </div>
                  <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition text-sm font-medium"
                  >
                    + Ajouter
                  </button>
                </div>
                <div className="space-y-4">
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="p-4 border-2 border-gray-100 rounded-lg space-y-3 hover:border-blue-200 transition">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-600">Formation #{idx + 1}</span>
                        {cvData.education.length > 1 && (
                          <button
                            onClick={() => removeEducation(idx)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Supprimer
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Diplôme obtenu"
                        value={edu.degree}
                        onChange={(e) => updateEducation(idx, 'degree', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="École / Université"
                          value={edu.school}
                          onChange={(e) => updateEducation(idx, 'school', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Période"
                          value={edu.period}
                          onChange={(e) => updateEducation(idx, 'period', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <textarea
                        placeholder="Mention, spécialisation... (optionnel)"
                        value={edu.details}
                        onChange={(e) => updateEducation(idx, 'details', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Compétences</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ajouter une compétence (ex: React, Python...)"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={addSkill}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2 font-medium"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(idx)}
                          className="hover:text-red-600 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">🌍 Langues</h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ajouter une langue (ex: Français - Natif)"
                      value={currentLanguage}
                      onChange={(e) => setCurrentLanguage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={addLanguage}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2 font-medium"
                      >
                        {lang}
                        <button
                          onClick={() => removeLanguage(idx)}
                          className="hover:text-red-600 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">🏆 CENTRES D'INTÉRÊTS</h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ajouter un centre d'intérêt"
                      value={currentCertification}
                      onChange={(e) => setCurrentCertification(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCertification()}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={addCertification}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="space-y-2">
                    {cvData.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg text-sm flex items-center justify-between font-medium"
                      >
                        <span>{cert}</span>
                        <button
                          onClick={() => removeCertification(idx)}
                          className="hover:text-red-600 font-bold"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview Column */}
            <div className="lg:sticky lg:top-4 h-fit">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Aperçu en direct</h2>
                  <span className="text-sm text-gray-500">{templates.find(t => t.id === selectedTemplate)?.name}</span>
                </div>
                <div className="overflow-auto border-2 border-gray-200 rounded-lg">
                  <PreviewComponent />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher un template..."
                    value={searchTemplate}
                    onChange={(e) => setSearchTemplate(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searchTemplate && (
                    <button
                      onClick={() => setSearchTemplate('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? '📁 Toutes catégories' : cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">{filteredTemplates.length}</span>
                <span>template{filteredTemplates.length > 1 ? 's' : ''} trouvé{filteredTemplates.length > 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Template Grid */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choisissez votre template</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`group p-4 rounded-xl border-2 transition-all ${
                      selectedTemplate === template.id
                        ? 'border-blue-600 shadow-xl ring-4 ring-blue-100'
                        : 'border-gray-200 hover:border-blue-400 hover:shadow-lg'
                    }`}
                  >
                    <div className={`${template.color} h-32 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform`}>
                      {template.name}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-800 mb-1">{template.name}</p>
                      <p className="text-xs text-gray-500 mb-2">{template.description}</p>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        {template.category}
                      </span>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="mt-3 text-blue-600 font-semibold text-sm flex items-center gap-1">
                        ✓ Sélectionné
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Aucun template trouvé</p>
                  <button
                    onClick={() => {
                      setSearchTemplate('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>

            {/* Full Preview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Aperçu final</h2>
                  <p className="text-gray-600 mt-1">
                    Template: <span className="font-semibold">{templates.find(t => t.id === selectedTemplate)?.name}</span>
                  </p>
                </div>
                <button
                  onClick={generatePDF}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all font-bold text-lg"
                >
                  <Download size={24} />
                  Télécharger PDF
                </button>
              </div>
              <div className="flex justify-center border-2 border-gray-200 rounded-xl p-4 bg-gray-50">
                <PreviewComponent />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Load jsPDF */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    </div>
  );
};

export default CVGenerator;