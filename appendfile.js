var fs=require('fs')
let data="//This content will be appended in the mentioned file path"
fs.appendFile('calculation.js',data,(err)=>{
    if(err)
        console.log(err)
    else{
        console.log("Mission Success")
        console.log(fs.readFileSync("calculation.js","utf8"));
    }
})
