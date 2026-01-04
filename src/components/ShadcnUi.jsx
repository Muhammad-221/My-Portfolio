import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function InputWithLabel({inp, inpPlac}){
  return (
    <div className="grid w-full mb-5 items-center gap-3">
      <Label htmlFor={inp}>{inp}</Label>
      <Input type={inp} id={inp} placeholder={inpPlac}/>
    </div>
  )
}

export function TextareaWithLabelAndButton() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" className={"mb-5"}/>
      <Button className={"text-white bg-indigo-500 hover:bg-indigo-700 transition duration-700"}>Send message</Button>
    </div>
  )
}
