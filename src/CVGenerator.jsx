import React, { useState } from 'react';
import { FileText, Download, User, Briefcase, GraduationCap, Award, Search, X } from 'lucide-react';
import { templateConfig, getImplementedTemplates, categories } from './templates';

const CVGenerator = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [selectedTemplate, setSelectedTemplate] = useState('modern-professional');
  const [searchTemplate, setSearchTemplate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showOnlyImplemented, setShowOnlyImplemented] = useState(false);
  
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
      summary: '',
      photoUrl: '' // Pour la photo de profil
    },
    experience: [
      { company: '', position: '', location: '', period: '', description: '' }
    ],
    education: [
      { school: '', degree: '', period: '', details: '' }
    ],
    skills: [],
    skillsWithLevels: [], // Pour les barres de progression
    languages: [],
    certifications: []
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentCertification, setCurrentCertification] = useState('');
  
  // Pour les compétences avec niveaux
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(75);

  // Filtrer les templates
  const filteredTemplates = templateConfig.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTemplate.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTemplate.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesImplemented = !showOnlyImplemented || template.implemented;
    return matchesSearch && matchesCategory && matchesImplemented;
  });

  // Fonctions de mise à jour
  const updatePersonalInfo = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', location: '', period: '', description: '' }]
    }));
  };

  const updateExperience = (index, field, value) => {
    const newExperience = [...cvData.experience];
    newExperience[index][field] = value;
    setCvData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeExperience = (index) => {
    if (cvData.experience.length > 1) {
      setCvData(prev => ({
        ...prev,
        experience: prev.experience.filter((_, i) => i !== index)
      }));
    }
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
    if (cvData.education.length > 1) {
      setCvData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    }
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

  const addSkillWithLevel = () => {
    if (newSkillName.trim()) {
      setCvData(prev => ({
        ...prev,
        skillsWithLevels: [...prev.skillsWithLevels, { name: newSkillName.trim(), level: newSkillLevel }]
      }));
      setNewSkillName('');
      setNewSkillLevel(75);
    }
  };

  const removeSkillWithLevel = (index) => {
    setCvData(prev => ({
      ...prev,
      skillsWithLevels: prev.skillsWithLevels.filter((_, i) => i !== index)
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

  // Générer PDF (placeholder - à implémenter)
  const generatePDF = () => {
    alert('Fonction de génération PDF à implémenter avec jsPDF');
  };

  // Rendu du template sélectionné
  const renderTemplate = () => {
    const template = templateConfig.find(t => t.id === selectedTemplate);
    if (!template || !template.component) {
      return (
        <div className="flex items-center justify-center h-full bg-gray-100">
          <div className="text-center p-8">
            <p className="text-xl font-bold text-gray-600 mb-2">Template à venir</p>
            <p className="text-gray-500">Ce template sera bientôt disponible</p>
          </div>
        </div>
      );
    }
    
    const TemplateComponent = template.component;
    return <TemplateComponent cvData={cvData} />;
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
                  CV Generator Pro
                </h1>
                <p className="text-gray-600">30 templates modernes - Architecture modulaire</p>
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
                📝 Formulaire
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
            {/* Formulaire */}
            <div className="space-y-6">
              {/* Informations personnelles */}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Titre professionnel *"
                    value={cvData.personalInfo.title}
                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={cvData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={cvData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Localisation"
                    value={cvData.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="LinkedIn"
                      value={cvData.personalInfo.linkedin}
                      onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="GitHub / Portfolio"
                      value={cvData.personalInfo.github}
                      onChange={(e) => updatePersonalInfo('github', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    placeholder="Résumé professionnel"
                    value={cvData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Expériences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">Expérience</h2>
                  </div>
                  <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    + Ajouter
                  </button>
                </div>
                <div className="space-y-4">
                  {cvData.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border-2 border-gray-100 rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-600">Exp #{idx + 1}</span>
                        <button
                          onClick={() => removeExperience(idx)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Supprimer
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Poste"
                        value={exp.position}
                        onChange={(e) => updateExperience(idx, 'position', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Entreprise"
                        value={exp.company}
                        onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Localisation"
                          value={exp.location}
                          onChange={(e) => updateExperience(idx, 'location', e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                          type="text"
                          placeholder="Période"
                          value={exp.period}
                          onChange={(e) => updateExperience(idx, 'period', e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <textarea
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) => updateExperience(idx, 'description', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">Formation</h2>
                  </div>
                  <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    + Ajouter
                  </button>
                </div>
                <div className="space-y-4">
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="p-4 border-2 border-gray-100 rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-600">Edu #{idx + 1}</span>
                        <button
                          onClick={() => removeEducation(idx)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Supprimer
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Diplôme"
                        value={edu.degree}
                        onChange={(e) => updateEducation(idx, 'degree', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="École"
                        value={edu.school}
                        onChange={(e) => updateEducation(idx, 'school', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Période"
                        value={edu.period}
                        onChange={(e) => updateEducation(idx, 'period', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <textarea
                        placeholder="Détails"
                        value={edu.details}
                        onChange={(e) => updateEducation(idx, 'details', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Compétences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Compétences</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Compétence"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <button
                      onClick={addSkill}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                        {skill}
                        <button onClick={() => removeSkill(idx)} className="font-bold">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compétences avec niveaux */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Compétences avec niveaux</h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Nom de la compétence"
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={newSkillLevel}
                      onChange={(e) => setNewSkillLevel(parseInt(e.target.value))}
                      className="w-20 px-3 py-2 border rounded-lg"
                    />
                    <button
                      onClick={addSkillWithLevel}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="space-y-2">
                    {cvData.skillsWithLevels.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <span className="flex-1 text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                        <button
                          onClick={() => removeSkillWithLevel(idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Langues */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Langues</h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Langue (ex: Français - Natif)"
                      value={currentLanguage}
                      onChange={(e) => setCurrentLanguage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <button
                      onClick={addLanguage}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.languages.map((lang, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2">
                        {lang}
                        <button onClick={() => removeLanguage(idx)} className="font-bold">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Certification"
                      value={currentCertification}
                      onChange={(e) => setCurrentCertification(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCertification()}
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <button
                      onClick={addCertification}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Ajouter
                    </button>
                  </div>
                  <div className="space-y-2">
                    {cvData.certifications.map((cert, idx) => (
                      <div key={idx} className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg text-sm flex items-center justify-between">
                        <span>{cert}</span>
                        <button onClick={() => removeCertification(idx)} className="font-bold">×</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Aperçu en direct */}
            <div className="lg:sticky lg:top-4 h-fit">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Aperçu en direct</h2>
                  <span className="text-sm text-gray-500">
                    {templateConfig.find(t => t.id === selectedTemplate)?.name}
                  </span>
                </div>
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden" style={{ height: '842px' }}>
                  <div style={{ transform: 'scale(0.7)', transformOrigin: 'top', width: '142.8%', height: '142.8%' }}>
                    {renderTemplate()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Page Templates
          <div className="space-y-6">
            {/* Recherche et filtres */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher un template..."
                    value={searchTemplate}
                    onChange={(e) => setSearchTemplate(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="px-4 py-3 border rounded-lg"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? '📁 Toutes catégories' : cat}
                    </option>
                  ))}
                </select>
                <label className="flex items-center gap-2 px-4 py-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={showOnlyImplemented}
                    onChange={(e) => setShowOnlyImplemented(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Disponibles uniquement</span>
                </label>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">{filteredTemplates.length}</span> template(s) trouvé(s)
                {showOnlyImplemented && (
                  <span className="ml-2 text-green-600">
                    • {getImplementedTemplates().length} implémentés
                  </span>
                )}
              </div>
            </div>

            {/* Grille de templates */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choisissez votre template</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`group p-4 rounded-xl border-2 transition-all text-left ${
                      selectedTemplate === template.id
                        ? 'border-blue-600 shadow-xl ring-4 ring-blue-100'
                        : 'border-gray-200 hover:border-blue-400 hover:shadow-lg'
                    }`}
                  >
                    <div
                      className="h-32 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform"
                      style={{
                        background: template.colors.primary.startsWith('#')
                          ? template.colors.primary
                          : `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`
                      }}
                    >
                      {template.name}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">{template.name}</p>
                      <p className="text-xs text-gray-500 mb-2">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {template.category}
                        </span>
                        {template.implemented ? (
                          <span className="text-green-600 text-xs font-bold">✓ Disponible</span>
                        ) : (
                          <span className="text-orange-600 text-xs font-bold">⏳ Bientôt</span>
                        )}
                      </div>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="mt-3 text-blue-600 font-semibold text-sm flex items-center gap-1">
                        ✓ Sélectionné
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Aperçu complet */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Aperçu final</h2>
                  <p className="text-gray-600 mt-1">
                    Template: <span className="font-semibold">
                      {templateConfig.find(t => t.id === selectedTemplate)?.name}
                    </span>
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
                <div style={{ width: '595px', height: '842px' }} className="shadow-2xl">
                  {renderTemplate()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVGenerator;