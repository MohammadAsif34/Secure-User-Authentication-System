import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    phone: { type: Number, default: "" },
    dob: { type: Date, required: true },
    gender: {
      type: String,
      enum: ["male", "female", "transgender", "none"],
      default: "none",
    },
    picture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/user-icon-symbol-3d-design-concept_573652-869.jpg",
    },
    location: { type: String, default: "" },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
export default User;
