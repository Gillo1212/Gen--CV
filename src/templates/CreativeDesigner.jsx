import React from 'react';
import { SkillBar, SectionTitle, ExperienceItem, EducationItem, ContactInfo, ProfilePhoto } from '../components';
import { Palette } from 'lucide-react';

const CreativeDesigner = ({ cvData }) => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar gauche - Purple/Creative */}
      <div className="w-2/5 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white p-8">
        <ProfilePhoto photoUrl={cvData.personalInfo.photoUrl} size="large" borderColor="#f472b6" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-wide">{cvData.personalInfo.fullName || 'YOUR NAME'}</h1>
          <div className="flex items-center justify-center gap-2">
            <Palette size={18} className="text-pink-300" />
            <p className="text-lg text-pink-200 italic">{cvData.personalInfo.title || 'Creative Designer'}</p>
          </div>
        </div>

        {cvData.personalInfo.summary && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full mb-4">
              <h2 className="text-base font-bold text-center">Creative Vision</h2>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed italic">{cvData.personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full mb-4">
            <h2 className="text-base font-bold text-center">Get in Touch</h2>
          </div>
          <ContactInfo
            phone={cvData.personalInfo.phone}
            email={cvData.personalInfo.email}
            location={cvData.personalInfo.location}
            linkedin={cvData.personalInfo.linkedin}
            github={cvData.personalInfo.github}
            website={cvData.personalInfo.website}
            iconColor="#f472b6"
          />
        </div>

        {cvData.languages && cvData.languages.length > 0 && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full mb-4">
              <h2 className="text-base font-bold text-center">Languages</h2>
            </div>
            <div className="space-y-2">
              {cvData.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                  <span className="text-sm">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {cvData.skills && cvData.skills.length > 0 && (
          <div>
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full mb-4">
              <h2 className="text-base font-bold text-center">Creative Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-pink-700 to-purple-700 rounded-full text-xs font-medium shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-3/5 p-10 bg-gradient-to-br from-pink-50 to-purple-50">
        {cvData.experience && cvData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-10">
            <SectionTitle title="Experience" color="#db2777" />
            {cvData.experience.map((exp, idx) => (
              (exp.company || exp.position) && (
                <div key={idx} className="mb-6 p-4 bg-white rounded-lg shadow-sm">
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
            <SectionTitle title="Education" color="#db2777" />
            {cvData.education.map((edu, idx) => (
              (edu.school || edu.degree) && (
                <div key={idx} className="mb-5 p-4 bg-white rounded-lg shadow-sm">
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
            <SectionTitle title="Skill Mastery" color="#db2777" />
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {cvData.skillsWithLevels.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  skill={skill.name}
                  percentage={skill.level}
                  color="#ec4899"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeDesigner;