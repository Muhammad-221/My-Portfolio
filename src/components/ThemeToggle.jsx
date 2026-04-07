import { useTheme } from "../theme/ThemeContext";
import { Button } from "@/components/ui/button";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function ThemeToggle(){
    const {theme, toggleTheme} = useTheme();
    
    return(
        <Button 
            onClick={toggleTheme} 
            className={"size-9 rounded-full ms-auto bg-indigo-400 hover:bg-indigo-500 transition duration-700"}
        >
            {theme === "dark" ? 
                <IoMdSunny className="text-xl text-white"/> : 
                <IoMdMoon className="text-xl text-white"/>}
        </Button>
    )
}