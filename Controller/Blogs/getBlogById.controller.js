import Joi from "joi";
import DB from "../../Config/DB.js";

const BlogIdSchema = Joi.object({
  blog_id: Joi.number().required(),
});

export const GetBlogByID = async (req, res, next) => {
  const { value, error } = BlogIdSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ statusbar: "error", message: error.message });
  }

  try {
    const query = "SELECT * FROM blog WHERE id = ?";
    const [result] = await DB.promise().query(query, [value.blog_id]);

    res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};

const BlogCategorySchema = Joi.object({
  blog_category: Joi.string().required(),
});

export const GetBlogsByCategory = async (req, res, next) => {
  const { value, error } = BlogCategorySchema.validate(req.params);
  if (error) {
    return res.status(400).json({ statusbar: "error", message: error.message });
  }

  try {
    if (value.blog_category === "all") {
      const query = "SELECT * FROM blog";
      let [result] = await DB.promise().query(query);
      return res.status(200).json({
        statusbar: "success",
        result,
      });
    } else {
      const query = "SELECT * FROM blog WHERE category = ?";
      let [result] = await DB.promise().query(query, [value.blog_category]);
      return res.status(200).json({
        statusbar: "success",
        result,
      });
    }
  } catch (err) {
    next(err);
  }
};
