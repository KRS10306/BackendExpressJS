// const express = require('express')
// const app = express()

// app.use(function (req, res, next) {//hamesha 3 cheeze hongi rquest,response,next
//     console.log("MiddleWare Chala")
//     next(); //Jese hi kam hojae likhdo next() --> iska kam hai request ko aage forward krna voh kam next() kr raha hai
// });//Koi bhi route shuru hone s phele .use chalega => yeh hai middleware
// //Phele yeh chalega fir URL chalega 
// //phele yeh chalega phir "/" kuch bhi ho ya "/" kudh ho voh chalega

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require('express');
const app = express();

// Middleware
app.use(function (req, res, next) {
    console.log("Middleware Running");
    next(); // This passes the request to the next middleware or route handler
});

app.use(function (req, res, next) {
    console.log("Middleware Running 2nd time");
    next(); // This passes the request to the next middleware or route handler
});

// This will run for any route, before the specific route handler
app.get('/', function (req, res) {
  res.send('Hello World');
});


app.get('/profile', function (req, res, next) {
    return next(new Error("Not Implemented")) //In console
  });

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')//on page
  })


// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});


//Phele URL chalega voh backend p jaega aur fir backend page show karega
//URL --> Backend --> Page
