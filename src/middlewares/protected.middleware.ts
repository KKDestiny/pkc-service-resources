import { NextFunction, Request, Response } from "express";
import chalk from "chalk";

export default async function (req: Request, res: Response, next: NextFunction) {
  try {
    console.log(chalk.bgBlue(`[middleware.protect] passed a protect middleware`));
    next();
  } catch (err) {
    next(err);
  }
}
