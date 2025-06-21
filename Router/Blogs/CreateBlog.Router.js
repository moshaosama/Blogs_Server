import express from "express";
import { CreateBlogs } from "../../Controller/Blogs/CreateBlogs.controller.js";

const createBlogRouter = express.Router();

createBlogRouter.route("/").post(CreateBlogs);

export default createBlogRouter;
