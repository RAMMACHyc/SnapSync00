import axios from 'axios';


const API_BASE_URL = 'http://localhost:3005';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },

  
});

api.interceptors.request.use((req) => {
  const profile = JSON.parse(localStorage.getItem('profile'));

  if (profile?.token) {
    req.headers.Authorization = `Bearer ${profile.token}`;
  }

  return req;
});


const ApiService = {
  createPost: async (post) => {
    try {
      const res = await api.post('/', post);
      return res.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },
  getPosts: async () => {
    try {
      const res = await api.get('/posts');
      return res.data;
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;
    }
  },
  getPaginationPosts: async (pageNumber) => {
    try {
      const res = await api.get(`/posts?page=${pageNumber}`);
      return res.data;
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;
    }
  },
  updatePost: async (postId,data) => {
    try {
      
      const res = await api.patch(`/posts/${postId}` , data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(`Error updating post with id ${postId}:`, error);
      throw error;
    }
    
  },
  
  deletePost: async (postId) => {
    try {
      const res = await api.delete(`/posts/${postId}`);
      return res.data;
    } catch (error) {
      console.error(`Error deleting post with id ${postId}:`, error);
      throw error;
    }
  },
  

  likePost: async (postId) => {
    try {
      const res = await api.patch(`/like/${postId}`);
      return res.data;
    } catch (error) {
      console.error(`Error liking post with id ${postId}:`, error);
      throw error;
    }
  },

  updatePost: async (postId,data) => {
    try {
      
      const res = await api.patch(`/${postId}` , data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(`Error updating post with id ${postId}:`, error);
      throw error;
    }
  },
  
  signIn: async (user) => {
    try {
      const res = await api.post('/user/signin', user);
      return res.data;
    } catch (error) {
      console.error('Error Register user:', error);
      throw error;
    }
  },

  signUp: async (user) => {
    try {
      const res = await api.post('/user/signup', user);
      return res.data;
    } catch (error) {
      console.error('Error login :', error);
      throw error;
    }
  },


};



export default ApiService;
