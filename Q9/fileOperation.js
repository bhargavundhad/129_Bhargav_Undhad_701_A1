var fs = require('fs');

/* Asynchronous Functions:-
non-blocking (not wait for functions to complete their task next instructions execute)*/
fs.readFile("file3.txt",'utf-8',function(err,data)
{
    if(err)
    {
        console.log("Error Ocuurs during reading files");
        return;
    }
    else
    {
        console.log("File content ",data);
    }
});

fs.writeFile("file2.txt","Hello Bhargav",function(err,data)
{
    if(err)
    {
        console.log("Error Ocuurs during writing files");
        return;
    }
    else
    {
        console.log("File Writed ",data);
    }
});

fs.appendFile("file1.txt","Hello Somthing",function(err,data)
{
    if(err)
    {
        console.log("Error Ocuurs during Appending files");
        return;
    }
    else
    {
        console.log("File Append ",data);
    }
});

fs.unlink("file2.txt",function(err)
{
    if(err)
    {
        console.log("Error Ocuurs during deleting files");
        return;
    }
    else
    {
        console.log("File Deleted ");
    }
});

fs.rename("file1.txt","file3.txt",function(err)
{
    if(err)
    {
        console.log("Error Ocuurs during Renaming files");
        return;
    }
    else
    {
        console.log("File renamed");
    }
});
