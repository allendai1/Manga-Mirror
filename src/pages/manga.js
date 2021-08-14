import React, { useState,useEffect } from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
import { Router, Link } from "@reach/router";
import TestComponent from "../components/TestComponent";

/**
 * Displays the manga id, title, and cover art
 */
const MangaInfoComponent = (props) => {
	const [mangaInfo, setMangaInfo] = useState({});
    const [imageUrl,setImageUrl] = useState(null);

    useEffect(async()=>{
        let promi =  fetch(`https://api.mangadex.org/manga/${props.manga_id}`, {
		method: "GET",
	});
    promi.then((res) => {
		console.log(`https://api.mangadex.org/manga/${props.manga_id}`);
		res.json().then(async (data) => {
			let info = {
				title: data.data.attributes.title.en,
				status: data.data.attributes.status,
				description: data.data.attributes.description.en,
			};
            let x =await fetch(`https://api.mangadex.org/cover?manga[]=${props.manga_id}&limit=1`)
			setMangaInfo(info);
            x.json().then(data=>{
                let filename = data.results[0].data.attributes.fileName
                setImageUrl(`https://uploads.mangadex.org/covers/${props.manga_id}/${filename}`)
                console.log(`https://uploads.mangadex.org/covers/${props.manga_id}/${filename}`)
            })
            console.log(data)
		});
	});

    },[])

	
	

	return (
		<div>
			<div>manga id : {props.manga_id}</div>
            <br/>
			<div>manga name : {mangaInfo.title}</div>
            <br/>
			<div>manga description: {mangaInfo.description}</div>
            <br/>
			<div>manga status: {mangaInfo.status}</div>
            <img src={imageUrl} width="400">

            </img>
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
