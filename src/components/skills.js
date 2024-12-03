import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaCode,
  FaGit,
  FaGithub,
  FaPlug,
  FaComment,
  FaChrome,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiNetlify,
  SiMysql,
} from "react-icons/si";

// Skills data with colors
const skills = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Node.js", icon: FaNode, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", icon: FaDatabase, color: "text-green-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "RabbitMq", icon: FaComment, color: "text-blue-600" },
  { name: "Socket Io", icon: FaPlug, color: "text-red-600" },
  { name: "HTML", icon: FaHtml5, color: "text-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "React.js", icon: FaReact, color: "text-blue-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
  { name: "VS Code", icon: FaCode, color: "text-blue-600" },
  { name: "Git", icon: FaGit, color: "text-red-600" },
  { name: "GitHub", icon: FaGithub, color: "text-purple-700" },
  { name: "Netlify", icon: SiNetlify, color: "text-black" },
  { name: "Developer Console", icon: FaChrome, color: "text-red-500" },
];

// Individual skill card component with motion.div for animation
const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="bg-[#14083b] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
        <div className="px-6 py-8">
          <div className="flex justify-center">
            <Icon className={`text-6xl ${skill.color}`} />
          </div>
          <div className="font-bold text-xl mt-4 text-center text-white">
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
    <div className="bg-gray-50 w-full p-4 lg:p-12" data-aos="fade-down">
      <h1 className="text-4xl font-bold text-center py-8 text-gray-800">
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
