import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { ListeningPort } from "./Utils/ListenningPort.js";
import errorHandler from "./middleware/error.middleware.js";
import createBlogRouter from "./Router/Blogs/CreateBlog.Router.js";
import getBlogsRouter from "./Router/Blogs/GetBlogs.Router.js";
import GetBlogByIdRouter from "./Router/Blogs/GetBlogByID.Router.js";
const app = express();
//Middelware
app.use(cors());
app.use(express.json());
dotenv.config({ path: "./.env" });

//Endpoints
app.use("/create-blog", createBlogRouter);
app.use("/get-blogs", getBlogsRouter);
app.use("/get-blogs-by-id", GetBlogByIdRouter);

app.use(errorHandler);

ListeningPort(app);
