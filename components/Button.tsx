import { pointer } from "./plugins/sync"

export default function Button(props: { children?: any, onClick?(): void, className?: string, variant?: 'border' | 'filled' }) {

    const initial = 'flex py-3 px-6 justify-center items-center font-bold tracking-widest rounded-xl text-blue-600 focus:outline-none border-transparent border-2'
    const border = 'flex py-3 px-6 justify-center items-center font-bold tracking-widest rounded-xl text-blue-600 focus:outline-none border-blue-600 border-2'
    const filled = 'flex py-3 px-6 justify-center items-center font-bold tracking-widest rounded-xl bg-blue-600 text-white focus:outline-none border-blue-600 border-2'

    function style() {
        if (props.variant == 'border') {
            return border
        } else if (props.variant == 'filled') {
            return filled
        } else {
            return initial
        }
    }

    return (
        <button onClick={props.onClick} className={`${style()} ${pointer} ${props.className}`}>
            {props.children}
        </button>
    )
}