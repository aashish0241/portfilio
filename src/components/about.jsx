import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";
import Aashish from "../assets/aashishcollege.jpg";

const About = () => {
  return (
    <section className="py-20 bg-dark-900 text-light-100 relative overflow-hidden">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary-400 mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Who I Am</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate full-stack developer with a focus on creating
            innovative digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden glass-card p-2 border border-primary-500/10 animate-pulse-border">
                <img
                  src={Aashish}
                  alt="Aashish Timsina"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-500/30 rounded-tl-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary-500/30 rounded-br-xl"></div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-8 top-1/4 glass px-4 py-2 rounded-full text-primary-400 border border-primary-500/20 text-sm font-medium"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="flex items-center">
                  <FaLaptopCode className="mr-2" />
                  Backend Developer
                </span>
              </motion.div>

              <motion.div
                className="absolute -left-8 top-2/3 glass px-4 py-2 rounded-full text-pink-400 border border-pink-500/20 text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="flex items-center">
                  <FaCode className="mr-2" />
                  2.5+ Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl border border-primary-500/10 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Backend Developer
              </h3>

              <div className="space-y-6 text-gray-300">
                <p>
                  My journey in the world of development began with a curiosity
                  to understand how technology shapes our lives. Starting with
                  basic coding exercises, I quickly found my passion in backend
                  development – the art of crafting robust, efficient systems
                  that power modern applications.
                </p>

                <p>
                  With over 5 years of experience in full-stack development,
                  I've developed a deep understanding of both frontend and
                  backend technologies. I specialize in building scalable web
                  applications using Node.js, Express, MongoDB, and React,
                  creating seamless experiences that deliver real value to
                  users.
                </p>

                <p>
                  My approach combines technical expertise with creative
                  problem-solving. I believe in writing clean, maintainable code
                  that stands the test of time and adapts to changing
                  requirements. Beyond just coding, I focus on understanding
                  business needs and user experiences to create solutions that
                  truly make a difference.
                </p>
              </div>

              {/* Key areas of expertise */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-primary-400">
                  Core Expertise
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-dark-800 p-2 rounded-lg mr-3 border border-primary-500/20">
                      <FaServer className="text-primary-400 h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium">Backend Development</h5>
                      <p className="text-sm text-gray-400">
                        Node.js, Express, API Design
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dark-800 p-2 rounded-lg mr-3 border border-primary-500/20">
                      <FaDatabase className="text-primary-400 h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium">Database Architecture</h5>
                      <p className="text-sm text-gray-400">
                        MongoDB, MySQL, Redis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dark-800 p-2 rounded-lg mr-3 border border-primary-500/20">
                      <FaLaptopCode className="text-primary-400 h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium">Frontend Integration</h5>
                      <p className="text-sm text-gray-400">
                        React, JavaScript, Modern CSS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dark-800 p-2 rounded-lg mr-3 border border-primary-500/20">
                      <FaCode className="text-primary-400 h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium">System Architecture</h5>
                      <p className="text-sm text-gray-400">
                        Microservices, RESTful APIs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code snippet */}
              <div className="mt-8">
                <div className="bg-dark-800 rounded-lg p-4 font-code text-sm overflow-hidden">
                  <div className="flex text-gray-500 mb-2 text-xs">
                    <span>// A glimpse of my approach</span>
                  </div>
                  <div>
                    <span className="text-pink-500">const</span>{" "}
                    <span className="text-primary-300">developer</span> = {`{`}
                    <br />
                    &nbsp;&nbsp;<span className="text-primary-400">
                      name
                    </span>:{" "}
                    <span className="text-pink-400">"Aashish Timsina"</span>,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-primary-400">passion</span>:{" "}
                    <span className="text-pink-400">
                      "Creating reliable backend systems"
                    </span>
                    ,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-primary-400">approach</span>:{" "}
                    <span className="text-primary-300">
                      ({`params`}) {`=>`}{" "}
                    </span>
                    {`{`}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-pink-500">return</span>{" "}
                    <span className="text-light-100">params</span>.
                    <span className="text-primary-400">problems</span>.
                    <span className="text-primary-300">map</span>(
                    <span className="text-primary-300">problem</span> {`=>`}{" "}
                    <span className="text-primary-300">solve</span>(problem));
                    <br />
                    &nbsp;&nbsp;{`}`}
                    <br />
                    {`}`};
                  </div>
                </div>
              </div>

              {/* Call to action button */}
              <div className="mt-8">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500/10 border border-primary-500/40 text-primary-400 font-medium hover:bg-primary-500/20 transition-all animate-pulse-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get in Touch</span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
