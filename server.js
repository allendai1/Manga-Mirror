const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const request = require("request");
const axios = require("axios");
const fs = require("fs");
app.use(cors());

const {
	getMangaPanels,
	getChapters,
	getMangaSearchResults,
	getFileName,
} = require("./src/MangaUtils");

// API endpoint: sends the manga metadata
app.get(
	"/manga/:id",
	cors({ origin: ["http://localhost:8000/"] }),
	async (req, res) => {
		let data = {};
		const id = req.params.id;
		getChapters(id).then((chapter) => {
			data["chapters"] = chapter;
			axios.get(`https://api.mangadex.org/manga/${id}`).then((ret) => {
				data = {
					title: ret.data.data.attributes.title.en,
					description: ret.data.data.attributes.description.en,
					...data,
				};
				axios
					.get(
						`https://api.mangadex.org/author/${ret.data.relationships[0].id}`
					)
					.then((x) => {
						data["author"] = x.data.data.attributes.name;
						res.send(data);
					});
			});
		});

		// create a file send it to client
		// let filename =await getFileName(id);
		// axios({
		// 	method:'get',
		// 	url: filename,
		// 	responseType: 'arraybuffer'
		// }).then(result=>{
		// 	fs.writeFile("file.jpg",result.data,()=>{
		// 	})
		// })
		// res.sendFile(__dirname + '/file.jpg')
	}
);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
