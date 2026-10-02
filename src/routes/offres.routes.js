import express, { json } from "express";
import fs from "node:fs";


const router = express.Router();
const data = fs.readFileSync("./data/offres.json", "utf-8");
const offres = JSON.parse(data);

router.get("/", (req, res) => {
    res.render("offres", {offres: offres});
})




export default router;