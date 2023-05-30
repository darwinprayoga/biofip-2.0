import { Player } from '@lottiefiles/react-lottie-player';
import { useLayoutEffect, useState } from 'react';

import * as lottie from '../public/lottie/85379-dragon.json';
import Button from './Button';
import { Biofip } from './Icons';

export default function Loader(props: { children: any }) {

    const [load, setLoad] = useState(true)
    const [online, setOnline] = useState(true)

    useLayoutEffect(() => {

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
                <div className="fixed inset-0 flex flex-col justify-center items-center">
                    {load && <div className="fixed inset-0 bg-white z-50" />}
                    <menu className='justify-center'>
                        <Biofip className="text-blue-600 w-10 md:w-12 mr-2" />
                        <h2 className="font-bold tracking-wider">biofip</h2>
                    </menu>
                    <section className='flex flex-col md:flex-row justify-center items-center mb-4'>
                        <Player
                            autoplay
                            loop
                            src={lottie}
                            style={{ height: '400px', width: '400px' }} />
                        <h2>You are Offline now.<br /><sub>ERR_INTERNET_DISCONNECTED</sub></h2>
                    </section>
                    <Button onClick={() => location.reload()} className='rounded-full hidden md:flex'>Click to Refresh</Button>
                    <Button onClick={() => location.reload()} className='rounded-full flex md:hidden'>Tap to Refresh</Button>
                </div>
            )
        }
    }

    return (
        <Onload />
    )
}