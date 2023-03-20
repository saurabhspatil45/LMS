const mongoose = require("mongoose")

const TrainerSchema = mongoose.Schema({

    fname: { type: String, default: "" },
    lname: { type: String, default: "" },
    mobno: { type: String, default: "" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    position: { type: String, default: "" },
    company: { type: String, default: "" },
    education: { type: String, default: "" },
    skills: { type: String, default: "" },
    avatar: { type: String, default: "" },
    created: { type: Date, default: Date.now },
    roles: {
        type: String,
        enum: ['Trainer'],
        default: "Trainer",
        required: true,

    },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },

})

const TrainerModel = mongoose.model("trainer", TrainerSchema)

module.exports = {
    TrainerModel
}