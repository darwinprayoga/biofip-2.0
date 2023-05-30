import { getCookie, setCookie } from 'cookies-next';
import { onAuthStateChanged } from 'firebase/auth';
import { NextPage } from 'next';
import { useEffect, useReducer, useState } from 'react';

import Bar from '../components/Bar';
import Card from '../components/Card';
import { auth } from '../components/config/firebase';
import { Biofip, Close, Gear, GearOutline, Layers, LayersOutline, Planet, PlanetOutline, Qr } from '../components/Icons';
import { INITIAL_STATE, post } from '../components/plugins/post';
import { darkTheme } from '../components/plugins/sync';
import Profile from '../components/routes/Profile';
import Settings from '../components/routes/Settings';
import World from '../components/routes/World';
import Switcher, { Tab, theme } from '../components/Switcher';
import Installer from './install';

const Home: NextPage = () => {

  //install PWA
  const [getApp, setGetApp] = useState(false)

  async function pwaCooldown() {
    setCookie('PWA has been dismissed', true, { maxAge: 60 * 60 * 24 * 2 })
    setGetApp(false)
  }

  //user fetch
  const [user, setUser] = useState<any | null>(false)

  useEffect(() => {

    if (getCookie('PWA has been dismissed') == true) {
      setGetApp(false)
    } else {
      setTimeout(() => {
        setGetApp(true)
      }, 10000);
    }

    onAuthStateChanged(auth, user => {
      if (user == null) {
        setUser(false)
      } else {
        setUser(user)
      }
    })

  }, [getCookie, setGetApp, setUser])

  //Data Fetch
  const [state, dispatch] = useReducer(post, INITIAL_STATE)
  const [index, setIndex] = useState(0)
  const [extend, setExtend] = useState(false)

  async function get() {

    dispatch({ type: 'FETCH_START' })

    await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        return res.json()
      })
      .catch(e => dispatch({ type: 'FETCH_ERROR', payload: e }))
      .then(x => dispatch({ type: 'FETCH_SUCCESS', payload: x }))

  }

  useEffect(() => {
    console.log(state)
  }, [state])



  //Color Scheme
  const [colorScheme, setColorScheme] = useState(darkTheme)
  const toggle = () => theme(colorScheme, setColorScheme)

  function ColorScheme() {
    return <Switcher default={colorScheme} onChange={toggle} />
  }

  function editMobile() {
    if (index == 1) {
      setIndex(2)
    } else if (index == 2) {
      setIndex(1)
    }
  }

  function toExtend() {
    if (user) {
      setExtend(!extend)
    } else {
      alert('To get these features, you need to login!✌️😁')
      setIndex(1)
    }
  }



  return (
    <>

      {getApp && <Installer onDismiss={pwaCooldown} />}



      <div className="mobile">
        {index == 0 && <World />}
        {index > 0 &&
          <>

            <Card className='rounded-t-none pb-2 mb-4'>
              <div className='py-4 px-2'>
                <Tab on="Profile" off="Settings" onChange={editMobile} default={index == 2 ? true : false} />
              </div>
              {index == 2 &&
                <menu className='justify-between px-6 mb-4'>
                  <h3>Dark Mode</h3>
                  <ColorScheme />
                </menu>}
              <Bar />
            </Card>

            {index == 1 && <Profile user={user} />}
            {index == 2 && <Settings />}

          </>}



        <nav className="navbar">
          {extend ?
            <>
              <section className="col-span-1 w-full h-full flex justify-center items-center">
                <span className="items-center"><Qr className="w-7 mb-2" /><sub>Qr Code</sub></span>
              </section>
              <section className="col-span-1 w-full h-full flex justify-center items-center">
                <span className="items-center"><Biofip className="w-7 mb-2" /><sub>Biofip</sub></span>
              </section>
            </> :
            <>
              <section onClick={() => setIndex(1)} className="col-span-1 w-full h-full flex justify-center items-center">
                {index > 0 && <span className="items-center"><Layers className="w-8 mb-2 text-blue-600" /><sub>Edit</sub></span>}
                {index < 1 && <span className="items-center"><LayersOutline className="w-7 mb-2" /><sub>Edit</sub></span>}
              </section>
              <section onClick={() => setIndex(0)} className="col-span-1 w-full h-full flex justify-center items-center">
                {index == 0 && <span className="items-center"><Planet className="w-8 mb-2 text-blue-600" /><sub>World</sub></span>}
                {index != 0 && <span className="items-center"><PlanetOutline className="w-7 mb-2" /><sub>World</sub></span>}
              </section>
            </>}
          <section onClick={toExtend} className="col-span-1 w-full h-full flex justify-center items-center">
            {extend ?
              <span className="items-center"><Close className="w-7 mb-2 text-red-600" /><sub>Close</sub></span> :
              <span className="items-center"><Biofip className="w-7 mb-2" /><sub>Biofip</sub></span>}
          </section>
        </nav>
      </div>



      <div className="desktop">
        <nav className="leftbar">
          <section className="flex pt-4 justify-center items-center cursor-none hover:scale-105 hover:-translate-y-0.5">
            <Biofip className="text-blue-600 w-12 mr-2" />
            <h2 className="font-bold tracking-wider">biofip</h2>
          </section>

          <section className="flex flex-col h-full mt-12">
            <div className="flex items-center rounded-3xl rounded-l-none bg-blue-600/10 py-2 mb-4">
              {index == 0 && <Planet className="text-blue-600 w-full mx-4" />}
              {index == 1 && <Layers className="text-blue-600 w-full mx-4" />}
              {index == 2 && <Gear className="text-blue-600 w-full mx-4" />}
            </div>
            {index != 0 && <div onClick={() => setIndex(0)} className="flex pointer items-center rounded-3xl rounded-l-none hover:bg-gray-trans py-2 mb-4">
              <PlanetOutline className="w-8 mx-4" />
              <p>World of Bio</p>
            </div>}
            {index != 1 && <div onClick={() => setIndex(1)} className="flex pointer items-center rounded-3xl rounded-l-none hover:bg-gray-trans py-2 mb-4">
              <LayersOutline className="w-8 mx-4" />
              <p>Edit Profile</p>
            </div>}
            {index != 2 && <div onClick={() => setIndex(2)} className="flex pointer items-center rounded-3xl rounded-l-none hover:bg-gray-trans py-2">
              <GearOutline className="w-8 mx-4" />
              <p>Settings</p>
            </div>}
          </section>
        </nav>



        <div className="midbar">
          <Card className="p-4 rounded-t-none mb-4 mx-2">
            <menu className="justify-between">
              <h3>{index == 0 && 'World of Bio' || index == 1 && 'Edit Profile' || index == 2 && 'Settings'}</h3>
              <ColorScheme />
            </menu>
            <Bar />
          </Card>

          <section className='px-4 h-full'>
            {index == 0 && <World />}
            {index == 1 && <Profile user={user} />}
            {index == 2 && <Settings />}
          </section>
        </div>



        <div className="rightbar">
          <Card className='pointer p-4 hover:scale-[1.01] active:translate-y-0.5 active:scale-[0.99]'>
            <section className="flex pb-4 justify-center items-center">
              <Biofip className="text-blue-600 w-7 mr-2" />
              <b className="font-bold tracking-wider">biofip</b>
            </section>
            <img draggable={false} className='w-full rounded-2xl bg-blue-600' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
            <h3 className='mx-4 mt-2 mb-2'>pikachu-world-cap</h3>
            <p className='mx-4 mt-2 mb-2'>@darwinprayoga</p>
            <div className="flex pointer justify-end items-center rounded-3xl hover:bg-gray-trans py-2 mt-4">
              <Qr className="w-8 mx-4" />
            </div>
          </Card>

        </div>
      </div>

    </>
  )
}

export default Home