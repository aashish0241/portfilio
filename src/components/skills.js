// Importing necessary packages and icons
import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";

// Skills data with colors
const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Node.js", icon: FaNode, color: "text-green-500" },
  { name: "React.js", icon: FaReact, color: "text-blue-300" },
  { name: "MongoDB", icon: FaDatabase, color: "text-green-600" },
  { name: "Tailwind CSS", icon: FaCode, color: "text-teal-400" },
  { name: "Redux.js", icon: FaCode, color: "text-purple-600" },
  { name: "Express", icon: FaCode, color: "text-gray-500" },
  { name: "TypeScript", icon: FaCode, color: "text-blue-700" },
  { name: "VS Code", icon: FaCode, color: "text-blue-600" },
  { name: "Git", icon: FaGit, color: "text-red-600" },
  { name: "GitHub", icon: FaGithub, color: "text-purple-700" },
  { name: "Netlify", icon: FaCode, color: "text-black" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "Chrome", icon: FaChrome, color: "text-red-500" },
  { name: "fireBase", icon: FaCode, color: "text-red-500" },
];

// Individual skill card component with motion.div for animation
const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        data-aos="fade-down"
        className="bg-[#14083b] shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        <div className="px-6 py-4">
          <div className="flex justify-center">
            <Icon className={`text-5xl ${skill.color}`} />
          </div>
          <div className="font-bold text-xl mb-2 text-center text-white">
            {skill.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Skills collection component
const SkillsCollection = () => {
  return (
    <div className="bg-gray-50 w-full p-4" data-aos="fade-down">
      <h1 className="text-4xl font-bold text-center py-8 text-black">
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
