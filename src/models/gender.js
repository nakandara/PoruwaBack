import mongoose from 'mongoose';

const genderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Gender = mongoose.model('Gender', genderSchema);

export default Gender;
