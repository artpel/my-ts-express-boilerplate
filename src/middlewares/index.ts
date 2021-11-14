require("dotenv").config();
import { Application } from "express";
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");


export const initMiddlewares = (app: Application) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());
};
