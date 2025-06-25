import express from "express";
import { GetBlogByID } from "../../Controller/Blogs/getBlogById";

const GetBlogByIdRouter = express.Router();

GetBlogByIdRouter.route("/:blog_id").get(GetBlogByID);

export default GetBlogByIdRouter;
