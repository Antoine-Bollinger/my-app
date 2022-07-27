export default function Section({ children, id, className = '', full = false }) {
    const customClass = full ? 'relative' : 'px-2pal lg:px-3pal py-3pal ';
    return (
        <section className={`${customClass} w-full h-full ${className}`} id={id}>
            {children}
        </section >
    )
}