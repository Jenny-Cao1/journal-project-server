import mongoose from "mongoose";

// Create a schema for a post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Convert schema into a model for the db 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;