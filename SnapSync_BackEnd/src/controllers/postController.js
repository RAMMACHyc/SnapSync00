
import Post from  "../models/post"
import {Types} from "mongoose";
export const PostController = {

  getPosts : async (req, res) => {
        try {
          const posts = await Post.find();
          res.status(200).json(posts);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }, 

      getPaginatedPosts : async (req, res) => {
        const { page } = req.query;
        try {
          const LIMIT = 3;
          const startIndex = (Number(page) - 1) * LIMIT; 
          const total = await Post.countDocuments({});
          const posts = await Post.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
          res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
        } catch (error) {
          res.status(401).json({ message: error.message });
        }
      }, 
 
      createPost: async (req, res) => {
        try {
          const { title, description, tags, auteur, likes, file } = req.body;
      
          if (!(title && description && tags && auteur && file)) {
            return res.status(400).json({ error: 'Please provide all required fields' });
          }
      
          const newPost = new Post({ title, description, tags, auteur, likes, file });
          const savedPost = await newPost.save();
      
          res.status(201).json({
            message: 'Post created successfully',
            post: savedPost,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },


  updatePost : async (req, res) => {
    const { id } = req.params;
    const body = req.body;
   
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }  
    const updatedPost =  await Post.findByIdAndUpdate(id, body, { new: true });
    res.json(updatedPost);
  },


  deletePost : async (req, res) => {
    const { id } = req.params;
  
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }
  
    try {
      await Post.findByIdAndDelete(id);
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting the post', error: error.message });
    }
  },

  likePost : async (req, res) => {
    const { id } = req.params;
    
   
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }  
    const likedPost =  await Post.findByIdAndUpdate(id , {$inc: {likes: 1}}, { new: true });
    res.json(likedPost.likes);
  },
};

