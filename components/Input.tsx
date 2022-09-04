export default function Input(props: { className?: string, type?: string, name?: string, placeholder?: string }) {

    const initial = 'focus:outline-none tracking-wider bg-gray-trans p-2 rounded-lg w-full placeholder-gray-smoke dark:placeholder-gray-700'

    return (
        <input className={`${initial} ${props.className}`} type={props.type} name={props.name} placeholder={props.placeholder} />
    )
}