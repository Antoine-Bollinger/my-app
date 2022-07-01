export default function Section({ children, id, className = '' }) {
    return (
        <section className={`px-2pal lg:px-3pal py-3pal w-full h-full ${className}`} id={id}>
            {children}
        </section >
    )
}