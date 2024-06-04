// const http = require("http");
// const fs = require("fs")
const path = require("path")


const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"))
})

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("./contact.html"))
})

// const server = http.createServer(function (req, res) {
//   if (req.url === "/") {
//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.end(fs.readFileSync("./index.html", "utf-8"))
//   } else if (req.url === "/contact") {
//     // retourner la page contact
//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.end(fs.readFileSync("./contact.html", "utf-8"))
//   } else if(req.url === "/about"){
//     // retourner la page about
//   } else {
//         // retourner la page 404
//   }
// });

const port = 3001;

// server.listen(port, function(){
//     console.log("Le serveur est lancé")
// })

app.listen(port, function () {
  console.log("Le serveur est lancé");
});
