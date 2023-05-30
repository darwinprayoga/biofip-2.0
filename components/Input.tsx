export default function Input(props: { className?: string, type?: string, name?: string, placeholder?: string, onChange: any, autoFocus?: boolean }) {

    const initial = 'input'

    return (
        <input autoFocus={props.autoFocus} onChange={props.onChange} className={`${initial} ${props.className}`} type={props.type} name={props.name} placeholder={props.placeholder} />
    )
}