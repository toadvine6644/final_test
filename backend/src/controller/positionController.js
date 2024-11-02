import Position from '../model/positionModel.js';

export const getAllPosition = async (req, res) => {
    try {
      const position = await Position.find();
      res.status(200).json(position);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const createPosition = async (req, res) => {
    const { code, position } = req.body;
  
    try {
      const newPosition = new Position({ code, position });
      await newPosition.save();
      res.status(201).json(newPosition);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  