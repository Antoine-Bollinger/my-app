import Section from "../components/Section";
import Form from "../components/Form";

import Image from "next/image";
import me from "../public/me.jpg";

export default function Contact() {
    return (
        <Section id="contact" className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full h-full flex items-end justify-start">
                <div className="w-full lg:w-1/2 relative before:bg-orange-600 before:bottom-pal" id="identity">
                    <Image
                        priority
                        src={me}
                        height={me.height}
                        width={me.width}
                        layout="responsive"
                        alt="Me"
                    />
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
                <Form />
            </div>
        </Section >
    )
}