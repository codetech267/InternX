import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ApplicationPage from "./pages/ApplicationPage";
import CertificateVerification from "./pages/CertificateVerification";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200  py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left font-medium text-slate-800  focus:outline-none"
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600  text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TestimonialCard = ({ name, role, review }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-2xl border border-slate-100  shadow-xl relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <p className="text-slate-600  italic mb-4">"{review}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 ">{name}</h4>
        <p className="text-xs text-blue-600  font-medium">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const benefits = [
    "Internship Certificate",
    "Offer Letter",
    "Real Project Experience",
    "Skill Development",
    "Career Growth",
  ];
  return (
    <div className="min-h-screen bg-white  pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200 shadow-sm"
            >
              🚀 Applications Open for 2026 Cohort
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Tech Career
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Join our prestigious internship program. Build production-ready
              applications, receive expert mentorship, and secure a verified
              certificate to stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/apply">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold shadow-xl shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
                  Start Application{" "}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link to="/verify">
                <button className="w-full sm:w-auto bg-white border border-slate-300 text-slate-800 px-8 py-3.5 rounded-full font-bold shadow-sm transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center hover:bg-slate-50">
                  Verify Certificate
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg md:max-w-none relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students collaborating"
              className="rounded-3xl shadow-2xl relative z-10 border border-white/40 w-full object-cover aspect-video"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits & About */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 ">
              Why Choose CODLITE?
            </h2>
            <p className="text-lg text-slate-600  mb-8 leading-relaxed">
              CODLITE provides industry-focused internship programs with
              real-world project experience, helping students build practical
              skills and boost their career growth. We bridge the gap between
              academic theory and industry demands.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100  text-blue-600  flex items-center justify-center mr-4 shrink-0 shadow-sm border border-blue-200 ">
                    <svg
                      className="w-5 h-5 ml-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-slate-700  font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Student Coding"
              className="rounded-3xl shadow-2xl relative z-10 glass border border-white/20"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-100/50  border-y border-slate-200 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900  mb-4">
              Student Success Stories
            </h2>
            <p className="text-slate-600 ">
              Join thousands of students who launched their careers with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Aisha Sharma"
              role="Software Engineer Intern"
              review="CODLITE gave me the real-world exposure I needed. Working on the MERN stack projects helped me clear my placements!"
            />
            <TestimonialCard
              name="Rahul Verma"
              role="Frontend Developer"
              review="The mentorship and structured learning were unparalleled. The certificate helped me stand out to recruiters."
            />
            <TestimonialCard
              name="Priya Singh"
              role="Full Stack Intern"
              review="No login hurdles—just pure learning and execution. The verified certificate added immense value to my LinkedIn profile."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="glass p-8 rounded-3xl shadow-lg border border-slate-200 ">
          <FAQItem
            question="Do I need to create an account?"
            answer="No! We have entirely removed login friction. Simply apply via our Google form and track your application status or verify your certificate directly."
          />
          <FAQItem
            question="Is the certificate verifiable by recruiters?"
            answer="Yes. Every certificate comes with a unique Certificate ID that can be securely verified directly through our Verify portal."
          />
          <FAQItem
            question="What kind of projects will I build?"
            answer="You will build industry-standard projects focusing on modern tech stacks like MERN, Next.js, and Cloud deployments."
          />
        </div>
      </section>
    </div>
  );
};

import React from "react";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white  text-slate-900  selection:bg-blue-300 selection:text-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/verify" element={<CertificateVerification />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Removed Admin Login Route to keep it secure/backend-only or hidden */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
