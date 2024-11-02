import express from 'express';
import mongoose from 'mongoose';
import teacherRoutes from './src/router/teacherRouter.js';
import positionRoutes from './src/router/positionRouter.js';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/teachers', teacherRoutes);
app.use('/postion', positionRoutes);

mongoose.connect("mongodb+srv://minhthanh12:minhthanh12@cluster0.5emlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });


