import express from "express";
import offresRouter from "./routes/offres.routes.js";

const app = express ();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static("public"));
app.use("/offres", offresRouter);

app.get("/", (req, res) => {
    res.redirect("/offres");
}) ;


app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`Server runnigServer running on http://localhost:${PORT}`);
});