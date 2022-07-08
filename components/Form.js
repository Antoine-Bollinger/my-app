import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const inputsClass = "block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
    const inputs = [
        {
            type: "text",
            icon: faUser,
            placeholder: locales[locale].contact.form.name
        },
        {
            type: "text",
            icon: faPhone,
            placeholder: locales[locale].contact.form.phone
        },
        {
            type: "email",
            icon: faEnvelope,
            placeholder: locales[locale].contact.form.email
        }
    ];

    return (
        <form>
            <div className="w-full text-primary-900">
                <div className="grid grid-cols-1 gap-6">
                    {inputs.map((input, index) => (
                        <label className="flex shadow" key={index}>
                            <div className="flex items-center justify-center rounded-l-md px-3 text-orange-900 dark:bg-light-grey">
                                <FontAwesomeIcon icon={input.icon} />
                            </div>
                            <input
                                type={input.type}
                                className={`${inputsClass} rounded-r-md`}
                                placeholder={input.placeholder}
                            />
                        </label>
                    ))}
                    <label className="block shadow">
                        <textarea
                            className={`${inputsClass} rounded-md`}
                            rows="4"
                            placeholder={locales[locale].contact.form.message}
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="lg:ml-[50%] w-full lg:w-1/2 bg-white text-orange-900 hover:text-orange-700 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transition opacity-80 hover:opacity-100"
                    >
                        <FontAwesomeIcon icon={faPaperPlane} /> {locales[locale].contact.form.send}
                    </button>
                </div>
            </div>
        </form>
    )
}