import { useEffect, useState } from "react"

export default function Dark({ className = '' }) {
    const [darkMode, setDarkMode] = useState('light');

    const toggleDark = (toggle) => {
        if (toggle === 'dark') {
            document.body.parentNode.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.parentNode.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        setDarkMode(toggle);
    }

    useEffect(() => {
        toggleDark(localStorage.theme);
    })

    return (
        <nav className={className} id="dark">
            <ul className="flex">
                {['dark', 'light'].map((ele, index) => (
                    <li className="uppercase text-orange-900 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-500 transition mr-4" key={index}>
                        <a
                            href="#"
                            className={`${darkMode === ele ? 'active text-orange-500' : ''} cursor-pointer transition`}
                            onClick={(e) => { e.preventDefault(); toggleDark(ele); }}
                        >
                            {ele}
                        </a>
                    </li>
                ))}
            </ul >
        </nav >
    )
}