const express=require('express');
const app=express();
const routes=require("./routes/routes");
const bodyparser=require("body-parser");
const cors = require('cors');


app.use(cors()) 



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use('/',routes);


app.listen(3001,function(){
    console.log("Server started on port 3001");
})