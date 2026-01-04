import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollUP({scrollUP}){
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    return (
        <div className=" flex-col gap-8 fixed right-5 bottom-5 z-20">
            <Button 
                variant="outline" 
                size="icon" 
                className={`bg-indigo-500 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700 ${scrollUP}`} 
                onClick={scrollTop}
            >
                <ArrowUpIcon className="text-white"/>
            </Button>
        </div>
    )
}