import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
export default function index() {
  function darkMode(){
    document.documentElement.setAttribute("mode","dark");
  }
	return (
		<div className="home">
			<div className="title-container">
				<span className="title">Manga</span>
				<span className="title">Mirror</span>
        <SearchBar/>
        {/* <button onClick={darkMode}>Dark mode</button> */}
			</div>
		</div>
	);
}
