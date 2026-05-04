import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50  py-12 px-4 pt-24 relative overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 mb-6">
            About CODLITE Internship Program
          </h1>
          <p className="text-lg md:text-xl text-slate-600  max-w-3xl mx-auto leading-relaxed">
            Designed exclusively for ambitious students, our modern internship
            program bridges the gap between academic theory and industry
            reality. Step into the world of tech and build a portfolio that
            stands out to top recruiters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 "
          >
            <div className="w-16 h-16 bg-blue-100  rounded-2xl flex items-center justify-center text-blue-500 text-3xl mb-6">
              🚀
            </div>
            <h2 className="text-2xl font-bold text-slate-800  mb-4">
              Real-World Projects
            </h2>
            <p className="text-slate-600  leading-relaxed">
              Move beyond basic to-do apps. Build production-grade applications
              using the MERN stack, Next.js, and cloud deployments that mimic
              actual company requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 "
          >
            <div className="w-16 h-16 bg-cyan-100  rounded-2xl flex items-center justify-center text-cyan-500 text-3xl mb-6">
              🎓
            </div>
            <h2 className="text-2xl font-bold text-slate-800  mb-4">
              Expert Mentorship
            </h2>
            <p className="text-slate-600  leading-relaxed">
              Get your code reviewed by industry veterans. Learn best practices,
              clean architecture code structuring, and the agile workflow used
              by top SV tech companies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 "
          >
            <div className="w-16 h-16 bg-blue-100  rounded-2xl flex items-center justify-center text-blue-500 text-3xl mb-6">
              📜
            </div>
            <h2 className="text-2xl font-bold text-slate-800  mb-4">
              Verified Certification
            </h2>
            <p className="text-slate-600  leading-relaxed">
              Graduate with a unique, globally verifiable certificate, a Letter
              of Recommendation (LOR) for top performers, and a polished GitHub
              profile ready for hiring.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pl-6 border-l-4 border-blue-500"
          >
            <h2 className="text-3xl font-bold text-slate-800  mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-slate-600  leading-relaxed">
              To be the leading platform empowering the next generation of tech
              innovators, creating a world where every student has the skills,
              confidence, and opportunity to thrive in the global technology
              landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pl-6 border-l-4 border-cyan-500"
          >
            <h2 className="text-3xl font-bold text-slate-800  mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600  leading-relaxed">
              We aim to bridge the gap between academic learning and industry
              demands by providing hands-on, practical internship experiences.
              We equip students with cutting-edge technical expertise and
              professional development, ensuring they are job-ready from day
              one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pl-6 border-l-4 border-blue-500"
          >
            <h2 className="text-3xl font-bold text-slate-800  mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-slate-600  leading-relaxed">
              We believe in learning by doing. Our structured programs focus on
              project-based learning, where interns work on real-world
              applications under expert mentorship. Through rigorous code
              reviews, agile workflows, and collaborative environments, our
              approach mirrors the dynamics of modern tech companies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
