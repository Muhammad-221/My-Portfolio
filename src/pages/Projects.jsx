import ProjectCard from "../components/CompProject";
import TitleSect from "../components/Title";

export default function SectionProjects(){
    return(
        <section id="project" className="w-7/8 min-h-screen m-auto max-sm:w-6/7">
            <TitleSect title={"My Projects"}/>
            <div className="grid grid-cols-3 gap-12 max-xl:gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <ProjectCard
                    projectTitle={"Maxim"}
                    description={"This is a description of Project 1."}
                    tools={["React", "Sass", "Bootstrap", "React Router"]}
                    live={"https://muhammad-221.github.io/maxim/"}
                    github={"https://github.com/muhammad-221/maxim"}
                />
            </div>
        </section>
    )
}