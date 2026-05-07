import ProjectCard from "@/components/CompProject";
import TitleSect from "@/components/Title";
import designkit from "@/assets/images/designkit-project.jpg";
import dashboard from "@/assets/images/medical-analysis.jpg";
import prayerTimes from "@/assets/images/prayer-times.jpg";

const projectsData = [
    {
        img : dashboard,
        title : "Medical Analysis",
        description : "A Dashboard that analyzes medical data and presents results in a clear and user-friendly interface.  It provides a user-friendly interface for patients or clinicians to track health data, view analysis reports, and understand medical metrics in a digital format.",
        tools : ["React.js", "React Router", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn UI", "Firebase", "Chart.js"],
        live : "https://muhammad-221.github.io/Medical-Analysis/",
        github : "https://github.com/Muhammad-221/Medical-Analysis"
    },
    {
        img : prayerTimes,
        title : "Prayer Times",
        description : "An elegant and accurate web application that provides daily prayer timings based on the user's location. This project is designed to help Muslims stay connected to their prayers with a simple, clean, and modern interface.",
        tools : ["React.js","JavaScript (ES6+)","Tailwind CSS", "Axios", "API Integration",  "Shadcn UI"],
        live : "https://muhammad-221.github.io/prayer-times/",
        github : "https://github.com/Muhammad-221/prayer-times"
    },
    {
        img : designkit,
        title : "Designkit Project",
        description : "Built a reusable design system with scalable components, implemented responsive and modern Ul, styling through design tokens, supported theme customization, and optimized user experience with clean layouts.",
        tools : ["React.js","JavaScript (ES6+)", "Tailwind CSS", "CSS3", "Vite",  "Shadcn UI", "Framer Motion"],
        live : "https://muhammad-221.github.io/designkit-project/",
        github : "https://github.com/Muhammad-221/designkit-project"
    }
]

export default function SectionProjects(){
    return(
        <section id="project" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <TitleSect my={"My"} title={"Projects"} description={"Some of my recent work"}/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
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