import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { GunProvider } from "../context/gunContext";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
	const moralisApiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

	return (
		<MoralisProvider apiKey={moralisApiKey}>
			<GunProvider>
				<CoinMarketProvider>
					<Component {...pageProps} />
				</CoinMarketProvider>
			</GunProvider>
		</MoralisProvider>
	);
}

export default MyApp;
