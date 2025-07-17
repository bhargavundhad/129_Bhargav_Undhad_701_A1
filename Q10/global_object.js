//set global variable
global.a = 'This is a global variable';
console.log(a);  

//console
console.log("This is a log message");
console.error("This is an error message");

//process
console.log("Process ID:", process.pid);
console.log("Node.js Version:", process.version);

//buffer
const buffer = Buffer.from('Hello Node.js');
console.log(buffer);

//dirname & filename
console.log(__dirname);  
console.log(__filename); 