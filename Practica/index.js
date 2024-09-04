import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const app = express();
const port = 3000;

const jwt = require('jsonwebtoken');

app.use(express.json())

app.post("/hash", async (req,res)=>
{
    const password=req.body.password
    const salt= await bcryptjs.genSaltSync(10)
    const hash= await bcryptjs.hashSync(password,salt)
    res.send(hash)
})
app.post("/compare",async (req,res)=>{
    const password=req.body.password
    const hash=req.body.hash
    const comparison=bcryptjs.compareSync(password,hash)
    res.send(comparison)
})

app.post("/CreateToken",async(req,res)=>{
    const {payload}=req.body;
    const token=jwt.sign(payload,"benja_es_un_lindo", {expiresIn:"1h"})
    res.json({token})
})

app.post("/verify", (req, res)=>
{
    const {token}=req.body
    const payload=jwt.verify(token, "benja_es_un_lindo")
    res.json({payload})
    res.status(400).json("error"+err.message)
})
app.listen(port, () => {
    console.log("Escuchando ando")
})