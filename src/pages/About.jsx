import { Link } from "react-scroll";
import image from "../assets/images/mohamed.jpg"
import { IoMdDownload, IoMdMail } from "react-icons/io";

export default function SectionAbout(){
    return(
        <section id="about"className="min-h-screen w-7/8 m-auto pt-20 flex max-md:flex-col-reverse max-md:items-center max-sm:w-6/7">
            <div className="w-4/7 pt-20 max-lg:pt-7 max-md:w-full">
                <h1 className="text-5xl mb-5 font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent max-md:text-center max-sm:text-4xl max-sm:px-2">Muhamad Abd Elmawla</h1>
                <span className="text-lg font-semibold block max-md:w-full max-md:text-center">FULL STACK DEVELOPER</span>
                <p className="mt-7 pr-2 text-xl text-gray-800 font-sans leading-relaxed max-lg:text-sm max-md:text-center dark:text-gray-300">
                    Passionate Front-End Developer. 
                    I specialize in building responsive, user-friendly web applications with clean, efficient code and dynamic interfaces. 
                    I strive to deliver seamless user experiences while continuously learning and growing in the field of web development.
                </p>
                <div className="flex mt-10 gap-4 max-lg:mt-5 max-md:justify-center max-sm:flex-col">
                    <a 
                        href="#" 
                        download 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg py-2 px-4 flex justify-center items-center gap-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 transition duration-700"
                    >
                        <IoMdDownload className="text-xl"/>
                        Download CV
                    </a>
                    <Link 
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-lg py-2 px-4 flex justify-center items-center gap-3 rounded-lg font-semibold text-white bg-linear-65 from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition duration-700 cursor-pointer"
                    >
                        <IoMdMail className="text-xl"/>
                        Contact Me
                    </Link>
                </div>
            </div>
            <div className="w-3/7 flex justify-end items-center max-md:justify-center max-md:w-full">
                <div className="size-90 overflow-hidden rounded-full shadow-[0_0_35px_15px_rgba(99,102,241,0.5)] max-lg:size-70 max-lg:shadow-[0_0_15px_10px_rgba(99,102,241,0.5)]">
                    <img src={image} alt="img" className="object-cover"/>
                </div>
            </div>
        </section>
    )
}


