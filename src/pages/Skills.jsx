import TitleSect from "../components/Title";
import SkillsLayout from "../layouts/GridSkills";

export default function SectionSkills(){
    return(
        <section id="skills" className="w-7/8 min-h-screen m-auto max-sm:w-6/7">
            <TitleSect title={"SKILLS"}/>
            <SkillsLayout/>
        </section>
    )
}