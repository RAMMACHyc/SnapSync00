import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    title: { type: String, required: [true, "please"] },
    description: { type: String, min: 10, required: true },
    tags: [String],
    file: { type: String, required: [true, "please"] },

    auteur: { type: String, min: 5, required: true },
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const post = mongoose.model('Post', postSchema);
export default post 
