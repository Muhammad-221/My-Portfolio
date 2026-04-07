import ProjectCard from "@/components/CompProject";
import TitleSect from "@/components/Title";
import designkit from "@/assets/images/designkit-project.jpg";
import dashboard from "@/assets/images/dashboard.jpg";
import prayerTimes from "@/assets/images/prayer-times.jpg";

const projectsData = [
    {
        img : dashboard,
        title : "Medical Analysis",
        description : "A modern and responsive medical analysis management dashboard built using React, Vite, Tailwind CSS and Shadcn-UI. providing an elegant interface for administrative tasks.",
        tools : ["React.js", "React Router", "Tailwind CSS", "Shadcn UI", "JavaScript (ES6+)"],
        live : "https://muhammad-221.github.io/Medical-Analysis/",
        github : "https://github.com/Muhammad-221/Medical-Analysis"
    },
    {
        img : prayerTimes,
        title : "Prayer Times",
        description : "A modern and responsive prayer times application built using React, Vite, Tailwind CSS and Shadcn-UI. providing an elegant interface for administrative tasks.",
        tools : ["React.js", "Axios", "API Integration", "Tailwind CSS", "Shadcn UI"],
        live : "https://muhammad-221.github.io/prayer-times/",
        github : "https://github.com/Muhammad-221/prayer-times"
    },
    {
        img : designkit,
        title : "Designkit Project",
        description : "Built a reusable design system with scalable components, implemented responsive and modern UI, styling through design tokens, supported theme customization, and optimized user experience with clean layouts.",
        tools : ["React.js", "Tailwind CSS", "CSS3", "Vite", "JavaScript (ES6+)",  "Shadcn UI"],
        live : "https://muhammad-221.github.io/designkit-project/",
        github : "https://github.com/Muhammad-221/designkit-project"
    }
]

export default function SectionProjects(){
    return(
        <section id="project" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <TitleSect my={"My"} title={"Projects"} description={"Some of my recent work"}/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.img}
                            projectTitle={project.title}
                            description={project.description}
                            tools={project.tools}
                            live={project.live}
                            github={project.github}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}