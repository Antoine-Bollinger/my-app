export default function Section({ children, id, className }) {
    return (
        <section className={`p-3pal lg:pl-0 w-full h-full flex flex-col items-center lg:items-end justify-end ${className}`} id={id}>
            {children}
        </section >
    )
}