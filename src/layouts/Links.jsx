import { Link } from "react-scroll";
import { 
    IoMdPerson,
    IoIosConstruct,
    IoMdMail,
    IoMdSunny,
    IoMdMoon,
    IoMdClose
} from "react-icons/io";
import { 
    FaGraduationCap,
    FaCode,
    FaBars
} from "react-icons/fa6";
import { useTheme } from "../theme/ThemeContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function NavLinks(){
    const {theme, toggleTheme} = useTheme();
    const [isCollabsed, setIsCollabsed] = useState(false);
    const changeCollabse = () => setIsCollabsed(prev => !prev);

    const links =[
        {to: "about", label: "About", icon: <IoMdPerson className="mr-1"/>},
        {to: "skills", label: "Skills", icon: <IoIosConstruct className="mr-1"/>},
        {to: "project", label: "Projects", icon: <FaCode className="mr-1"/>},
        {to: "education", label: "Education", icon: <FaGraduationCap className="mr-1"/>},
        {to: "contact", label: "Contact", icon: <IoMdMail className="mr-1"/>}
    ];
    const style = "text-xl font-semibold text-gray-800 hover:text-indigo-600 inline-flex items-center cursor-pointer transition duration-600 max-lg:text-base dark:text-gray-300 dark:hover:text-indigo-500"
    return(
        <>
            <div className="max-md:hidden">
                <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent max-lg:text-2xl">M & A</h1>
            </div>
            <div className={`w-2/3 flex justify-around mx-auto max-md:flex-col-reverse max-md:fixed max-md:w-full max-md:h-70 max-md:bg-[rgba(33,37,41,0.7)] max-md:z-90 max-md:pt-4 max-md:top-0 max-md:right-0 ${isCollabsed ? 'max-md:visible' : 'max-md:invisible'}`}>
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
            </Button>
            
        </>
    )
}