import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your query has been sent to our student support team! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-slate-50  py-12 px-4 flex justify-center items-center pt-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
                <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <div className="inline-block px-4 py-2 rounded-full glass border border-blue-200  text-blue-600  font-semibold text-sm mb-6">Support Team</div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-800  leading-tight">
                        Need Help, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Future Coder?</span>
                    </h2>
                    <p className="text-lg text-slate-600  mb-10 leading-relaxed max-w-md">
                        Whether you have questions about the internship curriculum, the application portal, payment processes, or domain selection, our mentors are standing by.
                    </p>
                    <div className="space-y-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 glass p-6 rounded-2xl border border-slate-200  transition-all cursor-pointer hover:shadow-lg">
                            <div className="p-4 bg-blue-100  rounded-2xl text-blue-600  text-2xl">📧</div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800  mb-1">Email Support</h4>
                                <p className="text-slate-500  font-medium">studentsupport@internx.com</p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 glass p-6 rounded-2xl border border-slate-200  transition-all cursor-pointer hover:shadow-lg">
                            <div className="p-4 bg-cyan-100  rounded-2xl text-cyan-600  text-2xl">💬</div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800  mb-1">Student Discord</h4>
                                <p className="text-slate-500  font-medium">Join our mentor-led channels</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="glass p-10 rounded-3xl shadow-2xl border border-slate-200/50  bg-white/40 ">
                    <h3 className="text-2xl font-bold mb-6 text-slate-800 ">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input 
                            type="text" 
                            placeholder="Your Name / Reg No." 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-4 rounded-xl border border-slate-200  bg-white/60   focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400" 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Your College Email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full p-4 rounded-xl border border-slate-200  bg-white/60   focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400" 
                            required 
                        />
                        <textarea 
                            placeholder="How can we assist your internship journey?" 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full p-4 rounded-xl border border-slate-200  bg-white/60   focus:ring-2 focus:ring-blue-500 outline-none transition-all h-40 resize-none placeholder:text-slate-400" 
                            required 
                        />
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_8px_15px_rgba(37,99,235,0.25)] transition-all text-lg mt-2">
                            Submit Query
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;