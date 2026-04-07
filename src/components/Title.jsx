import AnimatedSection from "@/pages/sections/AnimatedSection";

export default function TitleSect({my, title, description}){
    return(
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                {my} <span className="gradient-text">{title}</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
                {description}
            </p>
        </AnimatedSection>
    )
}