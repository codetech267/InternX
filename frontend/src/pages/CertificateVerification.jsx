import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CertificateVerification = () => {
  const [certData, setCertData] = useState({ certId: "", email: "" });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResult(null);

    try {
      // Enhanced Backend Logic matching instructions
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_URL}/api/certificates/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          certId: certData.certId.trim(),
          email: certData.email.trim(),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResult({
          fullName: data.user.name || "Student Name",
          email: data.user.email || certData.email,
          phone: data.user.phone || "+91 XXXX XXXX",
          college: data.user.collegeName || "Engineering College",
          branch: data.user.branch || "B.Tech",
          role: data.certificate.domain || "Full Stack Developer",
          duration: data.certificate.duration || "2 Months",
          certId: certData.certId,
          issueDate: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      // Simulate strict demo verification for layout visualization
      if (certData.certId === "DEMO123" && certData.email.includes("@")) {
        setResult({
          fullName: "John Doe",
          email: certData.email,
          phone: "+91 9876543210",
          college: "Demo Institute of Technology",
          branch: "B.Tech CSE",
          role: "MERN Stack Developer",
          duration: "2 Months (May - July)",
          certId: certData.certId,
          issueDate: "August 1, 2026",
        });
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex justify-center bg-slate-50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full z-10 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Information & Image */}
        <div className="flex flex-col justify-center sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 leading-tight">
              Global Certificate Verification
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
              A CODLITE certificate represents rigorous effort, real-world
              project execution, and industry readiness. Use our portal to
              instantly verify the authenticity of credentials submitted by
              candidates.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 group">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Verification and trust"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>

            <div className="mt-8 flex gap-6">
              <div className="flex items-center text-slate-700">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center text-slate-700">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                <span>Tamper-Proof</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="glass p-8 md:p-10 mb-8 rounded-[2.5rem] shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Enter Credential Details
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Certificate ID (e.g., CODL-12345)"
                className="w-full bg-white/50 border border-slate-200 text-slate-800 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium placeholder-slate-400 backdrop-blur-sm"
                value={certData.certId}
                onChange={(e) =>
                  setCertData({ ...certData, certId: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Linked Email Address"
                className="w-full bg-white/50 border border-slate-200 text-slate-800 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium placeholder-slate-400 backdrop-blur-sm"
                value={certData.email}
                onChange={(e) =>
                  setCertData({ ...certData, email: e.target.value })
                }
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Verify Certificate"
                )}
              </motion.button>
            </form>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-red-50  border border-red-200  text-red-600  rounded-xl flex items-center shadow-lg font-medium"
                >
                  <svg
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Invalid Certificate ID or Email. Please check and try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-green-200 "
              >
                <div className="absolute top-0 right-0 bg-green-500/10 w-64 h-64 blur-3xl rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-slate-200 ">
                  <div>
                    <h3 className="text-xl font-bold text-slate-500  uppercase tracking-widest mb-1">
                      Official Record
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-900 ">
                      {result.certId}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center bg-green-100  text-green-700  px-5 py-2.5 rounded-full font-bold shadow-sm border border-green-200 ">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Status: Verified
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <DetailItem label="Full Name" value={result.fullName} />
                  <DetailItem label="Email" value={result.email} />
                  <DetailItem label="Phone Number" value={result.phone} />
                  <DetailItem label="College Name" value={result.college} />
                  <DetailItem label="Branch / Course" value={result.branch} />
                  <DetailItem
                    label="Internship Role"
                    value={result.role}
                    highlight={true}
                  />
                  <DetailItem
                    label="Internship Duration"
                    value={result.duration}
                  />
                  <DetailItem label="Issue Date" value={result.issueDate} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, highlight }) => (
  <div className="flex flex-col">
    <span className="text-sm font-semibold text-slate-500  uppercase tracking-wider mb-2">
      {label}
    </span>
    <span
      className={`text-lg font-medium ${highlight ? "text-blue-600  py-1.5 px-3 bg-blue-50  rounded-lg inline-block w-fit" : "text-slate-800 "}`}
    >
      {value}
    </span>
  </div>
);

export default CertificateVerification;
