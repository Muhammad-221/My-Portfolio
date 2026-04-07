import ScrollUP from "@/layouts/ScrollUp";
import SectionAbout from "./sections/About";
import SectionSkills from "./sections/Skills";
import SectionProjects from "./sections/Projects";
import SectionEducation from "./sections/Education";
import SectionContact from "./sections/Contact";
import SectionFooter from "./sections/Footer";
import { useEffect, useState } from "react";
import Navbar from "@/layouts/Navbar";

export default function Landing(){
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() =>{
        const handleScroll = () => window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return(
        <div className="relative bg-muted/50">
            <Navbar/>
            <ScrollUP scrollUP={isScroll}/>
            <SectionAbout/>
            <SectionSkills/>
            <SectionProjects/>
            <SectionEducation/>
            <SectionContact/>
            <SectionFooter/>
        </div>
    )
}