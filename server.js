const express = require('express');
const dbConnect = require('./config/dbconnect');
const run = require('./config/dbconnect');



run()

const app=express()
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


app.get("/getUser",(req,res)=>{
return res.status("200").json({message:"hello"})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("",PORT )
  console.log(`Server is running on http://localhost:${PORT}`);
});