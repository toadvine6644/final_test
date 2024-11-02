import Teacher from '../model/teacherModel.js';


export const getAllTeachers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const teachers = await Teacher.find().skip(skip).limit(limit);
    const totalTeachers = await Teacher.countDocuments();
    const totalPages = Math.ceil(totalTeachers / limit);
    res.status(200).json({
      data: teachers,
      pagination: {
          currentPage: page,
          totalPages: totalPages,
          limit: limit,
          totalItems: totalTeachers
      }
  });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTeacher = async (req, res) => {
  const code = 'GV' + Math.floor(1000 + Math.random() * 9000);
  const { name, email, phoneNumber, status, address, position, education } = req.body;

  try {
    const newTeacher = new Teacher({ code, name, email, phoneNumber, status, address, position, education });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


