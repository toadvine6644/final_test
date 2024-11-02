import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  education: { 
    degree: { type: String, required: true },
    school: { type: String, required: true },
   }
});


const Teacher = mongoose.model('User', teacherSchema);

export default Teacher;