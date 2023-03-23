const { Router } = require("express")
const {CourseModel} = require("../Models/Course.model.js")
require("dotenv").config()



const CourseController = Router();


CourseController.post("/create", async (req, res) => {
    try {
        const { name, img, des, owner, created, isActive } = req.body;

        const Course = new CourseModel({
            name,
            img,
            des,
            owner,
            created,
            isActive
        });

        await Course.save();

        res.status(201).json({ message: 'Course created' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



CourseController.get("/allcourse", async (req, res) => {
    const courses = await CourseModel.find();
    try {
        res.status(200).send({
            courses: courses,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});








module.exports = {
    CourseController
}