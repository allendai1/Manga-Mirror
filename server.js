const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

const {
	getMangaPanels,
	getChapters,
	getChaptersHelper,
	getMangaSearchResults,
} = require("./src/MangaUtils");

// API endpoint: sends the manga metadata
app.get("/manga/:id",cors({origin: ['http://localhost:8000/']}), (req, res) => {
	const id = req.params.id;

    getChapters(id).then(chapter=>{
        console.log(chapter)
        res.send(chapter)
    })
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
