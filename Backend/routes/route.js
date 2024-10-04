import express from 'express';
import { singupUser, loginUser } from '../controller/user-controller.js';
import { getImage, uploadImage } from '../controller/image-controller.js';
import { createPost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import upload from '../utils/upload.js';
const router = express.Router();


router.post('/signup', singupUser);
router.post('/login', loginUser);
router.post('/file/uplaod', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/create', authenticateToken, createPost);
export default router;