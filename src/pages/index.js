import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
export default function index() {
  function toggleDarkMode(){
    console.log("darkmode toggle")
    document.documentElement.setAttribute("mode","dark");
  }
	return (
		<div className="home">
			<div className="title-container">
				<span className="title">Manga</span>
				<span className="title">Mirror</span>
        <SearchBar/>
        <button onClick={toggleDarkMode}>
          Dark mode toggle
        </button>
			</div>
		</div>
	);
}
