const express=require("express");
const router=express.Router();
const connect=require("../Db/db");
// const connect=require("../Db/mongo");



//select query
router.get("/employee",function(req,resp){

    connect.query("select * from employee", function(err,data){
        if(err){
            resp.send("error");
            }
            else{
                resp.send(data)
            }
            })
})


router.get("/employee/:pid",function(req,resp){
    connect.query("SELECT * FROM employee WHERE rollNo=?",[req.params.pid],function(err,data){
        if(err){
            resp.status(500).send("error occured");
        }else
        {
            console.log(data)
            resp.status(200).send(data);
        }
    })
})
//insert query

router.post("/employee",function(req,resp){

connect.query("insert into employee value(?,?,?,?)",[req.body.id,req.body.name,req.body.age,req.body.city],function(err,data){

    if(err)
        {
            resp.status(500).send("error Occured");
        }
        else
        {
            if(data.affectedRows>0)
            resp.status(200).send("sucessfully added");
        }
})
})
router.delete("/employee/:pid",function(req,resp){

    connect.query("delete from employee where id=?",[req.params.pid],function(err,data){

        if(err)
            {
                resp.status(500).send("error")
            }else
            {
                if(data.affectedRows>0)
                    resp.status(200).send("data Sucessfully deleted");
            }
    })
})

router.put('/employee/:pid',function(req,resp){
    connect.query("update employee set  name=?, age=?, city=? where id=?",[req.body.name,req.body.fees,req.body.class,req.params.pid],function(err,data){
        if(err)
            {
                resp.status(500).send("error occured")
            }
            else
            {
                if(data.affectedRows>0)
                    {
                        resp.status(200).send("Updated sucessfully");
                    }
            }
    })
})

module.exports=router;