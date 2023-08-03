import express from "express";
import redis from "redis";

const client = redis.createClient({
  url: "redis://127.0.0.1:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

(async () => {
  await client.connect();

  const app = express();

  app.get("/pageview", async (_, res) => {
    const views = await client.incr("visitors");
    res
      .json({
        status: "ok",
        views,
      })
      .end();
  });

  app.use(express.static("./static"));
  const PORT = 3000;
  console.log("Serving on port:", PORT);
  app.listen(PORT);
})();
