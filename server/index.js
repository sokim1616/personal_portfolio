const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public/build"))); // public 폴더

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("서버가 가동 중입니다."));
