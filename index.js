require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");

const { urlRouter } = require("./routes/urlRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("" , urlRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT , () => {console.log(`Backend Hosted on: http://localhost:${PORT}`)});
    console.log("Connection Successfully Established to the Database!!")
}
main();