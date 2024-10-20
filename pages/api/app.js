import { useState, useEffect } from "react";
import Moralis from "moralis";

export default function Home() {
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState("");
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const initMoralis = async () => {
			await Moralis.start({
				apiKey: "YOUR_MORALIS_API_KEY",
			});
		};
		initMoralis();
	}, []);

	const connectWallet = async () => {
		try {
			await Moralis.enableWeb3();
			const accounts = await Moralis.account.get();
			setAddress(accounts[0]);
			setIsConnected(true);
			fetchBalance(accounts[0]);
		} catch (error) {
			console.error("Failed to connect wallet:", error);
		}
	};

	const fetchBalance = async (address) => {
		try {
			const balance = await Moralis.EvmApi.balance.getNativeBalance({
				address: address,
				chain: "0x1", // Ethereum mainnet
			});
			setBalance(balance.result.balance.ether);
		} catch (error) {
			console.error("Failed to fetch balance:", error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Crypto Currency Web App</h1>
			{!isConnected ? (
				<button
					onClick={connectWallet}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Connect Wallet
				</button>
			) : (
				<div>
					<p>Connected Address: {address}</p>
					<p>Balance: {balance} ETH</p>
				</div>
			)}
		</div>
	);
}
