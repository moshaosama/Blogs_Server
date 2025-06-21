import express from "express";
import { GetBlogs } from "../../Controller/Blogs/getBlogs.controller.js";

const getBlogsRouter = express.Router();

getBlogsRouter.route("/").get(GetBlogs);

export default getBlogsRouter;
