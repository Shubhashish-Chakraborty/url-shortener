require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/' , (req , res) => {
    res.send("STARTED WITH")
})

app.listen(PORT , () => {console.log(`Backend Hosted on: http://localhost:${PORT}`)});