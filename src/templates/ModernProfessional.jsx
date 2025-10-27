import React from 'react';
import { SkillBar, SectionTitle, ExperienceItem, EducationItem, ContactInfo, ProfilePhoto } from '../components';

const ModernProfessional = ({ cvData }) => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar gauche - Sombre */}
      <div className="w-2/5 bg-gray-900 text-white p-8">
        {/* Photo de profil */}
        <ProfilePhoto photoUrl={cvData.personalInfo.photoUrl} size="large" borderColor="#3b82f6" />
        
        {/* Nom et titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{cvData.personalInfo.fullName || 'VOTRE NOM'}</h1>
          <p className="text-lg text-blue-300">{cvData.personalInfo.title || 'Votre Titre'}</p>
        </div>

        {/* About Me */}
        {cvData.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-blue-500">About Me</h2>
            <p className="text-sm text-gray-300 leading-relaxed">{cvData.personalInfo.summary}</p>
          </div>
        )}

        {/* Contact Info */}
        <div className="mb-8">
          <ContactInfo
            phone={cvData.personalInfo.phone}
            email={cvData.personalInfo.email}
            location={cvData.personalInfo.location}
            linkedin={cvData.personalInfo.linkedin}
            github={cvData.personalInfo.github}
            website={cvData.personalInfo.website}
            iconColor="#3b82f6"
          />
        </div>

        {/* Languages */}
        {cvData.languages && cvData.languages.length > 0 && (
          <div className="mb-8">
            <div className="px-6 py-2 bg-blue-600 rounded-full inline-block mb-4">
              <h2 className="text-lg font-bold">Language</h2>
            </div>
            <ul className="space-y-2">
              {cvData.languages.map((lang, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expertise */}
        {cvData.skills && cvData.skills.length > 0 && (
          <div>
            <div className="px-6 py-2 bg-blue-600 rounded-full inline-block mb-4">
              <h2 className="text-lg font-bold">Expertise</h2>
            </div>
            <ul className="space-y-2">
              {cvData.skills.map((skill, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contenu principal - Clair */}
      <div className="w-3/5 p-10 bg-gray-50">
        {/* Experience */}
        {cvData.experience && cvData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-10">
            <SectionTitle title="Experience" color="#1e40af" />
            {cvData.experience.map((exp, idx) => (
              (exp.company || exp.position) && (
                <ExperienceItem
                  key={idx}
                  company={exp.company}
                  position={exp.position}
                  location={exp.location}
                  period={exp.period}
                  description={exp.description}
                />
              )
            ))}
          </div>
        )}

        {/* Education */}
        {cvData.education && cvData.education.some(edu => edu.school || edu.degree) && (
          <div className="mb-10">
            <SectionTitle title="Education" color="#1e40af" />
            {cvData.education.map((edu, idx) => (
              (edu.school || edu.degree) && (
                <EducationItem
                  key={idx}
                  school={edu.school}
                  degree={edu.degree}
                  period={edu.period}
                  details={edu.details}
                />
              )
            ))}
          </div>
        )}

        {/* Skills Summary avec barres de progression */}
        {cvData.skillsWithLevels && cvData.skillsWithLevels.length > 0 && (
          <div>
            <SectionTitle title="Skills Summary" color="#1e40af" />
            {cvData.skillsWithLevels.map((skill, idx) => (
              <SkillBar
                key={idx}
                skill={skill.name}
                percentage={skill.level}
                color="#2563eb"
              />
            ))}
          </div>
        )}

        {/* Certifications */}
        {cvData.certifications && cvData.certifications.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Certifications</h3>
            <ul className="space-y-2">
              {cvData.certifications.map((cert, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernProfessional;