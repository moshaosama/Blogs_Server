import DB from "../../Config/DB.js";
import redisClient from "../../Config/redis.js";

export const CreateBlogs = async (req, res, next) => {
  try {
    const getBlogQuery = "SELECT * FROM blog";
    const [Blogs] = await DB.promise().query(getBlogQuery);

    const exists = await redisClient.hExists("Blogs", "blogsAll");

    if (exists) {
      return res.status(429).json({
        statusbar: "error",
        message: "Already have Blogs",
      });
    }

    await redisClient.hSet("Blogs", "blogsAll", JSON.stringify(Blogs));

    return res.status(200).json({
      statusbar: "success",
      message: "Added to Cache Successfully",
    });
  } catch (err) {
    next(err);
  }
};
