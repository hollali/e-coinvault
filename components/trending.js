"use client";
import React, { useState } from "react";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import ReactSwitch from "react-switch";
import Rate from "../components/cmc-table/rate";
import TrendingCard from "./trendingCard";

const styles = {
	trendingWrapper: `mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8`, // Added padding for smaller screens
	h1: `text-2xl sm:text-3xl text-white font-semibold`, // Adjusted font size
	flexCenter: `flex items-center flex-wrap gap-4 justify-center`, // Wrap for small screens
};

const trendingData = [
	{
		number: 1,
		symbol: "BTC",
		name: "Bitcoin",
		icon: btc,
		isIncrement: true,
		rate: "2.34%",
	},
	{
		number: 2,
		symbol: "USDT",
		name: "Tether",
		icon: usdt,
		isIncrement: false,
		rate: "9.32%",
	},
	{
		number: 3,
		symbol: "BTC",
		name: "Bitcoin",
		icon: btc,
		isIncrement: true,
		rate: "2.34%",
	},
];

const Trending = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="text-white">
			<div className={styles.trendingWrapper}>
				{/* Header Section */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
					<h1 className={styles.h1}>
						Today &apos;s Cryptocurrency Prices by Market Cap
					</h1>
					<div className="flex items-center gap-2">
						<p className="text-gray-400 text-sm sm:text-base">Highlights</p>
						<ReactSwitch
							checked={checked}
							onChange={() => setChecked(!checked)}
						/>
					</div>
				</div>

				{/* Market Cap Section */}
				<div className="mt-4 text-sm sm:text-base flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
					<p className="text-gray-400">
						The global crypto market cap is $1.74T &nbsp;
					</p>
					<span>
						<Rate isIncrement={true} rate="0.53%" />
					</span>
					<p>
						&nbsp; decrease over the last day.
						<span className="underline ml-1">Read More</span>
					</p>
				</div>

				{/* Trending Cards Section */}
				<div className={`${styles.flexCenter} mt-8`}>
					<TrendingCard
						title="Trending"
						icon={fire}
						trendingData={trendingData}
					/>
					<TrendingCard
						title="Biggest Gainers"
						icon={gainers}
						trendingData={trendingData}
					/>
					<TrendingCard
						title="Recently Added"
						icon={recent}
						trendingData={trendingData}
					/>
				</div>
			</div>
		</div>
	);
};

export default Trending;
