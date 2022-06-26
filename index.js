const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const apiRouter = require("./routes/apiRoutes");

const app = express();
app.use(cors());
app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
