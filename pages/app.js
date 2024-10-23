import '../styles/globals.css'
import { MoralisProvider } from '@moralisweb3/next'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      apiKey={process.env.NEXT_PUBLIC_MORALIS_API_KEY}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp