"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());

// const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const reviews = new mongoose.Schema({
//   namereview: String,
//   review: String,
// });
// const itemSchema = new mongoose.Schema({
//   name: String,
//   age: String,
//   reviews: [reviews],
// });

// const Item = mongoose.model("Items", itemSchema);

// //  ////// ///      //  routs

// app.post("/post", postHandler);

/// ///// handlers////////////

//  /  ///

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
