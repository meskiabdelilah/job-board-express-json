import express from "express";
import fs from "node:fs";

const app = express ();
const PORT = 3000;

const data = fs.readFileSync("./data/offres.json", "utf-8");
const offres = JSON.parse(data);

// console.log(offres);


app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("offres", {
       offres: offres
    });
});

app.listen(PORT, () => {
    console.log(`Server runnigServer running on http://localhost:${PORT}`);
});