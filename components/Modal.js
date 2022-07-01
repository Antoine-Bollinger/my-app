import { useCallback, useContext, useState } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

export default function Modal({ body = '', header = '', className = '' }) {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const closeModal = useCallback((e, goLink = false) => {
        e.preventDefault();
        const url = document.querySelector('.modal-link').href;
        document.querySelector('.modal-title').innerHTML = '';
        document.querySelector('.modal-body').innerHTML = '';
        document.querySelector('.modal-link').href = '#';
        document.getElementById('modal').classList.add('hidden');
        if (!goLink) return
        window.open(url)
    }, []);

    return (
        <div className={`hidden fixed inset-0 ${className}`} id="modal">
            {/* <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div> */}
            <div tabIndex="-1" className="overflow-y-auto overflow-x-hidden absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={(e) => closeModal(e)}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="p-6 text-center">
                            <p className="modal-title mb-5 font-bold text-gray-800 text-xl uppercase">{header}</p>
                            <p className="modal-body mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{body}</p>
                            <div className="flex justify-around gap-8">
                                <button type="button" className="w-full text-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={(e) => closeModal(e)}>
                                    {locales[locale].modal.no}
                                </button>
                                <a href="" target="_blank" rel="noreferrer" title="Go" className="modal-link w-full text-center text-white bg-orange-900 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={(e) => closeModal(e, true)}>
                                    {locales[locale].modal.yes}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}