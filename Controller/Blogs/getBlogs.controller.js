import DB from "../../Config/DB.js";
import redisClient from "../../Config/redis.js";

export const GetBlogs = async (req, res, next) => {
  try {
    const exists = await redisClient.hExists("Blogs", "blogsAll");

    if (!exists) {
      const GetBlogsQuery = "SELECT * FROM blog";
      const [Blogs] = await DB.promise().query(GetBlogsQuery);

      return res.status(200).json({
        statusbar: "success from DB",
        result: Blogs,
      });
    } else {
      const Blogs = await redisClient.hGet("Blogs", "blogsAll");
      const BlogsObj = JSON.parse(Blogs);
      return res.status(200).json({
        statusbar: "success from Cache",
        result: BlogsObj,
      });
    }
  } catch (err) {
    next(err);
  }
};
