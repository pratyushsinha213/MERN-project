const express = require("express");
const eventRoute = require("./controller/event-route");
const userRoute = require("./controller/user-route");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose.set('strictQuery', true);

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors());

mongoose.connect("mongodb+srv://projectCRUD:12345@cluster0.zurbiol.mongodb.net/schooldb");
var db = mongoose.connection;

db.on("open", () => console.log("Connected"));
db.on("error", () => console.log("Not Connected"));

app.use("/eventRoute", eventRoute);
app.use('/userRoute', userRoute)

app.listen(4000, () => {
    console.log("Server is running in the port 4000")
})