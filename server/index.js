const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiRouter = require("./api/routes/keyRoutes");

const app = express();
app.use(cors());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
