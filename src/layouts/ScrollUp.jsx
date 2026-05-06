import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollUP(){
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <div className=" flex-col gap-8 fixed right-5 bottom-5 z-20">
            <Button 
                variant="outline" 
                size="icon" 
                className="bg-indigo-500 transition duration-700 ease-in-out hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700" 
                onClick={scrollTop}
            >
                <ArrowUpIcon className="text-white"/>
            </Button>
        </div>
    )
}