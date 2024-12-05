
import { connectDb } from "./config/dbConnect.mjs";
import express from 'express';
import { userRouter } from "./router/userRouter.mjs";

 await connectDb();
const app=express()
app.use('/', userRouter)
app.get("/getUser",(req,res)=>{
  return res.status("200").json({message:"hello"})
  })
 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("",PORT )
  console.log(`Server is running on http://localhost:${PORT}`);
});

