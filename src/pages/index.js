import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
export default function index() {
	return (
		<div className="home">
			<div className="title-container">
				<span className="title">Manga</span>
				<span className="title">Mirror</span>
        <SearchBar/>
			</div>
		</div>
	);
}
