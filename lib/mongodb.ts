import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  console.log(process.env.MONGODB_URI);
  if (cached.conn) {
    return cached.conn;
  }
  console.log("1");
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    console.log("1");

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  
  console.log("1");

  cached.conn = await cached.promise;

  console.log("MongoDB connected");
  return cached.conn;
}

export default dbConnect;
