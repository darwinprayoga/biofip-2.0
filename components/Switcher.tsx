import { setCookie } from 'cookies-next';
import { useLayoutEffect, useState } from 'react';



export default function Switcher(props: { onChange(): void, default: boolean }) {

    const off = `flex shadow-inner drop-shadow-sm justify-start items-center w-[51px] h-[31px] rounded-full bg-gray-600 dark:bg-gray-trans`
    const on = `flex shadow-inner drop-shadow-sm justify-end items-center w-[51px] h-[31px] rounded-full bg-stabilo`

    const [toggle, setToggle] = useState(props.default)
    const [status, setStatus] = useState(off)

    useLayoutEffect(() => {
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



export function theme(state: boolean, setState: any) {
    if (state) {
        setState(!state)
        setCookie('theme', 'light', { maxAge: 60 * 60 * 24 * 30 })
        document.documentElement.classList.remove('dark')
    } else {
        setState(!state)
        setCookie('theme', 'dark', { maxAge: 60 * 60 * 24 * 30 })
        document.documentElement.classList.add('dark')
    }
}



export function Tab(props: { onChange(): void, default?: boolean, on: string, off: string }) {

    const [toggle, setToggle] = useState(props.default)

    useLayoutEffect(() => {
        setToggle(props.default)
    }, [setToggle, props.default])

    function change() {
        setToggle(!toggle)
        props.onChange()
    }

    return (
        <button onClick={change} className="flex justify-items-center w-full bg-gray-600 dark:bg-gray-trans rounded-xl p-[2px]">

            {!toggle && <div className="flex justify-center items-center rounded-xl py-1 w-full tracking-wider text-gray-800 dark:text-white bg-white dark:bg-[#636366] shadow-lg">
                {props.on}
            </div>}
            {toggle && <div className="flex justify-center items-center rounded-xl py-1 w-full tracking-wider text-gray-800 dark:text-white">
                {props.on}
            </div>}



            {!toggle && <div className="flex justify-center items-center rounded-xl py-1 w-full tracking-wider text-gray-800 dark:text-white">
                {props.off}
            </div>}
            {toggle && <div className="flex justify-center items-center rounded-xl py-1 w-full tracking-wider text-gray-800 dark:text-white bg-white dark:bg-[#636366] shadow-lg">
                {props.off}
            </div>}

        </button>
    )
}