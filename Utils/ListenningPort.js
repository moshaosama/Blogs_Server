import DB from "../Config/DB.js";
import redisClient from "../Config/redis.js";

export const ListeningPort = (app) => {
  app.listen(process.env.PORT || 5000, async () => {
    console.log(`Listening on port ${process.env.PORT}`);

    DB.getConnection((err) => {
      if (!err) {
        console.log("Connected to DB successfully");
      } else {
        console.log("Failed to connect to DB");
      }
    });

    await redisClient.connect();
    console.log("Redis connected successfully");
  });
};
