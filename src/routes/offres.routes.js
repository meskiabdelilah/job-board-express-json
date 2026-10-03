import express, { json } from "express";
import fs from "node:fs";


const router = express.Router();
const data = fs.readFileSync("./data/offres.json", "utf-8");
const offres = JSON.parse(data);

router.get("/", (req, res) => {
    res.render("offres", {offres: offres});
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const offre = offres.find(offre => offre.id === id);
    
    if (!offre) {
        return res.status(404).render("404");
    }

    res.render("offre-detail", {offre: offre});
});




export default router;