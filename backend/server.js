const express = require("express")
const cors = require("cors")
const { userController } = require("./Routes/User.routes.js")
const {TrainerController}=require("./Routes/Trainer.routes.js")
const { connection } = require("./Config/db.js")
// const {authentication} =require("./Middleware/authentication.js")
const app = express();
const PORT = 8080;


app.use(express.json())


app.get("/", (req, res) => {
    res.send("Home page")
})

app.use(cors())


app.use("/user", userController)
// app.use(authentication)
app.use("/trainer", TrainerController)


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