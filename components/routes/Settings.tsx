import { collection, onSnapshot } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';

import Button from '../Button';
import { fire } from '../config/firebase';
import { Apps, Book, Chat, Credit, Design, Ethereum, Facebook, Info, Instagram, Shield, Twitter } from '../Icons';
import Input from '../Input';



export default function Settings() {

    const [social, setSocial] = useState(false)
    const [help, setHelp] = useState(false)
    const [credit, setCredit] = useState(false)
    const [data, setData] = useState<any | null>([])
    const [input, setInput] = useState('')

    useLayoutEffect(() => {

        onSnapshot(collection(fire, 'credits'), s => {
            setData(s.docs.map(x => x.data()))
        })

    }, [setData])

    const Component = (props: any) => {

        const { Icon, title, desc, onClick } = props

        return (
            <section className='flex flex-col w-full p-4 mb-4 rounded-2xl bg-blue-600/10'>
                <h1 className='font-bold tracking-widest'>{title}</h1>
                <div className='w-full flex justify-between items-end mt-8'>
                    <p>{desc}</p>
                    <Button onClick={onClick} variant='filled' className='rounded-full w-min'><Icon className='w-12' /></Button>
                </div>
            </section>
        )
    }

    return (
        <section className='px-2 md:px-0 pb-[72px]'>
            <Component onClick={() => open('/about')} Icon={Info} title="About Biofip" desc="the future of self-branding" />

            <section className='flex flex-col w-full p-4 mb-4 rounded-2xl bg-blue-600/10'>
                <h1 className='font-bold tracking-widest'>Follow Us</h1>
                <div className='w-full flex justify-between items-end mt-8'>
                    <p>go to our page in another dimensions</p>
                    <Button onClick={() => setSocial(!social)} variant='filled' className='rounded-full w-min'><Apps className='w-12' /></Button>
                </div>
                {social &&
                    <menu className='mt-8'>
                        <Button onClick={() => open('https://opensea.io/collection/biofip')}><Ethereum className='h-7' /></Button>
                        <Button onClick={() => open('https://www.instagram.com/biofip')}><Instagram className='w-7' /></Button>
                        <Button onClick={() => open('https://www.facebook.com/bi0fip')}><Facebook className='w-7' /></Button>
                        <Button onClick={() => open('https://www.twitter.com/bi0fip')}><Twitter className='w-7' /></Button>
                    </menu>}
            </section>

            <Component onClick={() => open('/tos')} Icon={Book} title="Terms of Service" desc="the legal agreements between us and you" />
            <Component onClick={() => open('/pp')} Icon={Shield} title="Privacy Policy" desc="how we manage a client's data" />
            <Component onClick={() => open(`mailto:biofip.com@gmail.com?subject=BIOFIP%3A%20DESIGNER'S%20PROPOSE`)} Icon={Design} title="Become Designer" desc="propose your concept to us" />

            <section className='flex flex-col w-full p-4 mb-4 rounded-2xl bg-blue-600/10'>
                <h1 className='font-bold tracking-widest'>Credits & Attributions</h1>
                <div className='w-full flex justify-between items-end mt-8'>
                    <p>architecture and intellectual property</p>
                    <Button onClick={() => setCredit(!credit)} variant='filled' className='rounded-full w-min'><Credit className='w-12' /></Button>
                </div>
                {credit &&
                    <span className='mt-8'>
                        {data.map((x: any, i: number) => (
                            <div key={i} className='pb-1'>
                                <b>{x.name}<br /><sub>{x.link}</sub></b>
                            </div>
                        ))}
                    </span>}
            </section>

            <section className='flex flex-col w-full p-4 mb-4 rounded-2xl bg-blue-600/10'>
                <h1 className='font-bold tracking-widest'>Help Center</h1>
                <div className='w-full flex justify-between items-end mt-8'>
                    <p>experiences of our support</p>
                    <Button onClick={() => setHelp(!help)} variant='filled' className='rounded-full w-min'><Chat className='w-12' /></Button>
                </div>
                {help &&
                    <menu className='mt-8'>
                        <Input onChange={(e: any) => setInput(e.target.value)} className="bg-smoke dark:bg-gray-800" placeholder='Type Your Message' name='message' type='text' />
                        <Button onClick={() => open(`mailto:biofip.com@gmail.com?subject=BIOFIP%3A%20NEED%20HELP!&body=${encodeURIComponent(input)}`)}>Submit</Button>
                    </menu>}
            </section>

            <menu className='my-8'>
                <sub>Biofip version 2.0</sub>
            </menu>

        </section>
    )
}