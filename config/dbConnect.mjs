import dotenv from 'dotenv'; // import dotenv
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

export const connectDb = async (req, res) => {
   
          
        try {
          console.log('Attempting to connect to MongoDB Atlas...');
           mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("db connected sucessfully")}).catch((error)=>{console.log("error occourd in *connect******************************",error)})
          console.log('Successfully connected to MongoDB Atlas');
         
        } catch (err) {
          console.error('Error connecting to MongoDB Atlas:', err);
        }
     
};


 
