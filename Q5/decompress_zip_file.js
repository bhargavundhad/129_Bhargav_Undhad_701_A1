const fs = require('fs');
const zlip = require('zlib');

fs.createReadStream("./file1.zip")
    .pipe(zlip.createGunzip())
    .pipe(fs.createWriteStream("file2.txt"))
    .addListener("finish",()=>{
        console.log("Zip Is Decompressed");
    });