import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const socialLinks = [
    {
        icon: <FaFacebook className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600 transition duration-700"/> ,
        href: "https://www.facebook.com/share/1Abb28fpz2/"
    },
    {
        icon: <IoLogoWhatsapp className="text-gray-800 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition duration-700"/> ,
        href: "https://wa.me/201022708158?text=ممكن%20استفسر%20عن%20الخدمة"
    },
    {
        icon: <FaLinkedin className="text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-700 transition duration-700"/> ,
        href: "https://www.linkedin.com/in/muhammad-abd-elmawla-a5032733b"
    },
    {
        icon: <FaGithub className="text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500 transition duration-700"/> ,
        href: "https://github.com/Muhammad-221"
    }
];

export default function SocialLinks(){
    return(
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-card card-hover p-7 rounded-2xl border flex items-center max-md:justify-around max-md:p-2"
        >
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="text-4xl mr-5 max-md:mr-0"
                >
                    {link.icon}
                </a>
            ))}
        </motion.div>
    )
}