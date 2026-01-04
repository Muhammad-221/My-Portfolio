import SkillComp from "../components/CompSkill";
import {
    SiMui,
    SiTailwindcss,
    SiShadcnui 
} from "react-icons/si";
import { 
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaSass,
    FaBootstrap,
    FaReact
} from "react-icons/fa";

export default function SkillsLayout(){

    const skills =[
        {icon: <FaHtml5 className="size-10 max-sm:size-6 text-[#E34F26]"/>, label: "HTML5"},
        {icon: <FaCss3Alt className="size-10 max-sm:size-6 text-[#1572B6]"/>, label: "CSS3"},
        {icon: <FaJs className="size-10 max-sm:size-6 text-[#F0DB4F]"/>, label: "JavaScript"},
        {icon: <FaSass className="size-10 max-sm:size-6 text-[#CC6699]"/>, label: "Sass"},
        {icon: <FaBootstrap className="size-10 max-sm:size-6 text-[#7952B3]"/>, label: "Bootstrap"},
        {icon: <FaReact className="size-10 max-sm:size-6 text-[#61DAFB]"/>, label: "React"},
        {icon: <SiMui className="size-10 max-sm:size-6 text-[#007FFF]"/>, label: "Material UI"},
        {icon: <SiTailwindcss className="size-10 max-sm:size-6 text-[#06B6D4]"/>, label: "Tailwind CSS"},
        {icon: <SiShadcnui className="size-10 max-sm:size-6 text-black"/>, label: "Shadcn UI"}
    ]
    return(
        <div className="w-full grid grid-cols-4 gap-12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-3">
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