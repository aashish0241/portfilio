import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechBackground from "./TechBackground";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project categories
const categories = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "api", label: "API" },
  { id: "database", label: "Database" },
];

// Project data
const projects = [
  {
    id: 1,
    title: "School Management System",
    description:
      "A comprehensive Node.js and Express backend for school management with an event system and library resource management. Features RESTful API architecture, JWT authentication, and role-based access control.",
    image: "/placeholder-project1.jpg", // We'll create an SVG illustration instead
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    category: ["backend", "api"],
    links: {
      live: "http://bindhyeshwori.netlify.app/",
      github: "https://github.com/aashish0241",
    },
  },
  {
    id: 2,
    title: "Job Finder Platform",
    description:
      "MERN stack application with real-time job listings, advanced filtering, and user authentication. Backend features include worker profiles, job matching algorithms, and notification systems.",
    image: "/placeholder-project2.jpg", // We'll create an SVG illustration instead
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    category: ["fullstack", "api"],
    links: {
      live: "https://jobfindernepal.netlify.app/find-jobs",
      github: "https://github.com/aashish0241",
    },
  },
  {
    id: 3,
    title: "Student Notes API",
    description:
      "RESTful API for student note-taking with MongoDB data persistence, file uploads, search functionality, and user authentication. Includes rate limiting and caching for performance optimization.",
    image: "/placeholder-project3.jpg", // We'll create an SVG illustration instead
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    category: ["backend", "api"],
    links: {
      live: "https://aashish4756.blogspot.com",
      github: "https://github.com/aashish0241",
    },
  },
  {
    id: 4,
    title: "E-commerce Backend",
    description:
      "Scalable e-commerce backend with product management, cart systems, and order processing. Features include inventory management, payment gateway integration, and detailed analytics.",
    image: "/placeholder-project4.jpg", // We'll create an SVG illustration instead
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Payment API"],
    category: ["backend", "api", "database"],
    links: {
      github: "https://github.com/aashish0241",
    },
  },
  {
    id: 5,
    title: "Real-time Chat System",
    description:
      "WebSocket-based chat application with message persistence, user presence indicators, and typing notifications. Built with Express and Socket.io with MongoDB for data storage.",
    image: "/placeholder-project5.jpg", // We'll create an SVG illustration instead
    technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
    category: ["backend", "fullstack"],
    links: {
      github: "https://github.com/aashish0241",
    },
  },
  {
    id: 6,
    title: "Database Migration Tool",
    description:
      "CLI tool for migrating between SQL and NoSQL databases with schema validation, data transformation, and integrity checks. Supports MongoDB, MySQL, and PostgreSQL.",
    image: "/placeholder-project6.jpg", // We'll create an SVG illustration instead
    technologies: ["Node.js", "MongoDB", "MySQL", "PostgreSQL"],
    category: ["database", "backend"],
    links: {
      github: "https://github.com/aashish0241",
    },
  },
];

