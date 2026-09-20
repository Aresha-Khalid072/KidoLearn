const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Salam! KidoLearn ka backend chal raha hai" });
});

app.listen(5000, () => {
  console.log("Server port 5000 par chal raha hai");
});