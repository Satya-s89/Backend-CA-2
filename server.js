const express = require('express');

const app = express();

app.use(express.json());

const userData = [
    {id:1,userName: "satya","age": 18, email:"Satya123@gmail.com"},
    {id:2,userName: "akhil","age": 17, email:"akhil45@gmail.com"},
    {id:3,userName: "mourya","age": 19, email:"mourya789@gmail.com"},
    {id:4,userName: "madhu","age": 20, email:"madhu7890@gmail.com"}
];

app.get("/user/:id",(req,res) => {
    const id = req.params;
    if(!id){
        return res.status(404).send({msg:"User parameter cannot be empty"});
    }
    userData.map((ele) => {
        if(ele == id){
            return res.status(200).send({msg:"User found" , user:{userData}});
        }
        else{
            return res.status(500).send({msg:"User not found"});
        }
    });
})


app.listen(8080,() => {
    console.log("Server connected sucessfully");
})