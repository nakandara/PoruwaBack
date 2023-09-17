import mongoose from "mongoose";

const UserDetailsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  birthday: { type: [String], required: false, default: [] },
  gender: { type: [String], required: false, default: [] },
  religion: { type: [String], required: false, default: [] },
  race: { type: [String], required: false, default: [] },
  caste: { type: [String], required: false, default: [] },
  district: { type: [String], required: false, default: [] },
  city: { type: [String], required: false, default: [] },
  marriageStatus: { type: [String], required: false, default: [] },
  educationStatus: { type: [String], required: false, default: [] },
  alcohol: { type: [String], required: false, default: [] },
  JobStatus: { type: [String], required: false, default: [] },
  monthlyIncome: { type: [String], required: false, default: [] },
  brothers: { type: [String], required: false, default: [] },
  sisters: { type: String, required: true },
  height: { type: [Number], required: false, default: [] },
  weight: { type: [Number], required: false, default: [] },
  country: { type: [String], required: false, default: [] },
  OtherDetails: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  viewPassword: { type: String, required: false },
  users: [UserDetailsSchema],
});

const User = mongoose.model("User", UserSchema);

export default User;
