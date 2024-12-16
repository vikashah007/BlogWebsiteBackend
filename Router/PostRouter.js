import { addPost,deletePost,updatePost,getAllPost } from "../Controller/postController";
import express from "express"

const router=express()

router.post('/add', addPost);       
router.delete('/delete/:id', deletePost); 
router.put('/update/:id', updatePost);   
router.get('/all', getAllPost);
export default router
