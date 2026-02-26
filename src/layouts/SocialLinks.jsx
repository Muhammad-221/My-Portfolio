import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function SocialLinks(){
    return(
        <div className="w-full p-7 rounded-2xl border flex items-center shadow-lg max-md:justify-around max-md:p-2 dark:bg-slate-800">
            <a 
                href="https://www.facebook.com/share/1Abb28fpz2/" 
                target="_blank" 
                className="text-4xl mr-5 max-md:mr-0"
            >
                <FaFacebook className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600 transition duration-700"/> 
            </a>
            <a 
                href="https://wa.me/201022708158?text=ممكن%20استفسر%20عن%20الخدمة" 
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
    )
}