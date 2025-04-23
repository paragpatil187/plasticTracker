import mongoose from "mongoose";

export interface IActivity extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  date: Date;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new mongoose.Schema<IActivity>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    points: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Activity ||
  mongoose.model<IActivity>("Activity", activitySchema);
