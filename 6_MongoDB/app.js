const express = require('express');
const app = express()

const userModel = require("./usermodel") //Now the exported data of usermodel will be accepted by const userModel


app.get("/", (req,res)=>{
    res.send("Hey")
})

app.get('/create', async(req,res)=>{
    let createduser = await userModel.create({ //Since ".create" causes createuser to be an asynchronous function we are using async and await
        name: "Rishit",
        email: 'rishit@gmail.com',
        username:"RISHIT"
    })

    res.send(createduser)
