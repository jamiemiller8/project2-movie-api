const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.listen(3000, () => console.log("server running on 3000"));