require("dotenv").config();
const express = require("express")
const app = express()
const configDb = require("./app/config/db")
const router = require("./app/router/index")
const cors = require("cors")
const errorHandleMiddlware = require("./app/middleware/ErrorHandler")
configDb()

app.use(cors())
app.use(express.json())
router(app)


app.get("/",(req,res,next) => {
    try {
        return res.status(200).json({"Message":"Coding portal task api"})
    }
    catch(err) {
        next(err)
    }
})

app.use(errorHandleMiddlware)
app.listen(5000,()=> {
    console.log('Server running on 5000')
})