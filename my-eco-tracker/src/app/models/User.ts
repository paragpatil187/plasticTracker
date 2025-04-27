import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  image?: string;
  emailVerified?: boolean;
  points: number;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: String,
    emailVerified:{ type: Boolean, default: false } ,
    points: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
