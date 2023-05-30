import { Player } from '@lottiefiles/react-lottie-player';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import { useState } from 'react';

import * as lottie from '../../public/lottie/92445-crypto-bitcoin.json';
import Button from '../Button';
import Card from '../Card';
import { auth } from '../config/firebase';
import { Dragon, Ethereum, Instagram, Spotify, Token, Twitter } from '../Icons';
import Input from '../Input';
import Modal from '../Modal';
import Music from '../Music';

export default function Profile(props: { user: any }) {

    const { user } = props

    const [wallet, setWallet] = useState(false)
    const [pokemon, setPokemon] = useState(false)
    const [nft, setNft] = useState(false)

    async function googleLogIn() {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider)
    }

    async function facebookLogIn() {
        const provider = new FacebookAuthProvider();
        await signInWithRedirect(auth, provider)
    }

    async function logOut() {
        await signOut(auth)
    }



    return (
        <>
            {user ?
                <section className='pb-[72px]'>
                    <menu className="justify-end">
                        <Button onClick={logOut}>Logout</Button>
                    </menu>
                    <section className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0'>
                        <div className='col-span-1 p-4 rounded-2xl bg-blue-600/10'>
                            <h1 className='font-bold tracking-widest'>Biofip Display</h1>
                            <img onClick={() => open('https://www.pokemon.com/us/pokedex/bulbasaur')} draggable={false} className='pointer w-full rounded-2xl bg-blue-600 mt-8' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                            <h3 className='mx-4 mt-2 mb-2'>pikachu-world-cap</h3>
                            <menu onClick={() => open('https://www.pokemon.com/us/')} className='pointer w-min justify-start mx-4'>
                                <img draggable={false} className='w-8 rounded-full mr-2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d081c0d-d5ed-41d5-becd-b9d37e1b02c2/d7qvse4-674ed946-a90d-4976-b145-576faf9aafcd.png/v1/fill/w_1024,h_1024,q_75,strp/pokemon__pokeball_by_darklight02-d7qvse4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kN3F2c2U0LTY3NGVkOTQ2LWE5MGQtNDk3Ni1iMTQ1LTU3NmZhZjlhYWZjZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTAyNCJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kYXJrbGlnaHQwMi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.2L_mND4DZH-zoSDYnjbo5Qx38abhc5_hFj5TMFbN_Y8" />
                                <p>Pokemon</p>
                            </menu>
                        </div>
                        <div className='col-span-1 flex flex-col justify-end'>
                            <div className='p-4 rounded-2xl bg-blue-600/10'>
                                <h1 className='font-bold tracking-widest'>Digital Collectibles</h1>
                                <div className='w-full flex justify-between items-end mt-8'>
                                    <span className='items-center'>
                                        <Button onClick={() => setPokemon(true)} className='rounded-full w-min px-8'><Dragon className='h-12' /></Button>
                                        <p>Pokemon</p>
                                    </span>
                                    {pokemon &&
                                        <Modal onClose={() => setPokemon(false)}>
                                            <div className='grid grid-cols-2 pb-4 sticky top-0 bg-smoke dark:bg-gray-800'>
                                                <img draggable={false} className='h-full rounded-2xl bg-blue-600' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <span className='justify-between'>
                                                    <span className='w-full items-end'>
                                                        <Button onClick={() => open('https://www.pokemon.com/us/')} className='rounded-full'><p>⚽ Pokemon</p></Button>
                                                    </span>
                                                    <span className='w-full items-center'>
                                                        <Button variant='filled'><p>Set as Display</p></Button>
                                                        <Button onClick={() => open('https://www.pokemon.com/us/pokedex/bulbasaur')}><p>Details</p></Button>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className='bg-gray-600 dark:bg-black rounded-3xl flex flex-wrap justify-center items-center'>
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                            </div>
                                        </Modal>}
                                    <span className='items-center'>
                                        <Button onClick={() => setNft(true)} className='rounded-full w-min px-8'><Token className='h-12' /></Button>
                                        <p>NFT</p>
                                    </span>
                                    {nft &&
                                        <Modal onClose={() => setNft(false)}>
                                            <div className='grid grid-cols-2 pb-4 sticky top-0 bg-smoke dark:bg-gray-800'>
                                                <img draggable={false} className='h-full rounded-2xl bg-blue-600' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <span className='justify-between'>
                                                    <span className='w-full items-end'>
                                                        <Button onClick={() => open('https://opensea.io/')} className='rounded-full'><p>⛵ Opensea</p></Button>
                                                    </span>
                                                    <span className='w-full items-center'>
                                                        <Button variant='filled'><p>Set as Display</p></Button>
                                                        <Button onClick={() => open('https://www.pokemon.com/us/pokedex/bulbasaur')}><p>Details</p></Button>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className='bg-gray-600 dark:bg-black rounded-3xl flex flex-wrap justify-center items-center'>
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                                <img draggable={false} className='pointer w-40 rounded-2xl bg-blue-600 m-2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                                            </div>
                                        </Modal>}
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='p-4 rounded-2xl bg-blue-600/10'>
                                <h1 className='font-bold tracking-widest'>User Data</h1>
                                <div className='w-full mt-8'>
                                    <p>Username</p>
                                    <Input onChange={() => null} className="bg-smoke dark:bg-gray-800 mt-2" placeholder='Username' name='username' type='text' />
                                </div>
                                <div className='w-full mt-4'>
                                    <p>Display Name</p>
                                    <Input onChange={() => null} className="bg-smoke dark:bg-gray-800 mt-2" placeholder='Display Name' name='name' type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='p-4 rounded-2xl bg-blue-600/10'>
                                <h1 className='font-bold tracking-widest'>Links</h1>
                                <div className='w-full mt-8'>
                                    <div className='flex'>
                                        <Instagram className='w-4 mr-2' />
                                        <p>Instagram</p>
                                    </div>
                                    <Input onChange={() => null} className="bg-smoke dark:bg-gray-800 mt-2" placeholder='Username' name='username' type='text' />
                                </div>
                                <div className='w-full mt-4'>
                                    <div className='flex'>
                                        <Twitter className='w-4 mr-2' />
                                        <p>Twitter</p>
                                    </div>
                                    <Input onChange={() => null} className="bg-smoke dark:bg-gray-800 mt-2" placeholder='Username' name='username' type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='p-4 rounded-2xl bg-blue-600/10'>
                                <h1 className='font-bold tracking-widest'>Pinned</h1>
                                <div className='w-full mt-8'>
                                    <div className='flex mb-2'>
                                        <Spotify className='w-4 mr-2' />
                                        <p>Spotify Track</p>
                                    </div>
                                    <Card>
                                        <img draggable={false} className='w-full rounded-t-2xl' src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36" />
                                        <menu className='justify-between py-2 px-4'>
                                            <div className='flex items-center'>
                                                <Music src='https://p.scdn.co/mp3-preview/579494c4709a8cc91687e487566c315dee104f9e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook' />
                                                <span className='ml-2'>
                                                    <h3>Blinding Lights</h3>
                                                    <p>The Weeknd</p>
                                                </span>
                                            </div>
                                            <Spotify className='w-6' />
                                        </menu>
                                    </Card>
                                    <input className="input border-b-2 rounded-none bg-transparent mt-2" placeholder='Paste Track Link Here' name='link' type='url' />
                                </div>
                                <div className='w-full mt-4'>
                                    <div className='flex'>
                                        <Twitter className='w-4 mr-2' />
                                        <p>Pinned Tweet</p>
                                    </div>
                                    <Card className='p-4 mt-2'>
                                        <menu className='justify-between mb-4'>
                                            <div className='flex items-center'>
                                                <img draggable={false} className='w-10 rounded-full mr-4' src="https://pbs.twimg.com/profile_images/1370429418548588548/9rl0e8m7_400x400.jpg" />
                                                <span>
                                                    <b>darwinprayoga</b>
                                                    <p>mdarwinp</p>
                                                </span>
                                            </div>
                                            <Twitter className='w-6' />
                                        </menu>
                                        <h3 className='mb-2'>this world told me if the genius became inborn, so im goin to build a whole new world</h3>
                                        <p>4:07 PM · Jul 21, 2022</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='p-4 rounded-2xl bg-blue-600/10'>
                                <h1 className='font-bold tracking-widest'>Wallet Address</h1>
                                <div className='w-full flex justify-between items-end mt-8'>
                                    <p>Connect your wallet & share NFT as Profile</p>
                                    <Button onClick={() => setWallet(!wallet)} variant='filled' className='rounded-full w-min px-8'><Ethereum className='h-12' /></Button>
                                </div>
                                {wallet &&
                                    <span className='justify-center items-center mt-8'>
                                        <Player
                                            autoplay
                                            loop
                                            src={lottie}
                                            style={{ height: '250px', width: '250px' }} />
                                        <div className='flex flex-wrap mt-8 justify-center items-center gap-2'>
                                            <Button className='rounded-full text-current bg-gray-trans'><img draggable={false} src="/Metamask-logo.png" className="w-6 mr-3" />Metamask</Button>
                                            <Button className='rounded-full text-current bg-gray-trans'><img draggable={false} src="/Walletconnect-logo.png" className="w-6 mr-3" />Walletconnect</Button>
                                        </div>
                                    </span>}
                            </div>
                        </div>
                    </section>
                </section> :
                <section className="flex flex-col justify-center items-center w-full h-full">
                    <h2>You Need to Login<br /><sub>to earn more features & getting brand yourself.</sub></h2>
                    <menu className='mt-8 mb-[72px]'>
                        <Button onClick={googleLogIn} className='rounded-full text-current bg-gray-trans mr-4 hidden md:flex'><img draggable={false} src="/Google-logo.png" className="w-6 mr-3" />Google Login</Button>
                        <Button onClick={googleLogIn} className='rounded-full text-current bg-gray-trans mr-4 flex md:hidden'><img draggable={false} src="/Google-logo.png" className="w-6 mr-3" />Google</Button>
                        <Button onClick={facebookLogIn} className='rounded-full text-current bg-gray-trans hidden md:flex'><img draggable={false} src="/Meta-logo.png" className="w-7 mr-3" />Meta Login</Button>
                        <Button onClick={facebookLogIn} className='rounded-full text-current bg-gray-trans flex md:hidden'><img draggable={false} src="/Meta-logo.png" className="w-7 mr-3" />Meta</Button>
                    </menu>
                </section>
            }
        </>
    )
}