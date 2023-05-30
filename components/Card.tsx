export default function Card(props: { children: any, className?: string }) {
    const initial = "bg-smoke dark:bg-gray-800 rounded-3xl drop-shadow-md"
    return (
        <div className={`${initial} ${props.className}`}>
            {props.children}
        </div>
    )
}