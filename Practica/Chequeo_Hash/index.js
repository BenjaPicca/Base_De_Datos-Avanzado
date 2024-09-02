import express from "express";
import bcryptjs from "bcryptjs";
const app = express();
const port = 3000;

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
 
app.listen(port, () => {
    console.log("Escuchando ando")
})