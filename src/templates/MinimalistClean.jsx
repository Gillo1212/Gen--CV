import React from 'react';
import { SkillBar, SectionTitle, ExperienceItem, EducationItem, ContactInfo, ProfilePhoto } from '../components';

const MinimalistClean = ({ cvData }) => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar gauche - Minimaliste */}
      <div className="w-2/5 bg-white border-r-2 border-gray-200 p-8">
        <ProfilePhoto photoUrl={cvData.personalInfo.photoUrl} size="large" borderColor="#000000" />
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-1 text-black">{cvData.personalInfo.fullName || 'YOUR NAME'}</h1>
          <p className="text-sm text-gray-600 uppercase tracking-wider">{cvData.personalInfo.title || 'Professional'}</p>
        </div>

        {cvData.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-base font-bold mb-3 text-black uppercase tracking-wide">About</h2>
            <p className="text-xs text-gray-700 leading-relaxed">{cvData.personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-base font-bold mb-3 text-black uppercase tracking-wide">Contact</h2>
          <div className="space-y-3">
            {cvData.personalInfo.phone && (
              <div className="text-xs text-gray-700">
                <span className="font-semibold">Phone:</span> {cvData.personalInfo.phone}
              </div>
            )}
            {cvData.personalInfo.email && (
              <div className="text-xs text-gray-700 break-all">
                <span className="font-semibold">Email:</span> {cvData.personalInfo.email}
              </div>
            )}
            {cvData.personalInfo.location && (
              <div className="text-xs text-gray-700">
                <span className="font-semibold">Location:</span> {cvData.personalInfo.location}
              </div>
            )}
            {cvData.personalInfo.linkedin && (
              <div className="text-xs text-gray-700 break-all">
                <span className="font-semibold">LinkedIn:</span> {cvData.personalInfo.linkedin}
              </div>
            )}
          </div>
        </div>

        {cvData.languages && cvData.languages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-base font-bold mb-3 text-black uppercase tracking-wide">Languages</h2>
            <ul className="space-y-1">
              {cvData.languages.map((lang, idx) => (
                <li key={idx} className="text-xs text-gray-700">• {lang}</li>
              ))}
            </ul>
          </div>
        )}

        {cvData.skills && cvData.skills.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-3 text-black uppercase tracking-wide">Skills</h2>
            <div className="space-y-1">
              {cvData.skills.map((skill, idx) => (
                <div key={idx} className="text-xs text-gray-700">• {skill}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-3/5 p-10 bg-white">
        {cvData.experience && cvData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wide border-b-2 border-black pb-2">
              Experience
            </h2>
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
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wide border-b-2 border-black pb-2">
              Education
            </h2>
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
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wide border-b-2 border-black pb-2">
              Proficiency
            </h2>
            {cvData.skillsWithLevels.map((skill, idx) => (
              <SkillBar
                key={idx}
                skill={skill.name}
                percentage={skill.level}
                color="#000000"
              />
            ))}
          </div>
        )}

        {cvData.certifications && cvData.certifications.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wide border-b-2 border-black pb-2">
              Certifications
            </h2>
            <ul className="space-y-2">
              {cvData.certifications.map((cert, idx) => (
                <li key={idx} className="text-sm text-gray-700">• {cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalistClean;