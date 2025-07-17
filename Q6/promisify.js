const util = require("util");
const fs = require("fs");

const  unlink_file = util.promisify(fs.unlink);

async function UnlinkFile()
{
    try
    {
        await unlink_file("file2.txt");
        console.log("File Deleted Suceesfully");

    }catch(err)
    {
        console.error("Error :" + err);
    }
}

UnlinkFile();

