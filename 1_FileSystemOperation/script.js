//To create package.json OR node js in the file you are working n=in write npm init -y
//Some additional thing --> npm init

//npm init -->created --> package.json

//when you install NodeJS files in "https://nodejs.org/docs/latest/api/" are installed too

//Bear minimum to learn are "File systems", "HTTPS", "HTTP"

//To learn more just visit "https://nodejs.org/docs/latest/api/" and choose whatever you want to learn

const fs = require('node:fs'); //Now I can use whatever is inside fs //-->Can also work without "node:"
//Whatever 'fs' can do in node your script.js file could also do it

//Required to study in callbacks
// writefile
// appendfile
// copyfile
// rename 
// unlink

//` this is backtick

// fs.writeFile("Hey.txt","Keso ho bhaiyo", (err)=>{
//     if (err) {
//         console.error(err)
//     } else {
//         console.log("done")
//     }
// })

//To run the file write node <name of the file> //--> Here  --> node script.js

// fs.appendFile("Hey.txt"," Bhai mene append krdiya is text ko hey.txt file m", (err)=>{
//     if (err) {
//         console.error(err)
//     } else {
//         console.log("done")
//     }
// })

//We can rename the file 

// fs.rename("Hey.txt","Hello.txt",(err)=>{
//     if (err) {
//         console.error(err)
//     } else {
//         console.log("Renaming Done");
//     }
// })

//Copy a file

// fs.copyFile("Hello.txt","./copy/copy.txt", function (err) {
//     if (err) {
//         console.error(err) //err.message --> will print the error message to the point
//     } else {
//         console.log("Done")
//     }
// })

//unlink --> Delete

// fs.unlink("Hello.txt", (err)=>{
//     if (err) {
//         console.error(err.message)
//     } else {
//         console.log("Deleted Successfully")
//     }
// })

//To delete a directory

fs.rm("./copy", {recursive: true}, function (err) {//Here "{recursive: true}" is an object
    if (err) {
        console.error(err)
    } else {
        console.log("File removed")
    }
})