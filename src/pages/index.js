import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
export default function index() {
<<<<<<< HEAD
  function toggleDarkMode(){
    console.log("darkmode toggle")
=======
  function darkMode(){
>>>>>>> 897e9a1653fcb1e8968f1e7d241a6d152e3362e8
    document.documentElement.setAttribute("mode","dark");
  }
	return (
		<div className="home">
			<div className="title-container">
				<span className="title">Manga</span>
				<span className="title">Mirror</span>
        <SearchBar/>
<<<<<<< HEAD
        <button onClick={toggleDarkMode}>
          Dark mode toggle
        </button>
=======
        {/* <button onClick={darkMode}>Dark mode</button> */}
>>>>>>> 897e9a1653fcb1e8968f1e7d241a6d152e3362e8
			</div>
		</div>
	);
}
