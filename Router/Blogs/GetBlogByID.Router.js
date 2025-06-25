import express from "express";
import {
  GetBlogByID,
  GetBlogsByCategory,
} from "../../Controller/Blogs/getBlogById.controller.js";

const GetBlogByIdRouter = express.Router();
const GetBlogByCategoryRouter = express.Router();

GetBlogByIdRouter.route("/:blog_id").get(GetBlogByID);
GetBlogByCategoryRouter.route("/:blog_category").get(GetBlogsByCategory);

export { GetBlogByIdRouter, GetBlogByCategoryRouter };
