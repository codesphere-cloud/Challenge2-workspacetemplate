const express = require("express");
const app = express();

// Stelle sicher, dass das Verzeichnis "public" für statische Dateien verwendet wird
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/pages/index.html"); // Lade die HTML-Datei
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
