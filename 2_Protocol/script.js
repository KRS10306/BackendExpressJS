//Protocol --> internet par kuch bhi karne k liye rules bnae gae hai unke dwara jinhone internet banaya hai
//Rules follow krna zaruri hai aur yeh rules follow ho isliye voh operating system ke softwares m pre installed hote hai

//http - protocol
//yahi protocol hai jisko follow kre bina na hi ap internet p kuch bhej skte ho na hi kuch manga skter ho

const http = require('http')

const server = http.createServer(function (req, res) {
    res.end("Hello World!")
})

server.listen(3000)

//npm --> node package manager --> Earlier it was called node package manager now I Don't know
//Now through npm we not just get only node packages but some other packages too

//Node JS core m joh aate hai voh module hote hai
//npm s packages download krte hai

//To install anything through npm --> npm i packagename
//Uninstall --> npm uninstall packagename

//To install a specific version of a package --> npm i packagename@version


//Dependencies
//Whenever we download a package node_modules folder is made and many folders inside this folder is made including express folder
//because express needs other folders for it to work or we can say it needs other dependencies for express to work



//devdependencies 
//Packages used only while development
//It is used while doing development not at deployment

//npm start --> start is something that is assigned inside operating system when we download node JS when we write it 
//It searches through whole OS and then returns the output