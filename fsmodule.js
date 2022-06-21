var fs=require('fs');
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log("Async data is "+data.toString());
    }
});

var data = fs.readFileSync('input.txt');
console.log("Sync data is "+data.toString());
console.log("This is the end");