import express from 'express';
const router = express.Router();
import * as blogController from '../app/controllers/blogController.js';

router.post('/create-blog', blogController.createBlog);

router.delete('/delete-blog', blogController.deleteBlog);

router.put('/update-blog', blogController.updateBlog);

router.get('/read-blog', blogController.readBlog);


export default router;