import { useEffect, useState } from "react"
import { setCookie } from 'cookies-next'
import { darkTheme, pointer } from "./plugins/sync"



export default function Switcher(props: { onChange(): void, default: boolean }) {

    const off = `${pointer} focus:outline-none flex shadow-inner drop-shadow-sm justify-start items-center w-[51px] h-[31px] rounded-full bg-gray-600`
    const on = `${pointer} focus:outline-none flex shadow-inner drop-shadow-sm justify-end items-center w-[51px] h-[31px] rounded-full bg-stabilo`

    const [toggle, setToggle] = useState(props.default)
    const [status, setStatus] = useState(off)

    useEffect(() => {
        if (toggle) {
            setStatus(on)
        } else {
            setStatus(off)
        }
    }, [toggle, setStatus])

    function change() {
        setToggle(!toggle)
        props.onChange()
    }

    return (
        <button onClick={change} className={status}>
            <div className={`w-[27px] h-[27px] mx-[2px] bg-white rounded-full shadow-lg`} />
        </button>
    )
}



export function ColorScheme() {

    const [on, setOn] = useState(darkTheme)

    function toggle() {
        if (on) {
            setOn(!on)
            setCookie('theme', 'light')
            document.documentElement.classList.remove('dark')
        } else {
            setOn(!on)
            setCookie('theme', 'dark')
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <Switcher default={on} onChange={toggle} />
    )
}