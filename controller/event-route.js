const express = require("express");
const eventSchema = require("../model/schema");
const mongoose = require("mongoose");

const eventRoute = express.Router();

// 4 operations that can be performed on the database
eventRoute.post("/create-event",(req,res)=>{
    eventSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

eventRoute.get("/",(req,res)=>{
    eventSchema.find((err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

eventRoute.route("/update-event/:id")
.get((req,res)=>{
    eventSchema.find(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
.put((req,res)=>{
    eventSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

eventRoute.delete("/delete-event/:id",(req,res)=>{
    eventSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        }
    )
})

// event.Route.get("/update-event/:id")

module.exports = eventRoute;