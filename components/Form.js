import { useContext, useEffect, useState } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";
import { inputCheck } from "../lib/helpers";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { openModal } from "./Modal";

export default function Form() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const inputClassBase = "block w-full bg-gray-100 focus:bg-white focus:ring-0 transition rounded-r-md";
    const inputClassNormal = "border-transparent focus:border-gray-500";
    const inputClassValid = "border-green-600 focus:border-green-500";
    const inputClassDanger = "border-red-600 focus:border-red-500";

    const [inputs, setInputs] = useState({
        name: {
            value: '',
            className: `${inputClassBase} ${inputClassNormal}`
        },
        email: {
            value: '',
            className: `${inputClassBase} ${inputClassNormal}`
        },
        message: {
            value: '',
            className: `${inputClassBase} ${inputClassNormal}`
        }
    });

    useEffect(() => {
        for (const prop in inputs) {
            setInputs((prevState) => ({
                ...prevState, [prop]: { ...inputs[prop], element: document.querySelector(`[name="${prop}"]`) }
            }))
        }
    }, []);

    const handleSetInput = (element) => {
        const { name, value, dataset } = element;
        const newClassName = inputCheck(value, dataset.type) ? `${inputClassBase} ${inputClassValid}` : `${inputClassBase} ${inputClassDanger}`;
        setInputs((prevState) => ({ ...prevState, [name]: { value, element, className: newClassName } }))
    }

    const handleInputChange = (e) => {
        handleSetInput(e.target)
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        document.getElementById('sendButton').classList.add('animate-bounce');
        try {
            for (const prop in inputs) {
                const { value, element } = inputs[prop];
                if (!inputCheck(value, element.dataset.type))
                    throw new Error(locales[locale].contact.response.invalid[prop], { cause: element });
            }
            const data = new FormData();
            data.append("name", inputs.name.value);
            data.append("email_from", inputs.email.value);
            data.append("email_to", process.env.email_to);
            data.append("phone", "");
            data.append("message", inputs.message.value);
            const sendEmail = await fetch(process.env.email_api, {
                method: "POST",
                body: data
            });
            const response = await sendEmail.json();
            console.log();
            if (response.sent) {
                openModal({ body: locales[locale].contact.response.yes.replace('%s', inputs.name.value), buttons: 'hidden' });
                document.getElementById('sendButton').classList.remove('animate-bounce');
            } else {
                throw new Error(locales[locale].contact.response.no);
            }
        } catch (e) {
            if (e.cause) {
                handleSetInput(e.cause);
                e.cause.focus();
            }
            if (e.error) {
                console.error(e.error);
            }
            openModal({ body: e.message, buttons: 'hidden' });
            document.getElementById('sendButton').classList.remove('animate-bounce');
        }

    }

    return (
        <form>
            <div className="w-full text-primary-900">
                <div className="grid grid-cols-1 gap-6">
                    <label className="flex shadow rounded-md overflow-hidden">
                        <div className="flex items-center justify-center rounded-l-md px-3 text-orange-900 dark:bg-light-grey">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input
                            name="name"
                            type="text"
                            data-type="text"
                            className={`${inputs.name.className}`}
                            placeholder={locales[locale].contact.form.name}
                            value={inputs.name.value}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="flex shadow rounded-md overflow-hidden">
                        <div className="flex items-center justify-center rounded-l-md px-3 text-orange-900 dark:bg-light-grey">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                            name="email"
                            type="email"
                            data-type="email"
                            className={inputs.email.className}
                            row="4"
                            placeholder={locales[locale].contact.form.email}
                            value={inputs.email.value}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="block shadow rounded-md overflow-hidden">
                        <textarea
                            name="message"
                            data-type="textWithSpace"
                            className={inputs.message.className}
                            rows="4"
                            placeholder={locales[locale].contact.form.message}
                            value={inputs.message.value}
                            onChange={handleInputChange}
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        id="sendButton"
                        className="lg:ml-[50%] w-full lg:w-1/2 bg-white text-orange-900 hover:text-orange-700 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transition opacity-80 hover:opacity-100"
                        onClick={sendEmail}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} /> {locales[locale].contact.form.send}
                    </button>
                </div>
            </div>
        </form>
    )
}