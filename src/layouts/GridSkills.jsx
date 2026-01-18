import SkillComp from "../components/CompSkill";
import {
    SiMui,
    SiTailwindcss,
    SiShadcnui,
    SiTypescript
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
        {icon: <FaHtml5 className="size-9 max-sm:size-6 text-[#E34F26]"/>, label: "HTML5"},
        {icon: <FaCss3Alt className="size-9 max-sm:size-6 text-[#1572B6]"/>, label: "CSS3"},
        {icon: <FaJs className="size-9 max-sm:size-6 text-[#F0DB4F]"/>, label: "JavaScript"},
        {icon: <FaReact className="size-9 max-sm:size-6 text-[#61DAFB]"/>, label: "React.js"},
        {icon: <FaBootstrap className="size-9 max-sm:size-6 text-[#7952B3]"/>, label: "Bootstrap"},
        {icon: <SiTailwindcss className="size-9 max-sm:size-6 text-[#06B6D4]"/>, label: "Tailwind CSS"},
        {icon: <FaSass className="size-9 max-sm:size-6 text-[#CC6699]"/>, label: "Sass"},
        {icon: <SiTypescript className="size-9 max-sm:size-6 text-[#3178C6]"/>, label: "TypeScript"},
        {icon: <FaNode className="size-9 max-sm:size-6 text-[#339933]"/>, label: "Node.js"},
        {icon: <GrMysql className="size-9 max-sm:size-6 text-[#00758F]"/>, label: "MySQL"},
        {icon: <SiMui className="size-9 max-sm:size-6 text-[#007FFF]"/>, label: "Material UI"},
        {icon: <SiShadcnui className="size-9 max-sm:size-6 text-black"/>, label: "Shadcn UI"},
        {icon: <FaReact className="size-9 max-sm:size-6 text-[#61DAFB]"/>, label: "Context API"},
        {icon: <FaGitAlt className="size-9 max-sm:size-6 text-[#F05033]"/>, label: "Git"},
        {icon: <FaGithub className="size-9 max-sm:size-6 text-black"/>, label: "GitHub"}
    ]
    return(
        <div className="w-full grid grid-cols-5 gap-10 max-lg:grid-cols-4 max-lg:gap-6 max-md:grid-cols-3 max-sm:gap-2">
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