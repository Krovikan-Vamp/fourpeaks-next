import { Header } from '../components/header.tsx'
import { Footer } from '../components/footer.tsx'
import { useSpring, animated } from 'react-spring'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return my header, footer and stuff here to persist

  return (<div className="min-h-screen">
    <Header />
      <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp
