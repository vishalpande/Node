const mysql=require('mysql2');
const connection=mysql.createConnection({

host:'127.0.0.1',
user:'root',
password:'root',
database:'college',
port:3306

});


connection.connect((err)=>{
if(!err)
    {
        
        console.log("Database connected");
    }else
    {
        console.log(err);
        console.log("Database connection failed");
    }

});

module.exports=connection;