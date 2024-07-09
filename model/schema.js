const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    "name": { type: String },
    "description": { type: String },
    "ticketsAvailable": { type: Number },
    "eventDate": { type: Date }  // Add event date field
}, {
    collection: "events"
});

module.exports = mongoose.model("event-schema", eventSchema);
