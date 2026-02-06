import SectionAbout from "./About";
import SectionProjects from "./Projects";
import SectionContact from "./Contact";
import SectionSkills from "./Skills";
import NavLinks from "../layouts/Links";
import SectionFooter from "./Footer";
import ScrollUP from "@/layouts/ScrollUp";
import { useEffect, useState } from "react";
import SectionEducation from "./Education";

export default function Landing(){
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
            <NavLinks/>
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