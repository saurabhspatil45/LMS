const { Router } = require("express")
const bcrypt = require('bcrypt');
const { TrainerModel } = require('../Models/Trainer.model.js')
const TrainerController = Router();
const jwt = require("jsonwebtoken")
require("dotenv").config()



TrainerController.post("/signup", async (req, res) => {
    try {
        const { fname, lname, mobno, email, password, position, company, education, skills, avatar, created, roles, isAdmin } = req.body;

        // check if email already exists
        const existingUser = await TrainerModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // hash password with bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user object with hashed password
        const Trainer = new TrainerModel({
            fname,
            lname,
            mobno,
            email, password: hashedPassword,
            position,
            company,
            education,
            skills, avatar,
            created,
            roles,
            isAdmin
        });

        // save new user to database
        await Trainer.save();

        res.status(201).json({ message: 'Trainer created' });
        //res.json({ msg: "Signup successfull" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


TrainerController.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists with given email
        const trainer = await TrainerModel.findOne({ email });
        if (!trainer) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // compare provided password with hashed password
        const isPasswordCorrect = await bcrypt.compare(password, trainer.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // password is correct, create and send JWT token
        const token = jwt.sign({ userId: trainer._id }, process.env.JWT_SECRET);
        res.json({ token });
        // console.log(token)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})



TrainerController.get("/alltrainer", async (req, res) => {
    const trainer = await TrainerModel.find();
    try {
        res.status(200).send({
            trainer: trainer,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = {
    TrainerController
}