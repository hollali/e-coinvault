//import type { NextPage } from "next"
import Header from "../components/header";
import Trending from "../components/trending";
export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<div className="mt-10" />
			<Trending />
			<div className="mt-20" />
			{/*<CMC table />*/}
		</div>
	);
}
