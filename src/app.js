const express = require('express');
const userRoute = require('./routes/user');
require('dotenv').config();
require('./db/conn');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})