import TitleSect from "../components/Title";

export default function SectionEducation(){
    return(
        <section id="education" className="w-7/8 min-h-screen m-auto max-sm:w-6/7">
            <TitleSect title={"Education"}/>
            <div className="mt-20 grid grid-cols-2 gap-20 max-lg:gap-10 max-sm:grid-cols-1">
                <div className="w-full min-h-60 p-5 scale-106 shadow-xl rounded-xl border border-blue-600/20 dark:bg-slate-800">
                    <span className="text-md text-indigo-400 font-sans">Dec 2025</span>
                    <p className="text-xl mb-6 mt-3 font-semibold text-gray-900 dark:text-white">Higher Institute of Computers, Information, and Management Technology in Tanta</p>
                    <span className="text-lg font-sans text-gray-800 dark:text-gray-300">Gharbia – Egypt</span>
                    <p className="text-lg mb-5 mt-2 font-semibold text-gray-900 dark:text-white">Department of Management Information Systems</p>
                </div>
            </div>
        </section>
    )
}