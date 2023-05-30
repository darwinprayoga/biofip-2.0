import Document, { Head, Html, Main, NextScript } from 'next/document';

const now = new Date().toISOString()

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App: any) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component: any) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html lang='en'>
                <noscript>
                    //THIS SITE by @darwinprayoga
                </noscript>
                <Head>

                    {/* <!-- SEO --> */}
                    <meta name="author" content="Muhammad Darwin Prayoga" />
                    <meta name='description'
                        content='User link 3.0: the next generation of self-branding by using links based on Web 3.0' />
                    <meta name="keywords"
                        content="Biofip, Biography Fit Page, Owls Bio, NFT, Self branding, Web 3.0, Identity card, Metaverse, Trading card, biofip, Design trend, UI, UX, Wallet QR, Ethereum, Multiple APIs, Linktree, Pillar.io, LinkFire, lnk.to, Smart links"
                        itemProp="keywords" />

                    {/* <!-- Google+ / Schema.org --> */}
                    <meta itemProp="name" content="Biography Fit Page" />
                    <meta itemProp="headline" content="Biography Fit Page" />
                    <meta itemProp="description"
                        content="User link 3.0: the next generation of self-branding by using links based on Web 3.0" />
                    <meta itemProp="image" content="/preview.png" />
                    <meta itemProp="datePublished" content={now} />
                    <meta itemProp="dateModified" content={now} />
                    <meta itemProp="author" content="Muhammad Darwin Prayoga" />

                    {/* <!-- Basic --> */}
                    <meta name='application-name' content='Biofip' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Biofip' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='msapplication-TileColor' content='#000000' />
                    <meta name='theme-color' content='#000000' />

                    {/* <!-- ICON --> */}
                    <meta name="msapplication-TileImage" content="/icon-270x270.png" />
                    <link rel='apple-touch-icon' href='/icon-180x180.png' />
                    <link href='/maskable-32.png' rel='icon' sizes='32x32' type='image/png' />
                    <link href='/maskable-16.png' rel='icon' sizes='16x16' type='image/png' />

                    {/* <!-- Preview URL --> */}
                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://biofip.com' />
                    <meta name='twitter:title' content='Biofip - Official Site' />
                    <meta name='twitter:description'
                        content='User link 3.0: the next generation of self-branding by using links based on Web 3.0' />
                    <meta name='twitter:image' content='/preview.png' />
                    <meta name='twitter:creator' content='@mdarwinp' />
                    <meta property='og:type' content='profile' />
                    <meta property='og:title' content='Biofip - Official Site' />
                    <meta property='og:description'
                        content='User link 3.0: the next generation of self-branding by using links based on Web 3.0' />
                    <meta property='og:site_name' content='Biofip' />
                    <meta property='og:url' content='https://biofip.com' />
                    <meta property='og:image' content='/preview.png' />
                    <meta property='og:image:url' content='/preview.png' />
                    <meta property="og:image:secure_url" content='/preview.png' />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument