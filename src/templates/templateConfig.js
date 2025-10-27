// Configuration des 30 templates de CV
// 5 templates sont implémentés, 25 à venir

import ModernProfessional from './ModernProfessional';
import TechDeveloper from './TechDeveloper';
import CreativeDesigner from './CreativeDesigner';
import CorporateExecutive from './CorporateExecutive';
import MinimalistClean from './MinimalistClean';

export const templateConfig = [
  // ========== TECH & DÉVELOPPEMENT (10 templates) ==========
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    category: 'Tech & Dev',
    component: ModernProfessional,
    colors: { primary: '#1e40af', secondary: '#3b82f6', sidebar: '#111827' },
    description: 'Design moderne inspiré du CV de référence',
    implemented: true
  },
  {
    id: 'tech-developer',
    name: 'Tech Developer',
    category: 'Tech & Dev',
    component: TechDeveloper,
    colors: { primary: '#0891b2', secondary: '#06b6d4', sidebar: '#164e63' },
    description: 'Style tech avec accents cyan',
    implemented: true
  },
  {
    id: 'dev-dark-mode',
    name: 'Developer Dark',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#111827', secondary: '#22d3ee', sidebar: '#000000' },
    description: 'Dark mode pour développeurs',
    implemented: false
  },
  {
    id: 'fullstack-pro',
    name: 'Full Stack Pro',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#4f46e5', secondary: '#6366f1', sidebar: '#312e81' },
    description: 'Pour développeurs full stack',
    implemented: false
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#7c3aed', secondary: '#a78bfa', sidebar: '#5b21b6' },
    description: 'Orienté data et analytics',
    implemented: false
  },
  {
    id: 'devops-engineer',
    name: 'DevOps Engineer',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#059669', secondary: '#10b981', sidebar: '#064e3b' },
    description: 'Style DevOps/SRE',
    implemented: false
  },
  {
    id: 'mobile-developer',
    name: 'Mobile Developer',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#0ea5e9', secondary: '#38bdf8', sidebar: '#0c4a6e' },
    description: 'Pour développeurs mobile',
    implemented: false
  },
  {
    id: 'security-specialist',
    name: 'Security Specialist',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#dc2626', secondary: '#ef4444', sidebar: '#7f1d1d' },
    description: 'Sécurité informatique',
    implemented: false
  },
  {
    id: 'ai-ml-engineer',
    name: 'AI/ML Engineer',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#8b5cf6', secondary: '#a78bfa', sidebar: '#6d28d9' },
    description: 'Intelligence artificielle',
    implemented: false
  },
  {
    id: 'blockchain-dev',
    name: 'Blockchain Developer',
    category: 'Tech & Dev',
    component: null,
    colors: { primary: '#f59e0b', secondary: '#fbbf24', sidebar: '#78350f' },
    description: 'Développement blockchain',
    implemented: false
  },

  // ========== CRÉATIF & DESIGN (7 templates) ==========
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    category: 'Créatif & Design',
    component: CreativeDesigner,
    colors: { primary: '#db2777', secondary: '#f472b6', sidebar: '#831843' },
    description: 'Design créatif avec gradients',
    implemented: true
  },
  {
    id: 'minimalist-clean',
    name: 'Minimalist Clean',
    category: 'Créatif & Design',
    component: MinimalistClean,
    colors: { primary: '#000000', secondary: '#ffffff', sidebar: '#ffffff' },
    description: 'Minimalisme épuré',
    implemented: true
  },
  {
    id: 'artistic-portfolio',
    name: 'Artistic Portfolio',
    category: 'Créatif & Design',
    component: null,
    colors: { primary: '#f97316', secondary: '#fb923c', sidebar: '#7c2d12' },
    description: 'Style artistique vibrant',
    implemented: false
  },
  {
    id: 'ui-ux-designer',
    name: 'UI/UX Designer',
    category: 'Créatif & Design',
    component: null,
    colors: { primary: '#8b5cf6', secondary: '#c084fc', sidebar: '#5b21b6' },
    description: 'Focus UI/UX',
    implemented: false
  },
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    category: 'Créatif & Design',
    component: null,
    colors: { primary: '#ec4899', secondary: '#f9a8d4', sidebar: '#9f1239' },
    description: 'Design graphique bold',
    implemented: false
  },
  {
    id: 'motion-designer',
    name: 'Motion Designer',
    category: 'Créatif & Design',
    component: null,
    colors: { primary: '#14b8a6', secondary: '#5eead4', sidebar: '#0f766e' },
    description: 'Animation et motion',
    implemented: false
  },
  {
    id: 'brand-designer',
    name: 'Brand Designer',
    category: 'Créatif & Design',
    component: null,
    colors: { primary: '#0ea5e9', secondary: '#7dd3fc', sidebar: '#0c4a6e' },
    description: 'Identity et branding',
    implemented: false
  },

  // ========== BUSINESS & CORPORATE (6 templates) ==========
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    category: 'Business & Corporate',
    component: CorporateExecutive,
    colors: { primary: '#d97706', secondary: '#fbbf24', sidebar: '#1e293b' },
    description: 'Cadres et dirigeants',
    implemented: true
  },
  {
    id: 'business-consultant',
    name: 'Business Consultant',
    category: 'Business & Corporate',
    component: null,
    colors: { primary: '#1e40af', secondary: '#3b82f6', sidebar: '#1e3a8a' },
    description: 'Consultants en entreprise',
    implemented: false
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    category: 'Business & Corporate',
    component: null,
    colors: { primary: '#059669', secondary: '#34d399', sidebar: '#065f46' },
    description: 'Gestion de projet',
    implemented: false
  },
  {
    id: 'sales-director',
    name: 'Sales Director',
    category: 'Business & Corporate',
    component: null,
    colors: { primary: '#dc2626', secondary: '#f87171', sidebar: '#991b1b' },
    description: 'Direction commerciale',
    implemented: false
  },
  {
    id: 'operations-manager',
    name: 'Operations Manager',
    category: 'Business & Corporate',
    component: null,
    colors: { primary: '#475569', secondary: '#94a3b8', sidebar: '#1e293b' },
    description: 'Gestion des opérations',
    implemented: false
  },
  {
    id: 'ceo-founder',
    name: 'CEO/Founder',
    category: 'Business & Corporate',
    component: null,
    colors: { primary: '#0f172a', secondary: '#94a3b8', sidebar: '#000000' },
    description: 'Entrepreneurs et CEO',
    implemented: false
  },

  // ========== MARKETING & COMMUNICATION (3 templates) ==========
  {
    id: 'marketing-vibrant',
    name: 'Marketing Vibrant',
    category: 'Marketing & Com',
    component: null,
    colors: { primary: '#ef4444', secondary: '#f97316', sidebar: '#7f1d1d' },
    description: 'Marketing énergique',
    implemented: false
  },
  {
    id: 'social-media-manager',
    name: 'Social Media Manager',
    category: 'Marketing & Com',
    component: null,
    colors: { primary: '#ec4899', secondary: '#f472b6', sidebar: '#9f1239' },
    description: 'Community management',
    implemented: false
  },
  {
    id: 'content-creator',
    name: 'Content Creator',
    category: 'Marketing & Com',
    component: null,
    colors: { primary: '#7c3aed', secondary: '#a78bfa', sidebar: '#5b21b6' },
    description: 'Création de contenu',
    implemented: false
  },

  // ========== AUTRES PROFILS (4 templates) ==========
  {
    id: 'healthcare-professional',
    name: 'Healthcare Professional',
    category: 'Santé & Médical',
    component: null,
    colors: { primary: '#0891b2', secondary: '#06b6d4', sidebar: '#164e63' },
    description: 'Professions médicales',
    implemented: false
  },
  {
    id: 'education-teacher',
    name: 'Education Teacher',
    category: 'Éducation',
    component: null,
    colors: { primary: '#f59e0b', secondary: '#fbbf24', sidebar: '#78350f' },
    description: 'Enseignants',
    implemented: false
  },
  {
    id: 'legal-professional',
    name: 'Legal Professional',
    category: 'Finance & Juridique',
    component: null,
    colors: { primary: '#44403c', secondary: '#78716c', sidebar: '#1c1917' },
    description: 'Professions juridiques',
    implemented: false
  },
  {
    id: 'finance-analyst',
    name: 'Finance Analyst',
    category: 'Finance & Juridique',
    component: null,
    colors: { primary: '#065f46', secondary: '#059669', sidebar: '#022c22' },
    description: 'Analyse financière',
    implemented: false
  }
];

// Fonction pour obtenir un template par son ID
export const getTemplateById = (id) => {
  return templateConfig.find(template => template.id === id);
};

// Fonction pour obtenir tous les templates d'une catégorie
export const getTemplatesByCategory = (category) => {
  return templateConfig.filter(template => template.category === category);
};

// Fonction pour obtenir uniquement les templates implémentés
export const getImplementedTemplates = () => {
  return templateConfig.filter(template => template.implemented);
};

// Liste des catégories
export const categories = [
  'all',
  'Tech & Dev',
  'Créatif & Design',
  'Business & Corporate',
  'Marketing & Com',
  'Santé & Médical',
  'Éducation',
  'Finance & Juridique'
];

export default templateConfig;