const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");


const app = express();
dotenv.config();


mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("MongoDB connection is successsfull."))
     .catch((error)=>{
         console.log(error);
     });

app.use(express.json());
app.use("/api/auth", authRoute);



app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Backend server is running.`);
}) 