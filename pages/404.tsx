import { Player } from '@lottiefiles/react-lottie-player';
import Head from 'next/head';

import Button from '../components/Button';
import { Biofip } from '../components/Icons';
import * as lottie from '../public/lottie/11116-404-planet-animation.json';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Biofip - 404</title>
            </Head>
            <div className="fixed inset-0 flex flex-col justify-center items-center">
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
                    <h2>Not Found<br /><sub>You may have mistyped the username or page URL.</sub></h2>
                </section>
                <Button onClick={() => location.href = '/'} className='rounded-full'>Go Home</Button>
            </div>
        </>
    )
}