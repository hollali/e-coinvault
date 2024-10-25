"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";

const CMCtable = () => {
	const [coinData, setCoinData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	// Safely access context
	const context = useContext(CoinMarketContext);
	const getTopTenCoins = context?.getTopTenCoins;

	const fetchData = useCallback(async () => {
		if (!getTopTenCoins) {
			setError("Context not properly initialized");
			setLoading(false);
			return;
		}

		try {
			const apiResponse = await getTopTenCoins();
			const filteredResponse = apiResponse.filter(
				(coin) => coin.cmc_rank <= 10
			);
			setCoinData(filteredResponse);
			setError(null);
		} catch (e) {
			setError(e.message || "Failed to fetch coin data");
		} finally {
			setLoading(false);
		}
	}, [getTopTenCoins]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-red-500 text-white p-4 rounded-md mx-auto max-w-2xl mt-4">
				<div className="flex items-center gap-2">
					<span className="font-bold">Error:</span>
					<span>{error}</span>
				</div>
			</div>
		);
	}

	return (
		<div className="text-white font-bold">
			<div className="mx-auto max-w-screen-2xl">
				<table className="w-full">
					<CMCtableHeader />
						{coinData?.map((coin, index) => (
							<CMCtableRow
								key={coin.id || index}
								starNum={coin.cmc_rank}
								coinName={coin.name}
								coinSymbol={coin.symbol}
								coinIcon={coin.image || btc}
								showBuy={true}
								hRate={coin.quote.USD.percent_change_24h}
								dRate={coin.quote.USD.percent_change_7d}
								hRateIsIncrement={coin.quote.USD.percent_change_24h > 0}
								price={coin.quote.USD.price}
								marketCapValue={coin.quote.USD.market_cap}
								volumeCryptoValue={coin.quote.USD.volume_24h}
								volumeValue={coin.total_supply}
								circulatingSupply={coin.circulating_supply}
							/>
						))}
				</table>
			</div>
		</div>
	);
};

export default CMCtable;
