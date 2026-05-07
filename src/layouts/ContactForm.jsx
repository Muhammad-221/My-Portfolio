import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_n53a7e5',
            'template_gvjkixn',
            formData,
            'X9HStPVxOE7Fme6MB'
        )
        try{
            alert("Message sent!");
            setFormData({ name: "", email: "", message: "" });
        }
        catch(err) {
            console.log(err);
            alert("Failed to send message, try again.");
        };
    };
    return(
        <motion.div
            initial={{ opacity: 0, x: +50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-120 bg-card card-hover p-10 rounded-2xl border max-lg:p-5"
        >
            <form onSubmit={handleSubmit}>
                <div className="grid w-full mb-5 items-center gap-3">
                    <Label htmlFor="Name">Name</Label>
                    <Input 
                        type="text"
                        id="Name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        autoComplete="name"
                        required
                        name="name"
                    />
                </div>
                <div className="grid w-full mb-5 items-center gap-3">
                    <Label htmlFor="Email">Email</Label>
                    <Input 
                        type="email" 
                        id="Email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        autoComplete="email"
                        required
                        name="email"
                    />
                </div>
                <div className="grid w-full gap-3">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea 
                        placeholder="Type your message here." 
                        id="message" 
                        className={"mb-5"} name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        rows={4}
                    />                    
                    <Button type="submit" className={"text-white bg-indigo-500 hover:bg-indigo-700 transition duration-700"}>Send message</Button>
                </div>
            </form>
        </motion.div>
    )
}