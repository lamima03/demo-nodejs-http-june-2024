const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./index.html", "utf-8"));
  } else if (req.url === "/contact") {
    // retourner la page contact
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./contact.html", "utf-8"));
  } else if (req.url === "/about") {
    // retourner la page about
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./about.html", "utf-8"));
  } else {
    // retourner la page 404
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./404.html", "utf-8"));
  }
});

const port = 3000;

server.listen(port, function () {
  console.log("Le serveur est lancé");
});
