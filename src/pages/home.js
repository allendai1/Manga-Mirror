import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
import { Router } from "@reach/router";
import TestComponent from "../components/TestComponent";


export default function Home() {

	return (
		<div className="home">
			<div className="title-container">
				<span className="title">Manga</span>
				<span className="title">Mirror</span>
				<SearchBar />
				{/* <button onClick={darkMode}>Dark mode</button> */}
			</div>
		</div>
	);
}