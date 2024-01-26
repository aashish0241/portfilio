import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaDatabase,
  FaCode,
  FaGit,
  FaGithub,
  FaFigma,
  FaChrome,
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#eb4034' },    // Orange
  { name: 'CSS', icon: FaCss3Alt, color: '#0000FF' },   // Blue
  { name: 'JavaScript', icon: FaJs, color: '#FFFF00' }, // Yellow
  { name: 'Node.js', icon: FaNode, color: '#008000' },   // Green
  { name: 'React.js', icon: FaReact, color: '#ADD8E6' }, // Light Blue
  { name: 'MongoDB', icon: FaDatabase, color: '#008000' }, // Green
  { name: 'Tailwind CSS', icon: FaCode, color: '#00FFFF' }, // Cyan
  { name: 'Redux.js', icon: FaCode, color: '#800080' },   // Purple
  { name: 'Express', icon: FaCode, color: '#808080' },    // Gray
  { name: 'TypeScript', icon: FaCode, color: '#0000FF' }, // Blue
  { name: 'VS Code', icon: FaCode, color: '#0000FF' },    // Blue
  { name: 'Git', icon: FaGit, color: '#FF0000' },         // Red
  { name: 'GitHub', icon: FaGithub, color: '#800080' },   // Purple
  { name: 'Netlify', icon: FaCode, color: '#000000' },    // Black
  { name: 'Figma', icon: FaFigma, color: '#FFC0CB' },     // Pink
  { name: 'Chrome', icon: FaChrome, color: '#FF0000' },   // Red
];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="max-w-sm w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div
        className={`bg-${skill.color} shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:bg-${skill.color}-700 hover:scale-105`}
      >
        <div className="px-6 py-4  bg-[#14083b]">
          <div className="flex justify-center">
            <Icon className="text-5xl" style={{ color: skill.color }} />
          </div>
          <div className={`font-bold text-xl mb-2 text-center text-white`}>
            {skill.name}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsCollection = () => {
  return (
    <div className="bg-gray-600">
      <h1 className="text-4xl font-bold text-center py-8 text-white">
        My <span className="text-blue-600">Skills</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCollection;
