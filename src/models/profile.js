import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId:{ type: String, required: true },
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
    sisters: { type: String, required: false },
    height: { type: [Number], required: false, default: [] },
    weight: { type: [Number], required: false, default: [] },
    country: { type: [String], required: false, default: [] },
    OtherDetails: { type: String, required: false },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
