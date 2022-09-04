import { useEffect, useState } from "react"

export default function Loader(props: { children: any }) {

    const [load, setLoad] = useState(true)
    const [online, setOnline] = useState(true)

    useEffect(() => {

        setOnline(navigator.onLine)

        setTimeout(() => {
            setLoad(false)
        }, 100);

    }, [setOnline, setLoad])

    const Onload = () => {
        if (online) {
            return (
                <>
                    {load && <div className="fixed inset-0 bg-white z-50" />}
                    {props.children}
                </>
            )
        } else {
            return (
                <div className="fixed inset-0 flex justify-center items-center">
                    <h2>You are Offline now.<br /><sub>ERR_INTERNET_DISCONNECTED</sub></h2>
                </div>
            )
        }
    }

    return (
        <Onload />
    )
}