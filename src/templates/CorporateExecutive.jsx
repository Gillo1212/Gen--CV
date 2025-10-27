import React from 'react';
import { SkillBar, SectionTitle, ExperienceItem, EducationItem, ContactInfo, ProfilePhoto } from '../components';
import { Briefcase } from 'lucide-react';

const CorporateExecutive = ({ cvData }) => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar gauche - Navy/Corporate */}
      <div className="w-2/5 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8">
        <ProfilePhoto photoUrl={cvData.personalInfo.photoUrl} size="large" borderColor="#d97706" />
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 tracking-widest uppercase">{cvData.personalInfo.fullName || 'YOUR NAME'}</h1>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Briefcase size={18} />
            <p className="text-base font-semibold">{cvData.personalInfo.title || 'Executive'}</p>
          </div>
        </div>

        {cvData.personalInfo.summary && (
          <div className="mb-8">
            <div className="border-l-4 border-amber-500 pl-4 mb-3">
              <h2 className="text-lg font-bold">Executive Summary</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{cvData.personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <div className="border-l-4 border-amber-500 pl-4 mb-3">
            <h2 className="text-lg font-bold">Contact Information</h2>
          </div>
          <ContactInfo
            phone={cvData.personalInfo.phone}
            email={cvData.personalInfo.email}
            location={cvData.personalInfo.location}
            linkedin={cvData.personalInfo.linkedin}
            github={cvData.personalInfo.github}
            website={cvData.personalInfo.website}
            iconColor="#d97706"
          />
        </div>

        {cvData.languages && cvData.languages.length > 0 && (
          <div className="mb-8">
            <div className="border-l-4 border-amber-500 pl-4 mb-3">
              <h2 className="text-lg font-bold">Languages</h2>
            </div>
            <ul className="space-y-2">
              {cvData.languages.map((lang, idx) => (
                <li key={idx} className="text-sm text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-amber-500"></span>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cvData.skills && cvData.skills.length > 0 && (
          <div>
            <div className="border-l-4 border-amber-500 pl-4 mb-3">
              <h2 className="text-lg font-bold">Core Competencies</h2>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {cvData.skills.map((skill, idx) => (
                <div key={idx} className="px-3 py-2 bg-slate-700 border-l-2 border-amber-500 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-3/5 p-10 bg-gray-50">
        {cvData.experience && cvData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-12 bg-amber-600"></div>
              <h2 className="text-2xl font-bold text-gray-800">PROFESSIONAL EXPERIENCE</h2>
            </div>
            {cvData.experience.map((exp, idx) => (
              (exp.company || exp.position) && (
                <div key={idx} className="mb-6 pl-6 border-l-2 border-gray-300">
                  <ExperienceItem
                    company={exp.company}
                    position={exp.position}
                    location={exp.location}
                    period={exp.period}
                    description={exp.description}
                  />
                </div>
              )
            ))}
          </div>
        )}

        {cvData.education && cvData.education.some(edu => edu.school || edu.degree) && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-12 bg-amber-600"></div>
              <h2 className="text-2xl font-bold text-gray-800">EDUCATION</h2>
            </div>
            {cvData.education.map((edu, idx) => (
              (edu.school || edu.degree) && (
                <div key={idx} className="mb-5 pl-6 border-l-2 border-gray-300">
                  <EducationItem
                    school={edu.school}
                    degree={edu.degree}
                    period={edu.period}
                    details={edu.details}
                  />
                </div>
              )
            ))}
          </div>
        )}

        {cvData.skillsWithLevels && cvData.skillsWithLevels.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-12 bg-amber-600"></div>
              <h2 className="text-2xl font-bold text-gray-800">SKILLS ASSESSMENT</h2>
            </div>
            <div className="pl-6">
              {cvData.skillsWithLevels.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  skill={skill.name}
                  percentage={skill.level}
                  color="#d97706"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateExecutive;