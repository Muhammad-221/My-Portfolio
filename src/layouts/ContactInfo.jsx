import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const contactDetails = [
    {
        icon: <FaPhone className="text-4xl mr-4 text-emerald-600 max-sm:mr-0"/> ,
        title: "Phone",
        value: <a href="tel:+201022708158" className="text-gray-800 dark:text-gray-300 hover:text-green-600">+201022708158</a>
    },
    {
        icon: <IoMdMail className="text-4xl mr-4 text-indigo-600 max-sm:mr-0"/> ,
        title: "Email",
        value: <a href="mailto:mohamedelkalb221@gmail.com" className="text-gray-800 dark:text-gray-300 hover:text-indigo-600">mohamedelkalb221@gmail.com</a>
    },
    {
        icon: <FaLocationDot className="text-4xl mr-4 text-red-600 max-sm:mr-0"/> ,
        title: "Location",
        value: <span className="text-gray-800 dark:text-gray-300">Kotoor, Gharbia, Egypt</span>
    }
];

export default function ContactInfo(){
    return(
        <div className="w-full min-h-120 grid grid-cols-1 gap-5">
            {contactDetails.map((item, i) => (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    key={i}
                    className="w-full bg-card card-hover p-5 rounded-2xl border flex items-center max-md:p-2 max-sm:flex-col max-sm:justify-center"
                >
                    {item.icon}
                    <div className="flex flex-col max-sm:items-center">
                        <span className="text-2xl font-semibold">{item.title}</span>
                        {item.value}
                    </div>
                </motion.div>
            ))}
            <SocialLinks/>
        </div>
    )
}
