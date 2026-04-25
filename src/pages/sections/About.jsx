import image from "@/assets/images/mohamed.jpg"
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function SectionAbout(){
    return(
        <section id="about" className="min-h-screen w-7/8 mx-auto pt-20 pb-10 flex max-md:flex-col-reverse max-md:items-center max-sm:w-6/7">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-4/7 pt-10 max-lg:pt-7 max-md:w-full max-md:text-center"
            >
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
                >
                    Frontend Developer
                </motion.p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                    Muhamad{" "}
                    <span className="gradient-text">Abd Elmawla</span>
                </h1>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                    Passionate Front-End Developer. 
                    I specialize in building responsive, user-friendly web applications with clean, efficient code and dynamic interfaces. 
                    I strive to deliver seamless user experiences while continuously learning and growing in the field of web development.
                </p>
                <div className="flex flex-wrap gap-4 max-md:justify-center">
                    <a
                        download
                        href="https://drive.google.com/uc?export=download&id=1aq6Mr3Kqc5Q-OvNGxdLabzoPRRs--q7E"
                        className="gradient-bg px-6 py-3 rounded-xl font-medium text-sm text-primary-foreground inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <Download size={16} /> Download CV
                    </a>
                    <Link 
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="px-6 py-3 rounded-xl font-medium text-sm inline-flex items-center gap-2 border border-muted-foreground/40 text-foreground hover:border-primary/40 transition-colors"
                    >
                        <Mail size={16} /> Contact Me
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-3/7 flex justify-end items-center max-md:justify-center max-md:w-full"
            >
                <div className="size-90 overflow-hidden rounded-full border-primary/40 shadow-[0_0_35px_15px_rgba(99,102,241,0.5)] max-lg:size-70 max-lg:shadow-[0_0_15px_10px_rgba(99,102,241,0.5)]">
                    <img src={image} alt="img" className="object-cover"/>
                </div>
            </motion.div>
        </section>
    )
}



// import { Link } from "react-scroll";
// import image from "@/assets/images/mohamed.jpg"
// import { IoMdDownload, IoMdMail } from "react-icons/io";
// import { motion } from "framer-motion";

// export default function SectionAbout(){
//     return(
//         <section id="about"className="min-h-screen w-7/8 mx-auto pt-20 flex bg-muted/50 max-md:flex-col-reverse max-md:items-center max-sm:w-6/7">
//             <motion.div 
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className="w-4/7 pt-20 max-lg:pt-7 max-md:w-full"
//             >
//                 <h1 className="text-5xl mb-5 font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent max-md:text-center max-sm:text-4xl max-sm:px-2">Muhamad Abd Elmawla</h1>
//                 <span className="text-lg font-semibold block max-md:w-full max-md:text-center">FULL STACK DEVELOPER</span>
//                 <p className="mt-7 pr-2 text-xl text-gray-800 font-sans leading-relaxed max-lg:text-sm max-md:text-center dark:text-gray-300">
//                     Passionate Front-End Developer. 
//                     I specialize in building responsive, user-friendly web applications with clean, efficient code and dynamic interfaces. 
//                     I strive to deliver seamless user experiences while continuously learning and growing in the field of web development.
//                 </p>
//                 <div className="flex mt-10 gap-4 max-lg:mt-5 max-md:justify-center max-sm:flex-col">
//                     <a 
//                         href="https://drive.usercontent.google.com/u/0/uc?id=1GJdvFmGPUvTzqr7DrF6482jL8-1MY7ob&export=download" 
//                         download 
//                         className="text-lg py-2 px-4 flex justify-center items-center gap-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 transition duration-700"
//                     >
//                         <IoMdDownload className="text-xl"/>
//                         Download CV
//                     </a>
//                     <Link 
//                         to="contact"
//                         smooth={true}
//                         offset={-70}
//                         duration={500}
//                         className="text-lg py-2 px-4 flex justify-center items-center gap-3 rounded-lg font-semibold text-white bg-linear-65 from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition duration-700 cursor-pointer"
//                     >
//                         <IoMdMail className="text-xl"/>
//                         Contact Me
//                     </Link>
//                 </div>
//             </motion.div>
//             <div className="w-3/7 flex justify-end items-center max-md:justify-center max-md:w-full">
//                 <div className="size-90 overflow-hidden rounded-full border-primary/40 shadow-[0_0_35px_15px_rgba(99,102,241,0.5)] max-lg:size-70 max-lg:shadow-[0_0_15px_10px_rgba(99,102,241,0.5)]">
//                     <img src={image} alt="img" className="object-cover"/>
//                 </div>
//             </div>
//         </section>
//     )
// }


