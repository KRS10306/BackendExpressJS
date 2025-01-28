//ExpressJS
//Yeh ek npm package hai 
//Framework hai -->  framework ek flow hai agar hame phele expressJS aquire krna hai toh voh krna hi pdega 
//Example--> Merko uthna hai fir brush krna hai fir nahana hai fir college jana hai toh mai konse paste s brush kr raha hu
//Shower s naha rha ya bucket s college gadi s ja raha ya metro s yeh frk nhi pdh raha flow yahi hona chaiye
//Wake Up --> Brush --> Bath --> College

//React is a library --> Library --> Mujhe 4 saman dediye ab use mai kese use karu voh meri marzi hai koi flow nhi

//ExpressJS -->Manages everything from receiving request and giving response
//Example--> Mai chata hu ki facebook mujhe ek images bheje toh express ka kam hai ki voh us image ki request kre
//Then voh response joh aaega voh tum batana
//Kaede s backend development Express s hi hoti hai
//Database s server ko connect krne ka kam bhi express ka hi hai

const express = require('express')
const app = express() //express() ek function bhi hai jisko ham chala dete hai aur use "app" ya kisi bhi naam k variable m store krdete hai

app.get('/', function (req, res) {//Here, / It is route => part except domain is router //By default every web app like
  res.send('Hello World')//youtube.com so it's route by default is youtube.com/
})//This function --> function(req, res){} is a requestHandler and it is a middleware

//Jese hi koi '/' p aega toh '/' vala joh function hai voh run hojaega ham chae toh kuch dusra bhi bana skte hai 
//Example
app.get('/profile', function(req, res){
    res.send("Aur bhai agae profile m HEHHE")
})


app.listen(3000)//Yeh .listen function k baad hi server run hoga 
//Koi bhi numberuse kr skte hai "3000" --> famous hai isliye use kr rahe hai

//Koi bhi cheez globally install krni hai npm i packagename -g

//Agar ham nodemon install nhi kre toh har chote change k liye hame server restart krna pdega yani
//Har chote change k bad hame terminal m "Ctr + C" kr k node script.js run krna pdega

//After that jus instead of node script.js write "npx nodemon script.js" OR "nodemon script.js"

//Middleware --> Joh bhi kam ham route pr jane s phele krwana chate hai 
//Jab server request accept krta hai waha s route k beech pochne tk agar ap us request ko beech m rokte ho aur kuch perform krte ho 
//Toh yeh element middleware hota hai

//Is wale code m jab server n request accept kari hogi toh voh direct '/' aur '/profile' p chalegaya hoga koi middleware nhi idhar


//TO download express globally in linux "sudo npm install -g express-generator"
