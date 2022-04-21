const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = 5000

app.use(cors())
app.use(express.json());


mongoose.connect('process.env.mongo', {useNewUrlParser: true, useUnifiedTopology: true});
const connected = mongoose.connection;
connected.once('open', () => {
	console.log("connection established!!!!")
});


app.listen(port, () => {
	console.log(`Server is running in port: ${port}`);
});