// Project card component with SVG illustration
const ProjectCard = ({ project, index }) => {
  // Generate a unique gradient for each project
  const getGradient = (id) => {
    const hues = [
      [0, 240], // pink to blue
      [170, 240], // teal to blue
      [270, 340], // purple to pink
      [200, 130], // blue to green
      [280, 200], // purple to blue
      [330, 30], // pink to yellow
    ];

    const [from, to] = hues[id % hues.length];

    return {
      from: `hsla(${from}, 100%, 60%, 0.8)`,
      to: `hsla(${to}, 100%, 60%, 0.8)`,
    };
  };

  const gradient = getGradient(project.id);

  // SVG illustration pattern based on project ID
  const generateSvgPattern = (id) => {
    const patterns = [
      // Server and database
      <g>
        <rect x="150" y="150" width="200" height="300" rx="10" fill="#1a1a1a" />
        <rect x="170" y="170" width="160" height="20" rx="5" fill="#333" />
        <rect x="170" y="200" width="160" height="20" rx="5" fill="#333" />
        <rect x="170" y="230" width="160" height="20" rx="5" fill="#333" />
        <circle cx="250" cy="300" r="40" fill={gradient.from} opacity="0.3" />
        <rect x="200" y="350" width="100" height="80" rx="5" fill="#333" />
        <line
          x1="250"
          y1="300"
          x2="250"
          y2="350"
          stroke="#555"
          strokeWidth="3"
        />
      </g>,
      // API endpoints
      <g>
        <path d="M150,200 L350,200 L350,400 L150,400 Z" fill="#1a1a1a" />
        <path d="M170,220 L330,220 L330,250 L170,250 Z" fill="#333" />
        <path d="M170,270 L330,270 L330,300 L170,300 Z" fill="#333" />
        <path d="M170,320 L330,320 L330,350 L170,350 Z" fill="#333" />
        <path d="M170,370 L330,370 L330,390 L170,390 Z" fill="#333" />
        <circle cx="150" cy="150" r="30" fill={gradient.from} opacity="0.5" />
        <circle cx="350" cy="150" r="30" fill={gradient.to} opacity="0.5" />
      </g>,
      // Document database
      <g>
        <path
          d="M200,150 C200,150 150,200 150,250 C150,350 350,350 350,250 C350,200 300,150 300,150 Z"
          fill="#1a1a1a"
        />
        <path d="M175,200 L325,200" stroke="#444" strokeWidth="2" />
        <path d="M175,230 L325,230" stroke="#444" strokeWidth="2" />
        <path d="M175,260 L325,260" stroke="#444" strokeWidth="2" />
        <path d="M175,290 L325,290" stroke="#444" strokeWidth="2" />
        <circle cx="250" cy="350" r="40" fill={gradient.from} opacity="0.3" />
      </g>,
      // Network/API endpoints
      <g>
        <circle cx="250" cy="200" r="50" fill="#1a1a1a" />
        <circle cx="150" cy="300" r="50" fill="#1a1a1a" />
        <circle cx="350" cy="300" r="50" fill="#1a1a1a" />
        <circle cx="250" cy="400" r="50" fill="#1a1a1a" />
        <line
          x1="250"
          y1="250"
          x2="150"
          y2="300"
          stroke="#444"
          strokeWidth="3"
        />
        <line
          x1="250"
          y1="250"
          x2="350"
          y2="300"
          stroke="#444"
          strokeWidth="3"
        />
        <line
          x1="150"
          y1="300"
          x2="250"
          y2="400"
          stroke="#444"
          strokeWidth="3"
        />
        <line
          x1="350"
          y1="300"
          x2="250"
          y2="400"
          stroke="#444"
          strokeWidth="3"
        />
        <circle cx="250" cy="200" r="20" fill={gradient.from} opacity="0.7" />
      </g>,
      // Chat bubbles
      <g>
        <path
          d="M150,200 C150,180 170,150 200,150 L300,150 C330,150 350,180 350,200 L350,250 C350,270 330,300 300,300 L250,300 L220,330 L220,300 L200,300 C170,300 150,270 150,250 Z"
          fill="#1a1a1a"
        />
        <circle cx="200" cy="225" r="10" fill="#333" />
        <circle cx="250" cy="225" r="10" fill="#333" />
        <circle cx="300" cy="225" r="10" fill="#333" />
        <path
          d="M200,350 C200,330 220,300 250,300 L350,300 C380,300 400,330 400,350 L400,400 C400,420 380,450 350,450 L300,450 L270,480 L270,450 L250,450 C220,450 200,420 200,400 Z"
          fill="#333"
        />
        <circle cx="350" cy="400" r="20" fill={gradient.to} opacity="0.5" />
      </g>,
      // Database tables
      <g>
        <rect x="150" y="150" width="200" height="300" rx="5" fill="#1a1a1a" />
        <line
          x1="150"
          y1="190"
          x2="350"
          y2="190"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="230"
          x2="350"
          y2="230"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="270"
          x2="350"
          y2="270"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="310"
          x2="350"
          y2="310"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="350"
          x2="350"
          y2="350"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="150"
          x2="200"
          y2="450"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="250"
          y1="150"
          x2="250"
          y2="450"
          stroke="#444"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="150"
          x2="300"
          y2="450"
          stroke="#444"
          strokeWidth="2"
        />
        <rect
          x="250"
          y="310"
          width="50"
          height="40"
          fill={gradient.from}
          opacity="0.3"
        />
      </g>,
    ];

    return patterns[(id - 1) % patterns.length];
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glass-card rounded-xl overflow-hidden border border-primary-500/10 h-full flex flex-col transition-all duration-300 hover:border-primary-500/30">
        {/* Project illustration */}
        <div className="relative h-48 bg-dark-800 overflow-hidden">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {/* Dark background */}
            <rect x="0" y="0" width="500" height="500" fill="#0d0d0d" />

            {/* Grid pattern */}
            <g opacity="0.1">
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 50}
                  x2="500"
                  y2={i * 50}
                  stroke="#aaa"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 50}
                  y1="0"
                  x2={i * 50}
                  y2="500"
                  stroke="#aaa"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Project-specific pattern */}
            {generateSvgPattern(project.id)}

            {/* Gradient overlay */}
            <rect
              x="0"
              y="0"
              width="500"
              height="500"
              fill={`url(#projectGradient-${project.id})`}
              opacity="0.15"
            />

            {/* Define gradient */}
            <defs>
              <linearGradient
                id={`projectGradient-${project.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={gradient.from} />
                <stop offset="100%" stopColor={gradient.to} />
              </linearGradient>
            </defs>
          </svg>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-pink-500/10 opacity-60"></div>

          {/* Overlay with category tags */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-dark-900/80 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-2 py-1 rounded-md bg-dark-800 text-primary-400 border border-primary-500/20"
                >
                  {categories.find((c) => c.id === cat)?.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-dark-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Category button component
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
          layoutId="activeCategoryBackground"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{category.label}</span>
    </motion.button>
  );
};

// Main Portfolio component
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section className="relative py-20 bg-dark-900 text-light-100 overflow-hidden">
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
            My Work
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Backend & MERN Stack Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in building robust server-side applications
            and full-stack solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-16 p-8 glass-card border border-primary-500/10 rounded-2xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center text-5xl text-gray-200 mb-6">
            <FaGithub />
          </div>
          <h3 className="text-2xl font-bold gradient-text mb-3">
            More Projects on GitHub
          </h3>
          <p className="text-gray-400 mb-6">
            Check out my GitHub profile for more backend projects, APIs, and
            database solutions. Many of my projects include detailed
            documentation and code samples.
          </p>
          <motion.a
            href="https://github.com/aashish0241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800 text-primary-400 font-medium border border-primary-500/40 hover:bg-dark-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
