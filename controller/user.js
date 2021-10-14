const express =require("express");
const db =require("../models");

function  router(app){
    app.post("/api/v1/users", (req, res,next) => {

        db.User.create({
         f_name:"ronald",
         l_name:"marks",
         email:"lucas@gmail.com",
         password:"46464"
         

        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
      
    });
    app.get("/api/v1/userlist", (req, res,next) => {
        db.User.findAll({
            attributes:[ "id","email","f_name","l_name",]
  
        })
        .then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })

      
    });
    app.patch("/api/vi/users/:id",(req,res,next)=>{
        db.User.update({
         f_name:"eliud",
         l_name:"marks",
         email:"cas@gmail.com",
         
        },
        {
            where:{
                id:1
            }
        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })

    })

    app.get("/api/v1/user/:id", (req, res,next) => {
        db.User.findAll({
            attributes:[ "id","email","f_name","l_name",],
            where:{
                id:1
            }

        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })
      
    });











}
module.exports=router;