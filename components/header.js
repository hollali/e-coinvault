"use client";
import { useState } from "react";
import Image from "next/image";
import Search from "../assets/svg/search";
// import { ConnectButton } from "web3uikit";
// import { useContext } from "react";
// import { CoinMarketContext } from "../context/context";

const styles = {
	navLink: `text-white flex mx-[10px]`,
	badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
	navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
	nav: `flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[10px]`,
	header: `bg-[#17171A] text-white h-20 flex items-center w-full px-[20px]`,
	headerWrapper: `flex justify-between items-center h-full max-w-screen-xl mx-auto w-full`,
	menuButton: `md:hidden flex flex-col justify-between w-6 h-6 cursor-pointer`,
	menuBar: `h-1 w-full bg-white rounded`,
	mobileMenu: `absolute top-[80px] left-0 bg-[#17171A] w-full flex flex-col items-start px-4 py-6 gap-4 z-10`,
	inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
	input: `bg-transparent outline-none text-white w-70 ml-3`,
	cursorPointer: `mr-5 cursor-pointer`,
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.header}>
			<div className={styles.headerWrapper}>
				<Image
					alt="logo"
					src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
					width={150}
					height={150}
					className="cursor-pointer"
				/>

				{/* Desktop Navigation */}
				<nav className={`${styles.nav} hidden md:flex`}>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Cryptocurrencies</div>
						<div className={styles.badge} />
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Exchanges</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>NFT</div>
						<div className={styles.badge} />
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Cryptown</div>
						<div className={styles.badge} />
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Portfolio</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Watchlist</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Products</div>
						<div className={styles.badge} />
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Learn</div>
					</div>
				</nav>

				{/* Search Input */}
				<div className="hidden md:flex items-center">
					{/*<ConnectButton />*/}
					<div className={styles.inputContainer}>
						<Search />
						<input className={styles.input} placeholder="Search" />
					</div>
				</div>

				{/* Hamburger Menu Button */}
				<div className={styles.menuButton} onClick={toggleMenu}>
					<div className={styles.menuBar} />
					<div className={styles.menuBar} />
					<div className={styles.menuBar} />
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className={styles.mobileMenu}>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Cryptocurrencies</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Exchanges</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>NFT</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Cryptown</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Portfolio</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Watchlist</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Products</div>
					</div>
					<div className={styles.navItem}>
						<div className={styles.navLink}>Learn</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
