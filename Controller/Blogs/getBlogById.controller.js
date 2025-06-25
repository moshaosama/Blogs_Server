import Joi from "joi";
import DB from "../../Config/DB.js";

const BlogIdObject = Joi.object({
  blog_id: Joi.number().required(),
});

export const GetBlogByID = async (req, res, next) => {
  const { value: blog_id, error } = BlogIdObject.validate(req.params);
  if (!blog_id) {
    res.status(404).json({
      statusbar: "error",
      message: error,
    });
  }

  try {
    const Query = "SELECT * FROM blog WHERE id = ?";
    const Value = [blog_id];

    const [result] = await DB.promise().query(Query, Value);

    res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};
