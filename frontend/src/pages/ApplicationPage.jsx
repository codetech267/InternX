import { motion } from 'framer-motion';

const ApplicationPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50  flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50  bg-[length:30px_30px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="w-full max-w-2xl relative z-10"
        >
            <div className="glass p-10 md:p-14 rounded-[2rem] shadow-2xl border border-white/20  text-center">
                <div className="w-20 h-20 bg-blue-50  rounded-2xl mx-auto flex items-center justify-center mb-8 border border-blue-100  shadow-inner">
                    <svg className="w-10 h-10 text-blue-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
                
                <h1 className="text-4xl font-extrabold mb-4 text-slate-900  tracking-tight">Ready to Start?</h1>
                <p className="text-lg text-slate-600  mb-8 max-w-md mx-auto">
                    Click below to apply through our official application form. We review applications on a rolling basis.
                </p>

                <motion.a 
                    href="https://forms.gle/1Nbfmdc6P9wQWnaD7" 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/25 items-center justify-center text-lg"
                >
                    Apply Now <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </motion.a>

                <div className="mt-12 pt-8 border-t border-slate-200 ">
                    <p className="text-sm text-slate-500  mb-3 font-medium">
                        If the form doesn't open, copy this link into your browser:
                    </p>
                    <div className="flex items-center justify-center p-4 bg-slate-100  rounded-xl font-mono text-sm text-slate-600  border border-slate-200  break-all select-all">
                        https://forms.gle/1Nbfmdc6P9wQWnaD7
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default ApplicationPage;