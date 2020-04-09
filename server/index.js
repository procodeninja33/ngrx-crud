const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/CrudExample', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (data) => console.log('2, Database connected successfully.'));



app.listen(4000, () => {
    console.log("1, Server running at port number 4000.");
    require("./routes")(app);
});