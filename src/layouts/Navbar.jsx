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
            {/* <div className={`w-2/3 flex justify-around mx-auto max-md:flex-col-reverse max-md:fixed max-md:w-full max-md:h-70 max-md:bg-[rgba(33,37,41,0.7)] max-md:z-90 max-md:pt-4 max-md:top-0 max-md:right-0 ${isCollabsed ? 'max-md:visible' : 'max-md:invisible'}`}>
                <nav className="w-full flex items-center justify-around max-md:h-full max-md:flex-col max-md:bg-white max-md:border-b max-md:border-gray-600/20 dark:max-md:bg-slate-800">
                    {links.map((link) => (
                        <Link 
                            key={link.to}
                            to={link.to} 
                            className={style}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={changeCollabse}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className={`invisible max-md:text-3xl max-md:w-full max-md:mb-3 max-md:ml-4 max-md:flex max-md:justify-start ${isCollabsed ? 'max-md:visible' : 'max-md:invisible'}`}>
                    <IoMdClose onClick={changeCollabse}/>
                </div>
            </div>
            <div className="hidden text-2xl max-md:block">
                <FaBars
                    className={isCollabsed ? 'max-md:hidden' : ''}
                    onClick={changeCollabse}
                />
            </div>
            <Button 
                onClick={toggleTheme} 
                className={"size-9 rounded-full ms-auto bg-indigo-400 hover:bg-indigo-500 transition duration-700"}
            >
                {theme === "dark" ? 
                    <IoMdSunny className="text-xl text-white"/> : 
                    <IoMdMoon className="text-xl text-white"/>}
            </Button> */}
        </motion.header>
    )
}

{/* <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="#about" className="text-xl font-display font-bold gradient-text">
        M & A
    </a>

    <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
        <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
        >
            {l.label}
        </a>
        ))}
        <ThemeToggle />
    </div>

    <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button onClick={() => setOpen(!open)} className="text-foreground">
        {open ? <X size={22} /> : <Menu size={22} />}
        </button>
    </div>
</div>

{open && (
<motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    className="md:hidden bg-background border-b border-border px-6 pb-4"
>
    {links.map((l) => (
    <a
        key={l.href}
        href={l.href}
        onClick={() => setOpen(false)}
        className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
    >
        {l.label}
    </a>
    ))}
</motion.div>
)} */}