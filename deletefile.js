var fs=require('fs')
fs.unlink('newfile.txt',function(err){
    console.log("Successfully Deleted")
})
