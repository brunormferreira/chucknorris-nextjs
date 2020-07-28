import Navbar from '../components/navbar'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
)

export default MyApp
