var fs=require('fs')
let data="A new file is written by fs.writeFile() method.By default, the file would be replaced if it exists."
fs.writeFile('newfile.txt',data,(err)=>{
    if (err)
        console.log(err)
    else{
        console.log("Data Saved!!!")
        console.log(fs.readFileSync("newfile.txt", "utf8"));
    }
})
