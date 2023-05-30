import { Player } from '@lottiefiles/react-lottie-player';
import { usePWAInstall } from 'react-use-pwa-install';

import Button from '../components/Button';
import { Biofip } from '../components/Icons';
import * as lottie from '../public/lottie/81487-yummi-nft-cards.json';

export default function Installer(props: { onDismiss?(): void }) {

    const { onDismiss } = props
    const install = usePWAInstall()

    async function home() {
        location.href = await '/'
    }

    return (
        <>
            {install && <div className="bg-gray-600 dark:bg-black fixed inset-0 flex flex-col justify-center items-center z-50">
                <menu className='justify-center mb-8'>
                    <Biofip className="text-blue-600 w-10 md:w-12 mr-2" />
                    <h2 className="font-bold tracking-wider">biofip</h2>
                </menu>
                <section className='flex flex-col md:flex-row justify-center items-center mb-4'>
                    <Player
                        autoplay
                        loop
                        src={lottie}
                        style={{ height: '350px', width: '350px' }} />
                    <h2>Get the Full Experience<br /><sub>By installing Biofip's Progressive Web App we getting closer to you daily.</sub></h2>
                </section>
                <Button onClick={install} variant='filled' className='rounded-full mt-8 mb-2'>Install PWA</Button>
                <Button onClick={() => onDismiss ? onDismiss() : home()} className='rounded-full'>Dismiss</Button>
            </div>}
        </>
    )

}