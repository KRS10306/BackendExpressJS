const express = require('express')
const app = express() //express() ek function bhi hai jisko ham chala dete hai aur use "app" ya kisi bhi naam k variable m store krdete hai

app.use(express.json())//Yeh JSON Data read kr pae isliye

app.use(express.urlencoded({ extended: true })) //Postman m ek cheez hai voh read kr pae -->

app.get('/', function (req, res) {//Here, / It is route => part except domain is router //By default every web app like
  res.send('Hello World')//youtube.com so it's route by default is youtube.com/
})//This function --> function(req, res){} is a requestHandler and it is a middleware

//Jese hi koi '/' p aega toh '/' vala joh function hai voh run hojaega ham chae toh kuch dusra bhi bana skte hai 
//Example
app.get('/profile', function(req, res){
    res.send("Aur bhai agae profile m HEHHE")
})

