import { Application } from "express";
import { initTestRoute } from "./testRoute";

export const initRoutes = (app: Application) => {
  initTestRoute(app);
};
