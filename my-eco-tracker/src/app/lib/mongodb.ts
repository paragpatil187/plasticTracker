import mongoose from "mongoose";

// Extend global type properly
declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: Promise<typeof mongoose> | undefined;
}

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

// Main connect function
const dbConnect = async () => {
  if (!global.mongooseConn) {
    global.mongooseConn = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });
  }
  return global.mongooseConn;
};

export default dbConnect;
