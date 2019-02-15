const express = require("express");
const app = express();

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});
app.get("/skills", (req, res) => {
  res.sendFile(__dirname + "/views/skills.html");
});

app.listen(3000, () => {
  console.log("Port: 3000");
});

// index.html - links
// about.html - bio
// contact.html - contact preferences
// skills.html - list skills
