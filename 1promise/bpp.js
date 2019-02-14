const fs = require('fs')
const path=require("path")


// fs.readFile(path.join(__dirname,"./4.txt"),"utf-8",(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

// function geidata(fpath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path.join(__dirname,fpath),"utf-8",(err,data)=>{
//            if(err) return reject(err)
//            resolve(data)
//         })
//     })
// }

// geidata("44.txt").then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

function geidata(fpath){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,fpath),"utf-8",(err,data)=>{
           if(err) return reject(err)
           resolve(data)
        })
    })
}

geidata("4.txt").then(data=>{
    console.log(data)
    return geidata("8.txt")
})
.then(data=>{
    console.log(data)
    return geidata("6.txt")
})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})