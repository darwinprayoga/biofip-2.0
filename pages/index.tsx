import { usePWAInstall } from 'react-use-pwa-install';

import Button from '../components/Button';
import Card from '../components/Card';
import Divider from '../components/Divider';
import { Download } from '../components/Icons';
import Input from '../components/Input';
import { ColorScheme } from '../components/Switcher';

import type { NextPage } from 'next'
const Home: NextPage = () => {

  const install = usePWAInstall()

  return (
    <main>

      <Card className='p-4'>

        <h1>Darwin Prayoga</h1>
        <h2>Darwin Prayoga</h2>
        <h3>Darwin Prayoga</h3>
        <menu>
          <p>test test ya</p>
          <sub>test test ya</sub>
        </menu>
        <li>test test ya</li>
        <Divider />
        <span>
          <a>test test ya</a>
          <b>test test ya</b>
        </span>

        <ColorScheme />

        <Input type='text' name='username' placeholder='Username' />

        <Button className='w-full' variant='filled'>Google Login</Button>
        {install && <Button onClick={install} className='text-gray-700 w-full'>Install<Download className='ml-1 w-5' /></Button>}

      </Card>

    </main>
  )
}

export default Home
