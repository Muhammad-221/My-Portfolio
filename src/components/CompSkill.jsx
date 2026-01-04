export default function SkillComp({icon, skill}){
    return(
        <div className="w-full text-gray-700 p-6 border border-blue-600/20 rounded-4xl flex flex-col items-center justify-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-sm:p-3 dark:bg-slate-800 dark:text-gray-300">
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                {icon}
            </div>
            <span className="text-2xl font-medium max-sm:text-lg">{skill}</span>
        </div>
    )
}