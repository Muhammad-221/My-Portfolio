import SectionAbout from "./About";
import SectionProjects from "./Projects";
import SectionContact from "./Contact";
import SectionSkills from "./Skills";
import NavLinks from "../layouts/Links";
import SectionFooter from "./Footer";
import ScrollUP from "@/layouts/ScrollUp";
import { useEffect, useState } from "react";
import SectionEducation from "./Education";

export default function HomePage(){
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsScroll(true);
            }
            else{
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return(
        <>
            <header className="w-full h-15 fixed z-50 px-5 flex items-center border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/80">
                <NavLinks/>
            </header>
            <div className="relative dark:bg-slate-900">
                <ScrollUP scrollUP={isScroll ? "flex" : "hidden transition duration-700 ease-in-out"}/>
                <SectionAbout/>
                <SectionSkills/>
                <SectionProjects/>
                <SectionEducation/>
                <SectionContact/>
                <SectionFooter/>
            </div>
            
        </>
    )
}