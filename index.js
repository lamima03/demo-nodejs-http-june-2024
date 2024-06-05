const express = require("express");
const path = require("path")

const app = express();


app.set('view engine', 'ejs');
app.use(express.json())
app.set('views', __dirname + '/views')


app.get("/", (req, res) => {
  res.render("index")
})

app.get("/contact", (req, res) => {
  res.render("contact")

})

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/*", (req, res)=> {
  res.render("404")
})

const port = 3001;



app.listen(port, function () {
  console.log("le server ecoute sur le port", port);
  console.info(`l'application est disponible sur l'addresse http://localhost:${port}`);
});
