
import { Router} from "express";
import { PostController } from "../controllers/postController";

const router = Router();
// const { protect } = require('../middleware/authMiddleware').default
router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);
router.patch("/like/:id", PostController.likePost);
router.patch('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
export default router;


