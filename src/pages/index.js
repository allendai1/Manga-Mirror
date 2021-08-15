import React from "react";
import SearchBar from "../components/SearchBar";

export default function index() {
	function get_data() {
		console.log("getting data?");
		fetch("http://localhost:3000/manga/2f4e5f5b-d930-4266-8c8a-c4cf9a81e51f", {
			method: "GET",
		}).then((res) => {
			console.log(res);
		});
	}

	return (
		<div className="home">
			<div className="title-container">
				<div className="manga-mirror-title">
					<span className="title">Manga</span>
					<span className="title">Mirror</span>
				</div>

				<SearchBar />
				{/* <button onClick={get_data}>Fetch</button> */}
				{/* <button onClick={darkMode}>Dark mode</button> */}
			</div>
		</div>
	);
}
