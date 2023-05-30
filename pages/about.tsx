import Head from 'next/head';

import { Biofip } from '../components/Icons';

export default function About() {
    return (
        <>
            <Head>
                <title>Biofip - About</title>
            </Head>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <span className='items-center w-full p-40'>
                    <Biofip className='w-full animate-pulse text-blue-600 mb-8' />
                    <h1 className='font-bold animate-bounce tracking-wider'>Biofip</h1>
                </span>

                <span className='justify-center items-center px-4'>
                    <menu>
                        <h2>User link 3.0:</h2>
                    </menu>
                    <br />
                    <p>the next generation of self-branding by using links based on Web 3.0</p>
                    <br />
                    <p>at Biofip, we're excited about growing your profile engagement traffic and helping you to show off your non-fungible token or <a href="https://opensea.io/blog/guides/non-fungible-tokens/">NFT</a> as your Display Profile by swanky, just like we connect you with another social link and platform API.<br />by joining us you would support our mission to grow and become the Identity Card of <a href="https://about.meta.com/what-is-the-metaverse/">Metaverse</a>.</p>
                    <br />
                    <menu>
                        <div>
                            <sub>©2022 site created by </sub>
                            <sub onClick={() => open('https://prayoga.deno.dev/')} className='pointer underline'>Darwin Prayoga</sub>
                            <sub>, All rights reserved.</sub>
                        </div>
                    </menu>
                    <br />
                </span>
            </div>
        </>
    )
}