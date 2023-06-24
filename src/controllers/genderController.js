import Gender from '../models/gender.js';

export const createGender = async (req, res) => {
  try {
    const { name } = req.body;
    const newGender = new Gender({ name });
    await newGender.save();
    res.status(200).json({ success: true, message: 'Gender created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};