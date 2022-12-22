const express = require("express")
const ejs = require("ejs");
const ejsMate = require('ejs-mate');


const app = express();
app.use( express.static( "public" ) );
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("details/home");

})
app.get("/projects", (req, res) => {
    res.render("details/projects");

})
app.get("/about", (req, res) => {
    res.render("details/about");

})
app.get("/contact", (req, res) => {
    res.render("details/contact");

})


app.listen(8080, () => {
    console.log(`serving on port ${8080}`);
})