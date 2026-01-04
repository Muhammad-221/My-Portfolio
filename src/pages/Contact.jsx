import { InputWithLabel, TextareaWithLabelAndButton } from "@/components/ShadcnUi";
import TitleSect from "../components/Title";
import { 
    FaPhone, 
    FaLocationDot, 
    FaFacebook, 
    FaGithub,
    FaLinkedin
} from "react-icons/fa6";
import { 
    IoMdMail,
    IoLogoWhatsapp
} from "react-icons/io";

export default function SectionContact(){
    return(
        <section id="contact" className="w-7/8 min-h-screen m-auto mb-20 max-sm:w-6/7">
            <TitleSect title={"Contact"}/>
            <div className="flex gap-15 max-lg:gap-5 max-md:flex-col-reverse">
                <div className="w-full min-h-120 grid grid-cols-1 gap-5">
                    <div className="w-full p-5 rounded-2xl border flex items-center shadow-lg max-md:p-2 max-sm:flex-col max-sm:justify-center dark:bg-slate-800">
                        <FaPhone className="text-4xl mr-4 text-emerald-600 max-sm:mr-0"/>
                        <div className="flex flex-col max-sm:items-center">
                            <span className="text-2xl font-semibold">Phone</span>
                            <a href="tel:+201022708158" className="text-gray-800 dark:text-gray-300 hover:text-green-600">+201022708158</a>
                        </div>
                    </div>
                    <div className="w-full p-5 rounded-2xl border flex items-center shadow-lg max-md:p-2 max-sm:flex-col max-sm:justify-center dark:bg-slate-800">
                        <IoMdMail className="text-4xl mr-4 text-indigo-600 max-sm:mr-0"/>
                        <div className="flex flex-col max-sm:items-center">
                            <span className="text-2xl font-semibold">Email</span>
                            <a href="mailto:mohamedelkalb221@gmail.com" className="text-gray-800 dark:text-gray-300 hover:text-indigo-600">mohamedelkalb221@gmail.com</a>
                        </div>
                    </div>
                    <div className="w-full p-5 rounded-2xl border flex items-center shadow-lg max-md:p-2 max-sm:flex-col max-sm:justify-center dark:bg-slate-800">
                        <FaLocationDot className="text-4xl mr-4 text-red-600 max-sm:mr-0"/>
                        <div className="flex flex-col max-sm:items-center">
                            <span className="text-2xl font-semibold">Location</span>
                            <span className="text-gray-800 dark:text-gray-300">Kotoor, Gharbia, Egypt</span>
                        </div>
                    </div>
                    <div className="w-full p-7 rounded-2xl border flex items-center shadow-lg max-md:justify-around max-md:p-2 dark:bg-slate-800">
                        <a 
                            href="https://www.facebook.com/share/1Abb28fpz2/" 
                            target="_blank" 
                            className="text-4xl mr-5 max-md:mr-0"
                        >
                           <FaFacebook className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600 transition duration-700"/> 
                        </a>
                        <a 
                            href="" 
                            target="_blank" 
                            className="text-4xl mr-5 max-md:mr-0"
                        >
                            <IoLogoWhatsapp className="text-gray-800 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition duration-700"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/muhammad-abd-elmawla-a5032733b" 
                            target="_blank" 
                            className="text-4xl mr-5 max-md:mr-0"
                        >
                            <FaLinkedin className="text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-700 transition duration-700"/>
                        </a>
                        <a 
                            href="https://github.com/Muhammad-221" 
                            target="_blank" 
                            className="text-4xl mr-5 max-md:mr-0"
                        >
                            <FaGithub className="text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500 transition duration-700"/>
                        </a>
                    </div>
                </div>
                <div className="w-full min-h-120 p-10 rounded-2xl border shadow-lg max-lg:p-5 dark:bg-slate-800">
                    <InputWithLabel inp={"Name"} inpPlac={"Enter your name"}/>
                    <InputWithLabel inp={"Email"} inpPlac={"Enter your email"}/>
                    <TextareaWithLabelAndButton/>
                </div>
            </div>               
        </section>
    )
}