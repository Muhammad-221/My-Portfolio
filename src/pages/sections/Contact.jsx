import ContactForm from "@/layouts/ContactForm";
import TitleSect from "@/components/Title";
import ContactInfo from "@/layouts/ContactInfo";

export default function SectionContact(){
    return(
        <section id="contact" className="section-padding">
            <TitleSect title={"Contact"}/>
            <div className="flex gap-15 max-lg:gap-5 max-md:flex-col-reverse">
                <ContactInfo/>
                <ContactForm/>
            </div>               
        </section>
    )
}