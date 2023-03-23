const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({

    name: { type: String,required:true },
    img: { type: String,required:true },
    des: { type: String,required:true },
    owner: { type: String, required: true },
    created: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false },

})

const CourseModel = mongoose.model("course", CourseSchema)

module.exports = {
    CourseModel
}