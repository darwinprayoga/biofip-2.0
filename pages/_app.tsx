import '../styles/globals.css';

import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import * as gtag from '../components/config/gtag';
import Loader from '../components/Loader';
import { mobile } from '../components/plugins/sync';

import type { AppProps } from 'next/app'


function App({ Component, pageProps }: AppProps) {

  const os = mobile()
  const theme = getCookie('theme')
  const router = useRouter()

  useEffect(() => {

    //Copyright
    console.log('%cThis site 🦉', 'padding: 0.3rem 1.5rem; font-family: Gilroy; font-size: 54px; font-weight: 600; line-height: 1.4em; color: white; background: rgb(131,58,180); background: radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% ); border-radius: 12px;');
    console.log('%chas been  🪄coded   &  🚀designed', 'padding: 0.3rem 1.5rem; font-family: Gilroy; font-size: 16px; font-weight: 500; line-height: 1.4em; color: white; background: rgb(131,58,180); background: radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% ); border-radius: 12px;');
    console.log('%cby @darwinprayoga', 'padding: 0.3rem 1.5rem; font-family: Gilroy; font-size: 14px; line-height: 1.4em; color: white; background: rgb(131,58,180); background: radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% ); border-radius: 12px;');
    console.log('Biofip URL: https://biofip.com/darwinprayoga')
    console.log('Portfolio URL: https://prayoga.deno.dev')

    //disable contextmenu by OS
    if (os == false) {
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
      })
    }

    //Color Scheme / UI Theme
    if (theme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    //Google Analytics
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }

  }, [theme, router.events])



  return (
    <>

      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="robots" content="max-image-preview:large" />

        {/* <!-- Root --> */}
        <title>Biofip - Official Site</title>
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />



      <Loader>
        <Component {...pageProps} />
      </Loader>

    </>
  )
}

export default App