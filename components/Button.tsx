import { useLayoutEffect, useState } from "react"

export default function Button(props: { children?: any, onClick?(): void, className?: string, variant?: 'border' | 'filled' }) {

    const [state, setState] = useState('')

    useLayoutEffect(() => {
        if (props.variant == 'border') {
            setState('btnBorder')
        } else if (props.variant == 'filled') {
            setState('btnFilled')
        } else {
            setState('btnPlain')
        }
    }, [props.variant, setState])

    return (
        <button onClick={props.onClick} className={`${state} ${props.className}`}>
            {props.children}
        </button>
    )
}