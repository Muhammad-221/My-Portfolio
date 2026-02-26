import ContactForm from "@/layouts/ContactForm";
import TitleSect from "../components/Title";
import ContactInfo from "@/layouts/ContactInfo";

export default function SectionContact(){
    return(
        <section id="contact" className="w-7/8 min-h-screen m-auto mb-20 max-sm:w-6/7">
            <TitleSect title={"Contact"}/>
            <div className="flex gap-15 max-lg:gap-5 max-md:flex-col-reverse">
                <ContactInfo/>
                <ContactForm/>
            </div>               
        </section>
    )
}