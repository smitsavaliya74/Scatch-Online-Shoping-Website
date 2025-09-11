const express = require('express');
const app = express();

app.use(express.json());

const cookiePaeser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

const db = require("./config/mongoose-connection");


app.use(express.urlencoded({ extended: true }));
app.use(cookiePaeser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine" , "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);