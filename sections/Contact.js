import Section from "../components/Section";
import Form from "../components/Form";

import Identity from "../components/Identity";

export default function Contact() {
    return (
        <Section id="contact" className="flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="w-full h-full flex items-end justify-end hidden lg:flex">
                <Identity className="w-full lg:w-1/2 relative" text1="Copyright © 2022" text2="antoinebollinger.fr" />
            </div>
            <div className="w-full h-full flex flex-col justify-center">
                <Form />
            </div>
        </Section >
    )
}