import React from 'react';
import { SkillBar, SectionTitle, ExperienceItem, EducationItem, ContactInfo, ProfilePhoto } from '../components';
import { Code } from 'lucide-react';

const TechDeveloper = ({ cvData }) => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar gauche - Cyan/Tech */}
      <div className="w-2/5 bg-gradient-to-b from-cyan-900 to-blue-900 text-white p-8">
        <ProfilePhoto photoUrl={cvData.personalInfo.photoUrl} size="large" borderColor="#06b6d4" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{cvData.personalInfo.fullName || 'VOTRE NOM'}</h1>
          <div className="flex items-center justify-center gap-2 text-cyan-300">
            <Code size={20} />
            <p className="text-lg">{cvData.personalInfo.title || 'Developer'}</p>
          </div>
        </div>

        {cvData.personalInfo.summary && (
          <div className="mb-8">
            <div className="px-4 py-2 bg-cyan-600 rounded-lg mb-3">
              <h2 className="text-lg font-bold">Profile</h2>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">{cvData.personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <div className="px-4 py-2 bg-cyan-600 rounded-lg mb-3">
            <h2 className="text-lg font-bold">Contact</h2>
          </div>
          <ContactInfo
            phone={cvData.personalInfo.phone}
            email={cvData.personalInfo.email}
            location={cvData.personalInfo.location}
            linkedin={cvData.personalInfo.linkedin}
            github={cvData.personalInfo.github}
            website={cvData.personalInfo.website}
            iconColor="#06b6d4"
          />
        </div>

        {cvData.languages && cvData.languages.length > 0 && (
          <div className="mb-8">
            <div className="px-4 py-2 bg-cyan-600 rounded-lg mb-3">
              <h2 className="text-lg font-bold">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.languages.map((lang, idx) => (
                <span key={idx} className="px-3 py-1 bg-cyan-700 rounded-full text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        {cvData.skills && cvData.skills.length > 0 && (
          <div>
            <div className="px-4 py-2 bg-cyan-600 rounded-lg mb-3">
              <h2 className="text-lg font-bold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-800 rounded text-xs border border-cyan-500">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-3/5 p-10 bg-white">
        {cvData.experience && cvData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-10">
            <SectionTitle title="Work Experience" color="#0891b2" />
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

        {cvData.education && cvData.education.some(edu => edu.school || edu.degree) && (
          <div className="mb-10">
            <SectionTitle title="Education" color="#0891b2" />
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

        {cvData.skillsWithLevels && cvData.skillsWithLevels.length > 0 && (
          <div>
            <SectionTitle title="Skill Proficiency" color="#0891b2" />
            {cvData.skillsWithLevels.map((skill, idx) => (
              <SkillBar
                key={idx}
                skill={skill.name}
                percentage={skill.level}
                color="#06b6d4"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechDeveloper;