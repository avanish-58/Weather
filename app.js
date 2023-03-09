const express=require("express");
const https=require("https");//https is a built in node module that we will be using to send get requests to other servers and here wwe are having it
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

const url="https://api.dictionaryapi.dev/api/v2/entries/en";
app.get('/',function(req,res){
   res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){

const url2=url+"/"+req.body.Animal_Name;
https.get(url2,function(response){
    console.log(response.statusCode);//response.statusCode->this will give us the code corresponding to the response that we have received
    response.on("data",function(data){//on function checking if response has data and if data is present, then we use the call back function to console.log the data
        //console.log(data);//when we print this data, we get hexa decimal values
        const weatherdata=JSON.parse(data);//this is converting the data into json format
       // res.write(weatherdata[0].meanings[0].definitions[0].definition);
        const ImageURL="https://img.freepik.com/free-vector/grizzly-bear-white-background_1308-38222.jpg?w=360";
        res.write(weatherdata[0].meanings[0].definitions[0].definition);
        
        res.send();
        console.log(url2);//(Square brackets in json mean that it is an array)
       // JSON.stringify() this is used to convert java script object  into json 
    });
});
});



app.listen(3000,function(){
console.log("chal rha");
});