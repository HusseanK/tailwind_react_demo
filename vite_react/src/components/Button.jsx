export default function Button({ children, href, className=""}) {
    const baseClasses = "py-20"

    return <a className={className} href={href}> {children} </a>
}