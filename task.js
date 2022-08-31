const fs=require('fs');
const express=require('express');


let app=express();
app.get('/',function(req,res)
{  
    
    var name=req.query.name;
    var age=req.query.age;
    var city=req.query.city;
    var country=req.query.country;
    res.json
    ({
            name:name,
            age:age,
            city:city,
            country:country,

        
    });
    // fs.writeFileSync("text.txt",JSON.stringify(req.query));
    console.log("\n");
    fs.appendFileSync("text.txt","/n"+JSON.stringify(req.query));
    fs.readFileSync("text.txt",name.toString());

});


app.listen(8081,function(){
    console.log("server listening on port 8081");
});

fs.readFile("text.txt",function(err,data){
    if(err)
    return console.error(err);
    console.log(data.toString());
});