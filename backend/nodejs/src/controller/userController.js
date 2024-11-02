
export const registerUser = async (req, res) => {
    const { userName, email } = req.body;
    if (!userName || !email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    const userId = `US${Math.floor(1000 + Math.random() * 9000)}`;
    const newUser = new User({ userId, userName, email });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};