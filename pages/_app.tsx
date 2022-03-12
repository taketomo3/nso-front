import type { AppProps } from 'next/app'
import Head from 'next/head'
import Container from '../components/layout/container'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>No Slacking Off</title>
      </Head>

      <Header />

      <div className='mt-16'>
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>

      <Footer />
    </>
  )
}

export default MyApp
