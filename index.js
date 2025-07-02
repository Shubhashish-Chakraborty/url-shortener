require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');

const { urlRouter } = require("./routes/urlRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const corsOptions = {
    origin: [
        'https://tsltest.vercel.app',
    ],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use("" , urlRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT , () => {console.log(`Backend Hosted on: http://localhost:${PORT}`)});
    console.log("Connection Successfully Established to the Database!!")
}
main();