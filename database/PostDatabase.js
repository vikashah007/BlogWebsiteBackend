import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    photo: { type: String, required: true }
}, { timestamps: true });

export const Post = mongoose.model('Post', PostSchema);