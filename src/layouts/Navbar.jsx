import { Link } from "react-scroll";
import { IoMdPerson, IoIosConstruct, IoMdMail } from "react-icons/io";
import { FaGraduationCap, FaCode } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar(){
    const [open, setOpen] = useState(false);

    const links =[
        {to: "about", label: "About", icon: <IoMdPerson className="mr-1"/>},
        {to: "skills", label: "Skills", icon: <IoIosConstruct className="mr-1"/>},
        {to: "project", label: "Projects", icon: <FaCode className="mr-1"/>},
        {to: "education", label: "Education", icon: <FaGraduationCap className="mr-1"/>},
        {to: "contact", label: "Contact", icon: <IoMdMail className="mr-1"/>}
    ];
        
    return(
        <motion.header 
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-3xl dark:border-slate-700 dark:bg-slate-900/80"
        >
            <nav>
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center md:justify-between justify-end">
                    <div className="max-md:hidden">
                        <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent max-lg:text-2xl">M & A</h1>
                    </div>
                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link 
                                key={link.to}
                                to={link.to} 
                                className="text-base inline-flex items-center cursor-pointer font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        ))}
                        <ThemeToggle/>
                    </div>

                    {/* Mobile toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle/>
                        <button onClick={() => setOpen(!open)} className="text-foreground">
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden flex flex-col items-center bg-background border-b border-border px-6 pb-4"
                >
                    {links.map((link) => (
                        <Link 
                            key={link.to}
                            to={link.to} 
                            className="py-2 inline-flex items-center cursor-pointer font-medium text-muted-foreground hover:text-primary transition-colors"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setOpen(!open)}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
