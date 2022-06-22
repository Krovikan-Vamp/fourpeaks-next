import { Header } from '../components/header.tsx'
import { Footer } from '../components/footer.tsx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return my header, footer and stuff here to persist

  return (<>

    <Header />
    <Component {...pageProps} />
    {/* <div hidden={} className="min-h-screen z-10" /> */}
    <Footer />
  </>)
}

export default MyApp
