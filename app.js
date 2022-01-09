const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});
