import { Application } from "express";
const bodyParser = require("body-parser");

export const initTestRoute = (app: Application) => {
  app.use(bodyParser.json());
  return app.post("/testRoute/", async (req, res) => {
    const { body } = req;
    try {
      return res.send(body);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });
};