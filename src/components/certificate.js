import { useState } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

// Certificate data
const certificates = [
  {
    image: "/src/assets/udemycertificate.jpg",
    title: "Udemy Certificate of MERN Stack",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://www.udemy.com/certificate/UC-b3bbdde9-5545-411f-b9ae-a4f3ef360761/",
    issuer: "Udemy",
    date: "2022",
    category: "Web Development",
  },
  {
    image: "/src/assets/school.png",
    title: "School Event and Library with Admin Panel",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    link: "http://bindhyeshwori.netlify.app/",
    issuer: "Self-Project",
    date: "2022",
    category: "Web Development",
  },
  {
    image: "/src/assets/nodejscertificate.png",
    title: "Certificate of NodeJS from HackerRank",
    description:
      "Covers topics like Package Management, Event Loop, Buffers, Streams, and File Systems.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
    issuer: "HackerRank",
    date: "2023",
    category: "Backend Development",
  },
  {
    image: "/src/assets/sqlcertificate.png",
    title: "Certificate of SQL from HackerRank",
    description: "Covers topics like queries, relationships, and aggregators.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
    issuer: "HackerRank",
    date: "2023",
    category: "Database",
  },
];

// Individual Certificate Card Component
const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="glass-card relative h-full overflow-hidden rounded-2xl border border-primary-500/10 transition-all duration-300"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 20px rgba(0, 255, 195, 0.2)",
          borderColor: "rgba(0, 255, 195, 0.3)",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-3 right-3 bg-dark-800/90 glass text-primary-400 text-xs font-medium py-1 px-2 rounded-full border border-primary-500/20">
            {certificate.category}
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-light-100 mb-2">
              {certificate.title}
            </h3>
          </div>

          <div className="flex items-center mb-3 text-xs space-x-4">
            <div className="text-gray-400">
              <span className="text-primary-400">{certificate.issuer}</span>
            </div>
            <div className="text-gray-400">
              <span>{certificate.date}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            {certificate.description}
          </p>

          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View Certificate</span>
            <svg
              className="w-4 h-4 ml-1"
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
          </a>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `
              radial-gradient(
                500px circle at ${isHovered ? "var(--x)" : "0"} ${
              isHovered ? "var(--y)" : "0"
            },
                rgba(0, 255, 195, 0.06),
                transparent 40%
              )
            `,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Certificate Section Component
const Certificates = () => {
  return (
    <section className="py-20 bg-dark-900 text-light-100 relative overflow-hidden">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary-400 mb-2 block">
            Achievements
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            My Certificates
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <motion.div
            className="glass-card border border-primary-500/10 p-6 max-w-2xl text-center rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3 gradient-text">
              Continuous Learning
            </h3>
            <p className="text-gray-400">
              I am committed to continuous learning and skill development. These
              certifications represent my dedication to mastering various
              technologies and best practices in web development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mouse hover effect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.glass-card');
            cards.forEach(card => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--x', \`\${x}px\`);
              card.style.setProperty('--y', \`\${y}px\`);
            });
          });
        `,
        }}
      />
    </section>
  );
};

export default Certificates;
