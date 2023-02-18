import mongoose from 'mongoose';
import 'dotenv/config';

const DB_URL = 'mongodb://localhost:27017/Name-db';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI || process.env.MONGO_DB_URL || DB_URL
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
