require("dotenv").config();
import * as express from "express";
import { initRoutes } from "./routes";
import { initMiddlewares } from "./middlewares";

const app = express();

initMiddlewares(app);
initRoutes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3000}!`);
});
