const express = require("express");
const userSchema = require("../model/user");
const mongoose = require("mongoose");

const userRoute = express.Router();

userRoute.post("/create-user", (req, res) => {
    userSchema.create(req.body, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Error creating user" });
        } else {
            res.status(200).json(data);
        }
    });
});

userRoute.post("/signin", (req, res) => {
    userSchema.findOne(req.body, (err, user) => {
        if (err || !user) {
            res.status(404).json({ error: "User not found. Please sign up." });
        } else {
            res.status(200).json(user);
        }
    });
});

userRoute.get("/", (req, res) => {
    userSchema.find((err, data) => {
        if (err) {
            res.status(500).json({ error: "Error fetching users" });
        } else {
            res.status(200).json(data);
        }
    });
});

module.exports = userRoute;