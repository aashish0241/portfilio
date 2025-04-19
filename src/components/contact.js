import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

// Input field component
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required
        className="w-full appearance-none rounded-lg border-2 border-dark-700/50 bg-dark-800/50 py-3 px-6 text-gray-300 outline-none focus:border-primary-500/50 focus:shadow-md glass-card"
      />
    </div>
  );
};

// Textarea component
const ContactTextArea = ({ row, placeholder, name }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        required
        className="w-full appearance-none rounded-lg border-2 border-dark-700/50 bg-dark-800/50 py-3 px-6 text-gray-300 outline-none focus:border-primary-500/50 focus:shadow-md glass-card resize-none"
      ></textarea>
    </div>
  );
};

// Contact info item component
const ContactInfo = ({ icon, title, content, delay }) => {
  return (
    <motion.div
      className="mb-8 flex"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-lg bg-primary-500/10 text-primary-400 animate-pulse-border border border-primary-500/40">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-xl font-bold text-light-100">{title}</h4>
        <p className="text-base text-gray-400">{content}</p>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would normally integrate with an email service
    // For example, with EmailJS:
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: "success",
        message: "Message sent successfully! You will get a response soon.",
      });
      e.target.reset();

      // Clear status message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: "", message: "" });
      }, 5000);
    }, 1500);
  };

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
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Contact Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact info - Left side */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 max-w-[570px] text-gray-300">
              <p className="mb-9 text-base leading-relaxed">
                Hello! I'm Aashish Timsina, a dedicated and creative developer
                who thrives on transforming ideas into seamless digital
                experiences. With a strong foundation in backend development and
                a constant hunger for learning, I am committed to pushing the
                boundaries of what's possible in the digital landscape.
              </p>

              <ContactInfo
                icon={<FaMapMarkerAlt className="h-6 w-6" />}
                title="Our Location"
                content="Tallakot, Pokhara-kaski, Nepal 33700"
                delay={0.2}
              />

              <ContactInfo
                icon={<FaPhone className="h-6 w-6" />}
                title="Phone Number"
                content="(+977) 9861524169"
                delay={0.4}
              />

              <ContactInfo
                icon={<FaEnvelope className="h-6 w-6" />}
                title="Email Address"
                content="timsinaaashish6@gmail.com"
                delay={0.6}
              />

              {/* Social connections */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-primary-400">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/aashish0241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/aashish-timsina-663ab02a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100053096056726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#1877f2] hover:border-[#1877f2]/50 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.upwork.com/freelancers/~01d263ff08e4a7d498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#6fda44] hover:border-[#6fda44]/50 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form - Right side */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl border border-primary-500/10 p-8 shadow-lg relative overflow-hidden">
              {/* Form success/error message */}
              {formStatus.message && (
                <motion.div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {formStatus.message}
                </motion.div>
              )}

              {/* Glowing corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-xl"></div>

              <form ref={form} onSubmit={sendEmail}>
                <ContactInputBox
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                />
                <ContactInputBox
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
                <ContactInputBox
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                />
                <ContactTextArea
                  row="6"
                  placeholder="Your Message"
                  name="message"
                />
                <div>
                  <motion.button
                    type="submit"
                    className="w-full rounded-lg bg-primary-500 p-3 text-dark-900 font-medium flex items-center justify-center transition hover:bg-primary-600 hover:shadow-lg disabled:opacity-70 disabled:hover:bg-primary-500"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 w-1 h-20 bg-gradient-to-b from-transparent via-primary-500 to-transparent transform -translate-y-1/2"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12">
                <div className="absolute top-0 left-0 h-full w-full border-b-2 border-r-2 border-primary-500/30 rounded-br-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
