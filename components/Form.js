import { useContext, useState } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { openModal } from "./Modal";

export default function Form() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const inputCheck = (value = '', type = 'text') => {
        let regexTest = {
            "text": /^[\-/A-Za-z\u00C0-\u017F -,]+$/,
            "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        };
        return regexTest[type].test(value);
    }


    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            if (!inputCheck(name)) throw new Error(locales[locale].contact.response.invalid.name);
            if (!inputCheck(email, 'email')) throw new Error(locales[locale].contact.response.invalid.email);
            if (!inputCheck(message)) throw new Error(locales[locale].contact.response.invalid.message);
            axios.post(`${window.location.origin}/api/email`, { name, email, message })
                .then(res => {
                    if (res.status !== 200) throw new Error();
                    setName(''); setEmail(''); setMessage('');
                    openModal({ body: locales[locale].contact.response.yes.replace('%s', res.data.name), buttons: 'hidden' });
                })
                .catch(err => {
                    throw new Error(locales[locale].contact.response.no);
                });

        } catch (e) {
            openModal({ body: e.message, buttons: 'hidden' });
        }
    }

    const inputsClass = "block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"

    return (
        <form>
            <div className="w-full text-primary-900">
                <div className="grid grid-cols-1 gap-6">

                    <label className="flex shadow" id="name-input">
                        <div className="flex items-center justify-center rounded-l-md px-3 text-orange-900 dark:bg-light-grey">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input
                            type="text"
                            className={`${inputsClass} rounded-r-md`}
                            placeholder={locales[locale].contact.form.name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className="flex shadow" id="email-input">
                        <div className="flex items-center justify-center rounded-l-md px-3 text-orange-900 dark:bg-light-grey">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                            type="email"
                            className={`${inputsClass} rounded-r-md`}
                            placeholder={locales[locale].contact.form.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="block shadow" id="message-input">
                        <textarea
                            className={`${inputsClass} rounded-md`}
                            rows="4"
                            placeholder={locales[locale].contact.form.message}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </label>

                    <button
                        type="submit"
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