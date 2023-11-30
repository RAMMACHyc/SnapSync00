
import { Router} from "express";
import  {registerUser, loginUser, getMe}  from "../controllers/userController";

const routerUser = Router();
const { protect } = require('../middleware/authMiddleware').default
routerUser.post('/signup', registerUser)
routerUser.post('/signin', loginUser)
routerUser.get('/me', protect, getMe)

export default routerUser;


 