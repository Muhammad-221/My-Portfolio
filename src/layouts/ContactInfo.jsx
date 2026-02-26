import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SocialLinks from "./SocialLinks";

export default function ContactInfo(){
    return(
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
            <SocialLinks/>
        </div>
    )
}