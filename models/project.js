// PROJECT MODEL
import mongoose from 'mongoose';

// DB SCHEMA
const Schema = mongoose.Schema;
const projectSchema = new mongoose.Schema(
  {
    project_name: String,
    project_desc: String,
    project_pic: String,
    project_date: {
      type: Date,
      default: Date.now
    }
  }
);

export default mongoose.model('Project', projectSchema);
