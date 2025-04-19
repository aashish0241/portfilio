import React from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

const AboutDescribe = () => {
  return (
    <section className="relative py-20 bg-dark-900 text-light-100 overflow-hidden">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Developer Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card rounded-2xl p-4 border border-primary-500/10 overflow-hidden">
              <div className="relative">
                {/* Developer at work SVG illustration */}
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00ffc3" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#ff007a"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00ffc3" />
                      <stop offset="100%" stopColor="#ff007a" />
                    </linearGradient>
                    <filter
                      id="glow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background */}
                  <rect x="0" y="0" width="800" height="600" fill="#0d0d0d" />

                  {/* Desk */}
                  <rect
                    x="100"
                    y="400"
                    width="600"
                    height="20"
                    fill="#1a1a1a"
                    rx="2"
                  />
                  <rect
                    x="150"
                    y="420"
                    width="500"
                    height="100"
                    fill="#111111"
                  />

                  {/* Computer */}
                  <rect
                    x="250"
                    y="250"
                    width="300"
                    height="150"
                    fill="#111111"
                    rx="5"
                  />
                  <rect
                    x="260"
                    y="260"
                    width="280"
                    height="130"
                    fill="#0a0a0a"
                    rx="3"
                  />

                  {/* Screen content - code */}
                  <rect
                    x="270"
                    y="270"
                    width="260"
                    height="110"
                    fill="#050505"
                    rx="2"
                  />

                  {/* Code lines */}
                  <line
                    x1="280"
                    y1="285"
                    x2="340"
                    y2="285"
                    stroke="#00ffc3"
                    strokeWidth="2"
                  />
                  <line
                    x1="280"
                    y1="300"
                    x2="390"
                    y2="300"
                    stroke="#717171"
                    strokeWidth="2"
                  />
                  <line
                    x1="290"
                    y1="315"
                    x2="370"
                    y2="315"
                    stroke="#717171"
                    strokeWidth="2"
                  />
                  <line
                    x1="280"
                    y1="330"
                    x2="410"
                    y2="330"
                    stroke="#ff007a"
                    strokeWidth="2"
                  />
                  <line
                    x1="300"
                    y1="345"
                    x2="380"
                    y2="345"
                    stroke="#717171"
                    strokeWidth="2"
                  />
                  <line
                    x1="280"
                    y1="360"
                    x2="350"
                    y2="360"
                    stroke="#00ffc3"
                    strokeWidth="2"
                  />

                  {/* Computer base */}
                  <rect
                    x="320"
                    y="400"
                    width="160"
                    height="10"
                    fill="#111111"
                    rx="2"
                  />
                  <rect x="390" y="390" width="20" height="10" fill="#111111" />

                  {/* Developer */}
                  <ellipse cx="400" cy="200" rx="40" ry="40" fill="#1a1a1a" />
                  <rect
                    x="380"
                    y="240"
                    width="40"
                    height="80"
                    fill="#1e1e1e"
                    rx="5"
                  />

                  {/* Arms */}
                  <rect
                    x="350"
                    y="250"
                    width="30"
                    height="10"
                    fill="#1e1e1e"
                    rx="5"
                    transform="rotate(-15, 350, 250)"
                  />
                  <rect
                    x="420"
                    y="250"
                    width="30"
                    height="10"
                    fill="#1e1e1e"
                    rx="5"
                    transform="rotate(15, 420, 250)"
                  />

                  {/* Chair */}
                  <rect
                    x="370"
                    y="320"
                    width="60"
                    height="100"
                    fill="#111111"
                    rx="5"
                  />

                  {/* Glowing elements */}
                  <circle
                    cx="290"
                    cy="230"
                    r="20"
                    fill="url(#gradient1)"
                    filter="url(#glow)"
                    opacity="0.7"
                  />
                  <circle
                    cx="500"
                    cy="320"
                    r="15"
                    fill="url(#gradient1)"
                    filter="url(#glow)"
                    opacity="0.5"
                  />

                  {/* Digital elements */}
                  <path
                    d="M150,180 L170,160 L190,180 L170,200 Z"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                  />
                  <path
                    d="M600,280 L620,260 L640,280 L620,300 Z"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="200"
                    cy="350"
                    r="10"
                    stroke="#00ffc3"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="600"
                    cy="200"
                    r="15"
                    stroke="#ff007a"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                {/* Glowing effect behind the illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-pink-500/10 rounded-lg filter blur-[20px] -z-10"></div>
              </div>
            </div>

            <motion.div
              className="mt-8 p-4 glass-card rounded-xl border border-primary-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-medium mb-2 gradient-text">
                MERN Stack Developer
              </h3>
              <p className="text-gray-400">
                Building robust backend solutions and full-stack applications
                with a focus on MongoDB, Express, React, and Node.js. My
                expertise lies in crafting scalable APIs, optimizing database
                performance, and implementing secure authentication systems.
              </p>
            </motion.div>
          </motion.div>

          {/* Text content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card rounded-2xl p-8 border border-primary-500/10">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                About Me:
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  I was born on August 17, 2003, in the charming town of
                  Pokhara, Nepal. My journey into the world of web development
                  and backend engineering has been a rewarding and exciting one.
                </p>

                <div>
                  <h3 className="text-xl font-medium text-primary-400 mb-3">
                    Backend Development
                  </h3>
                  <p className="text-gray-400">
                    My fascination with server-side programming began when I
                    discovered Node.js and Express. I've since mastered creating
                    robust RESTful APIs, implementing authentication systems,
                    and optimizing database queries. My expertise includes
                    MongoDB aggregation pipelines, Redis caching strategies, and
                    microservices architecture.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary-400 mb-3">
                    MERN Stack Expertise
                  </h3>
                  <p className="text-gray-400">
                    As a MERN stack developer, I've built and deployed numerous
                    full-stack applications. I specialize in creating scalable
                    backend systems with Node.js and Express, designing flexible
                    MongoDB schemas, and connecting these with dynamic React
                    frontends. I'm particularly skilled in implementing
                    real-time features using WebSockets and Socket.io.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary-400 mb-3">
                    Technical Blog Writing
                  </h3>
                  <p className="text-gray-400">
                    I share my knowledge through detailed tutorials and articles
                    about backend development, database optimization, and server
                    deployment strategies. My writing has helped fellow
                    developers solve complex problems and implement best
                    practices in their projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary-400 mb-3">
                    Future Focus
                  </h3>
                  <p className="text-gray-400">
                    I'm currently expanding my skills in cloud infrastructure,
                    serverless architectures, and advanced database
                    optimization. I'm passionate about creating highly
                    performant backend systems that can scale efficiently.
                  </p>
                </div>
              </div>

              {/* Code snippet decoration */}
              <div className="mt-8 p-4 bg-dark-800 rounded-lg border border-dark-700 font-mono text-sm overflow-hidden">
                <div className="flex items-center mb-2 text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>server.js</span>
                </div>
                <div className="text-xs">
                  <p>
                    <span className="text-primary-400">const</span>{" "}
                    <span className="text-pink-400">express</span> ={" "}
                    <span className="text-primary-400">require</span>(
                    <span className="text-green-400">'express'</span>);
                  </p>
                  <p>
                    <span className="text-primary-400">const</span>{" "}
                    <span className="text-pink-400">mongoose</span> ={" "}
                    <span className="text-primary-400">require</span>(
                    <span className="text-green-400">'mongoose'</span>);
                  </p>
                  <p>
                    <span className="text-primary-400">const</span>{" "}
                    <span className="text-pink-400">app</span> ={" "}
                    <span className="text-pink-400">express</span>();
                  </p>
                  <p className="text-gray-500">Connect to MongoDB</p>
                  <p>
                    <span className="text-pink-400">mongoose</span>.
                    <span className="text-primary-400">connect</span>
                    (process.env.MONGO_URI);
                  </p>
                  <p>
                    <span className="text-pink-400">app</span>.
                    <span className="text-primary-400">listen</span>(
                    <span className="text-purple-400">5000</span>,{" "}
                    <span className="text-pink-400">() =&gt;</span> {"{"}
                    <span className="text-pink-400">console</span>.
                    <span className="text-primary-400">log</span>(
                    <span className="text-green-400">
                      'Server running on port 5000'
                    </span>
                    ); {"}"});
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescribe;
