"use client"
import "../styles/globals.css";
import { MoralisProvider } from "@moralisweb3/next";
import { GunProvider } from "../context/gunContext";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
	return (
		<MoralisProvider apiKey={process.env.NEXT_PUBLIC_MORALIS_API_KEY}>
			<GunProvider>
				<CoinMarketProvider>
					<Component {...pageProps} />
				</CoinMarketProvider>
			</GunProvider>
		</MoralisProvider>
	);
}

export default MyApp;
