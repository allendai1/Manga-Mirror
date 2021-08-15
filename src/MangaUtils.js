const https = require("https");
const fs = require("fs");
const axios = require("axios");

/**
 * Fetches manga with similar names to the provided input.
 * @param {string} str   the string used to search for similar manga titles
 * @return a dictionary of the top 5 manga search results and their ids
 */
function getMangaSearchResults(str) {
	return new Promise((resolve) => {
		var title = str.replace(/\s/g, "+");
		https.get(
			`https://api.mangadex.org/manga?limit=5&title=${title}`,
			(resp) => {
				let data = "";

				resp.on("data", (chunk) => {
					data += chunk;
				});

				resp.on("end", () => {
					let ob = JSON.parse(data);
					console.log(ob.results);
					let results = {};
					ob.results.forEach((entry) => {
						results[entry.data.attributes.title.en] = entry.data.id;
					});
					resolve(results);
				});
			}
		);
	});
}

/**
 * Fetches all of the English chapters of a manga.
 * @param {string} id   the id of a manga chapter
 * @return an array of chapter ids
 */
async function getChapters(id) {
	let offset = 0;

	let chapter_ids = [];

	let x = await getChaptersHelper(id, offset);

	while (x.length > 0) {
		chapter_ids.push.apply(chapter_ids, x);
		x = await getChaptersHelper(id, (offset += 100));
		//await new Promise((resolve) => setTimeout(resolve, 500));
	}

	return chapter_ids;
}

/**
 * Helper to retrieve all of the English chapters of a manga. API requests are limited to 100 chapters per request, 
 * so this method adjusts the chapter offset per request accordingly.
 * @param {string} id   the id of a manga chapter
 * @param {int} offset  the offset for which chapter to start the retrieval at
 * @return an array of chapter ids
 */
async function getChaptersHelper(id, offset) {
	return new Promise((resolve) => {
		https.get(
			`https://api.mangadex.org/chapter?manga=${id}&limit=100&translatedLanguage[]=en&offset=${offset}`,
			(resp) => {
				let chapter_ids = [];
				let data = "";

				resp.on("data", (chunk) => {
					data += chunk;
				});

				resp.on("end", () => {
					data = JSON.parse(data);
					data.results.forEach((result) => {
						chapter_ids.push(result.data.id);
					});
					resolve(chapter_ids);
				});
			}
		);
	});
}

/**
 * Fetches all manga pages of a chapter.
 * @param {string} id   the id of a manga chapter
 * @return an array of image urls
 */
function getMangaPanels(chapter_id) {
	return new Promise((resolve) => {
		https.get(`https://api.mangadex.org/chapter/${chapter_id}`, (resp) => {
			let data = "";
			let images = [];

			// A chunk of data has been received.
			resp.on("data", (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on("end", () => {
				let ob = JSON.parse(data);
				const data_id = ob.data.id; // same as chapter id
				const hash = ob.data.attributes.hash;
				// const data_data = ob.data.attributes.data // array of image names
				ob.data.attributes.data.forEach((image_name) => {
					images.push(
						`https://uploads.mangadex.org/data/${hash}/${image_name}`
					);
				});
				resolve(images);
			});
		});
	});
}

module.exports = {
	getMangaPanels,
	getChapters,
	getChaptersHelper,
	getMangaSearchResults,
};
