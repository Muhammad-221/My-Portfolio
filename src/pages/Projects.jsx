import ProjectCard from "../components/CompProject";
import TitleSect from "../components/Title";
import maxim from "../assets/images/maxim.jpg";
import dashboard from "../assets/images/dashboard.jpg";

export default function SectionProjects(){
    return(
        <section id="project" className="w-7/8 min-h-screen m-auto max-sm:w-6/7">
            <TitleSect title={"My Projects"}/>
            <div className="grid grid-cols-3 gap-12 max-xl:gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <ProjectCard
                    image={dashboard}
                    projectTitle={"Medical Analysis"}
                    description={"A modern and responsive medical analysis management dashboard built using React, Vite, Tailwind CSS and Shadcn-UI. providing an elegant interface for administrative tasks."}
                    tools={["React", "React Router", "Tailwind CSS", "Shadcn-UI"]}
                    live={"https://muhammad-221.github.io/Medical-Analysis/"}
                    github={"https://github.com/Muhammad-221/Medical-Analysis"}
                />
                <ProjectCard
                    image={maxim}
                    projectTitle={"Maxim"}
                    description={"I designed and developed a professional website interface for a virtual company, a landing page that aims to showcase services, past work, and the team with a modern and responsive design."}
                    tools={["React", "Sass", "Bootstrap", "React Router"]}
                    live={"https://muhammad-221.github.io/maxim/"}
                    github={"https://github.com/muhammad-221/maxim"}
                />
            </div>
        </section>
    )
}