import { motion } from "framer-motion"
export default function SkillComp({icon, skill}){
    return(
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="skill-badge"
        >
            <div className="p-2 rounded-lg bg-primary/10">
                {icon}
            </div>
            <span className="text-lg font-medium max-md:text-lg max-sm:text-xs">{skill}</span>
        </motion.div>
    )
}