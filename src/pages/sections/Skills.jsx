import TitleSect from "@/components/Title";
import SkillsLayout from "@/layouts/GridSkills";

export default function SectionSkills(){
    return(
        <section id="skills" className="section-padding">
            <TitleSect my={"My"} title={"SKILLS"} description={"Technologies and tools I work with daily"}/>
            <SkillsLayout/>
        </section>
    )
}