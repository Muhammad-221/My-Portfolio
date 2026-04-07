import TitleSect from "@/components/Title";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function SectionEducation(){
    return(
        <section id="education" className="section-padding">
            <TitleSect title={"Education"}/>
            <AnimatedSection delay={0.2}>
                <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={22} className="text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">
                                Higher Institute of Computers, Information & Management Technology
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3">
                                Department of Management Information Systems
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                                <MapPin size={13} /> Gharbia, Egypt
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <Calendar size={13} /> Dec 2025
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
