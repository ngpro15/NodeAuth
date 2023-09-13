const express = require('express');
require('dotenv').config();
require('./db/conn');
const PORT = process.env.PORT || 8000;

const userRoute = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})