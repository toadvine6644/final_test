import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true},
});

const Position = mongoose.model('Position', positionSchema);

export default Position;