const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const userSchema = require('./model/user');


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"Public")))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/read", async(req,res)=>{
    let users = await userSchema.find()
    res.render("read",{users}) //Again since itś users:users
})

app.post("/create" , async (req,res)=>{
    let {name,email,image} = req.body //Done this to NOT write req.body.name ,email,etc,, again and again
    let createdUser = await userSchema.create({
        name,//If name: name -->Can directly write only "name" valid for every value 
        email,
        image
    })
    // res.send(createdUser) //_id
    res.redirect("/read")
})

app.get("/edit/:userid", async (req, res) => {
    let user = await userSchema.findOne({_id: req.params.userid})
    res.render("edit",{user})
});

app.post("/update/:userid", async (req, res) => {
    let {name, email, image}= req.body
    let user = await userSchema.findOneAndUpdate({_id: req.params.userid},{
        name,
        email,
        image
    },{new:true})
    res.redirect("/read")
});

app.get("/delete/:name", async(req,res)=>{
    let deletedName = await userSchema.findOneAndDelete({name: req.params.name})
    res.redirect("/read")

})

app.listen(8000, ()=>{
    console.log("Open localhost:8000")
})
