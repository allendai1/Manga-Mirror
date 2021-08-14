import React from "react";
import { Router } from "@reach/router";
import SearchBar from "../components/SearchBar";
export default function index() {
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
