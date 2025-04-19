import { useState } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaGit,
  FaGithub,
  FaPlug,
  FaComment,
  FaServer,
  FaNetworkWired,
  FaCodeBranch,
  FaCloud,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiNetlify,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGraphql,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";

// Skill category tabs
const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & DevOps" },
];

// Skills data with categories and colors
const skills = [
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    textColor: "#0D0D0D",
    category: ["frontend", "backend"],
  },
  {
    name: "Node.js",
    icon: FaNode,
    color: "#539E43",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#0FFFFF",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    textColor: "#FFFFFF",
    category: ["database"],
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    textColor: "#0D0D0D",
    category: ["database", "backend"],
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#FF79A1",
    textColor: "#FFFFFF",
    category: ["database"],
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    textColor: "#FFFFFF",
    category: ["database"],
  },
  {
    name: "RabbitMQ",
    icon: FaComment,
    color: "#FF6600",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "Socket.io",
    icon: FaPlug,
    color: "#F10101",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    textColor: "#FFFFFF",
    category: ["frontend"],
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    textColor: "#FFFFFF",
    category: ["frontend"],
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    textColor: "#0D0D0D",
    category: ["frontend"],
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    textColor: "#FFFFFF",
    category: ["frontend", "backend"],
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    textColor: "#FFFFFF",
    category: ["frontend"],
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "Git",
    icon: FaGit,
    color: "#F05032",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFF98F",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "AWS",
    icon: FaCloud,
    color: "#232F3E",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "RESTful APIs",
    icon: FaNetworkWired,
    color: "#6236FF",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
  {
    name: "CI/CD",
    icon: FaCodeBranch,
    color: "#43A047",
    textColor: "#FFFFFF",
    category: ["tools"],
  },
  {
    name: "Microservices",
    icon: FaServer,
    color: "#FF4081",
    textColor: "#FFFFFF",
    category: ["backend"],
  },
];

// Individual skill card component
const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <motion.div
        className="glass-card rounded-xl p-6 h-full flex flex-col items-center justify-center border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300"
        whileHover={{
          y: -5,
          boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-lg mb-4"
          style={{
            backgroundColor: `${skill.color}20`,
            color: skill.color,
          }}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-medium text-light-100 mb-1">
          {skill.name}
        </h3>

        {/* Skill proficiency visualization */}
        <div className="w-full mt-3 bg-dark-800 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full"
            style={{
              width: `${75 + Math.random() * 25}%`,
              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Category tab buttons
const CategoryButton = ({ category, activeCategory, onClick }) => {
  const isActive = activeCategory === category.id;

  return (
    <motion.button
      onClick={() => onClick(category.id)}
      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
        isActive ? "text-dark-900" : "text-gray-400 hover:text-primary-400"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.span
          className="absolute inset-0 bg-primary-500"
          layoutId="activeSkillCategory"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{category.label}</span>
    </motion.button>
  );
};

// Main Skills component
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category.includes(activeCategory));

  return (
    <section className="py-20 bg-dark-900 text-light-100 relative overflow-hidden">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary-400 mb-2 block">
            My Expertise
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical abilities and expertise in various
            technologies
          </p>
        </motion.div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Interactive element - Skill meter */}
        <motion.div
          className="mt-16 p-8 glass-card rounded-2xl border border-primary-500/10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Skill Development Focus
          </h3>
          <p className="text-gray-400 mb-6">
            I'm constantly expanding my skill set and currently focusing on
            these emerging technologies:
          </p>

          <div className="space-y-6">
            {[
              { name: "Microservices Architecture", progress: 85 },
              { name: "AWS Cloud Infrastructure", progress: 70 },
              { name: "CI/CD Pipeline Automation", progress: 75 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-light-100">{skill.name}</span>
                  <span className="text-primary-400">{skill.progress}%</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.2 + index * 0.2,
                    }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <motion.a
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800 text-primary-400 font-medium border border-primary-500/40 hover:bg-dark-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Projects</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
