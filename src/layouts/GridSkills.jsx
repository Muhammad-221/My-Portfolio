import SkillComp from "../components/CompSkill";
import {
    SiMui,
    SiTailwindcss,
    SiShadcnui,
    SiFramer,
    SiTypescript,
    SiPostman,
    SiAxios,
    SiFirebase
} from "react-icons/si";
import { 
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaSass,
    FaBootstrap,
    FaReact,
    FaGithub,
    FaNode 
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

export default function SkillsLayout(){
    const skills =[
        {icon: <FaHtml5 size={25} className="text-[#E34F26]"/>, label: "HTML5"},
        {icon: <FaCss3Alt size={25} className="text-[#1572B6]"/>, label: "CSS3"},
        {icon: <FaJs size={25} className="text-[#F0DB4F]"/>, label: "JavaScript"},
        {icon: <SiTypescript size={25} className="text-[#3178C6]"/>, label: "TypeScript"},
        {icon: <FaReact size={25} className="text-[#61DAFB]"/>, label: "React.js"},
        {icon: <FaBootstrap size={25} className="text-[#7952B3]"/>, label: "Bootstrap"},
        {icon: <SiTailwindcss size={25} className="text-[#06B6D4]"/>, label: "Tailwind CSS"},
        {icon: <FaSass size={25} className="text-[#CC6699]"/>, label: "Sass"},
        {icon: <FaNode size={25} className="text-[#339933]"/>, label: "Node.js"},
        {icon: <GrMysql size={25} className="text-[#00758F]"/>, label: "MySQL"},
        {icon: <SiMui size={25} className="text-[#007FFF]"/>, label: "Material UI"},
        {icon: <SiShadcnui size={25} className="text-black"/>, label: "Shadcn UI"},
        {icon: <SiFramer size={25} className="text-black"/>, label: "Framer Motion"},
        {icon: <SiFirebase size={25} className="text-[#FF6C37]"/>, label: "Firebase"},
        {icon: <FaReact size={25} className="text-[#61DAFB]"/>, label: "Context API"},
        {icon: <SiPostman size={25} className="text-[#FF6C37]"/>, label: "Postman"},
        {icon: <SiAxios size={25} className="text-[#5A29E4]" />, label: "Axios"},
        {icon: <FaGitAlt size={25} className="text-[#F05033]"/>, label: "Git"},
        {icon: <FaGithub size={25} className="text-black"/>, label: "GitHub"}
    ]
    return(
        <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
                <SkillComp
                    key={skill.label}
                    icon={skill.icon}
                    skill={skill.label}
                />
            ))}
        </div>
    )
}