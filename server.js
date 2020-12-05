const express = require('express');
require('dotenv').config();
const dbconnect = require('./config/connectDB');
const app = express();

//connect DB
dbconnect();
//creat route
//middleware rottingr
app.use(express.json());
app.use('/api/contact', require('./routes/contacts'));

const port = process.env.PORT;
app.listen(port, (err) =>
  err ? console.error(err) : console.log('server is running')
);
 