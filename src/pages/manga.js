import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
import { Router, Link } from "@reach/router";
import TestComponent from "../components/TestComponent";

/**
 * Displays the manga id, title, and cover art
 */
const MangaInfoComponent = (props) => {
	const [mangaInfo, setMangaInfo] = useState({});
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(async () => {
		let promi = fetch(`https://api.mangadex.org/manga/${props.manga_id}`, {
			method: "GET",
		});
		promi.then((res) => {
			console.log(`https://api.mangadex.org/manga/${props.manga_id}`);
			res.json().then(async (data) => {
				let title = "";
				if (data.data.attributes.title.jp != undefined) {
					title = data.data.attributes.title.jp;
				} else {
					title = data.data.attributes.title.en;
				}

				let author = await fetch(
					`https://api.mangadex.org/author/${data.relationships[0].id}`
				);
				author = await author.json();

				let status = data.data.attributes.status;

				let info = {
					title: title,
					author: author.data.attributes.name,
					status: status.charAt(0).toUpperCase() + status.substring(1),
				};
				setMangaInfo(info);

				let x = await fetch(
					`https://api.mangadex.org/cover?manga[]=${props.manga_id}&limit=1`
				);
				x.json().then((data) => {
					let filename = data.results[0].data.attributes.fileName;
					setImageUrl(
						`https://uploads.mangadex.org/covers/${props.manga_id}/${filename}`
					);
				});
				console.log(data);
			});
		});
	}, []);

	return (
		<div className = "manga">
			<div className = "manga_info_container">
				<img src={imageUrl} width="250"></img>
				<div className="manga_title">
					{mangaInfo.title}
					<div className = "additional_info"> Author: {mangaInfo.author} </div>
					<div className = "additional_info"> Status: {mangaInfo.status} </div>
				</div>
			</div>
			<div className = "stack_container">
				<div className = "chapters">
					<div className= "manga_title" > Chapters </div>
				</div>
				<div className = "groups">
					<div className = "manga_title"> Groups </div>
				</div>
			</div>
		</div>
	);
};

/**
 *
 * @returns page with information on manga series
 */
export default function manga() {
	return (
		<Router>
			<MangaInfoComponent path="/manga/:manga_id" />
		</Router>
	);
}
