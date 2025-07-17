const fs = require('fs');
const zlip = require('zlib');

const expo_zip_module = fs.createReadStream("./file1.txt")
    .pipe(zlip.createGzip())
    .pipe(fs.createWriteStream("file1.zip"))
    .addListener("finish",()=>{
        console.log("File Is Compressed");
    });