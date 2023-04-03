const express = require("express")
const cors = require("cors")
const { userController } = require("./Routes/User.routes.js")
const { TrainerController } = require("./Routes/Trainer.routes.js")
const { CourseController } = require("./Routes/Course.routes.js")
const { LectureController } = require("./Routes/Lecture.routes.js")
const { connection } = require("./Config/db.js")

const app = express();
const PORT = 8080;


app.use(express.json())


app.get("/", (req, res) => {
    res.send("Home page")
})

app.use(cors())


app.use("/user", userController)
app.use("/trainer", TrainerController)
app.use("/course", CourseController)
app.use("/lecture", LectureController)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to Mongo Atlas")
    }
    catch (err) {
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})