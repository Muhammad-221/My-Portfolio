import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({image, projectTitle, description, tools, live, github}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-card rounded-2xl overflow-hidden card-hover group flex flex-col h-full"
    >
      <div className="overflow-hidden">
        <img src={image} loading="lazy" alt="project" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"/>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{projectTitle}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tools?.map((tool) => (
              <span key={tool} className="tech-tag">{tool}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-4 py-2 rounded-lg text-xs font-medium text-primary-foreground inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs font-medium border border-border text-foreground inline-flex items-center gap-1.5 hover:border-primary/40 transition-colors"
          >
            <Github size={13}/>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
