require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();
import { ErrorMiddleware } from "./middleware/Error";
import morgan from "morgan";
import UserRouter from "./routes/user.routes";
import ProductRouter from "./routes/products.routes";
import CommentRouter from "./routes/comments.routes";

// body parser
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", UserRouter);
app.use("/api/prod", ProductRouter);
app.use("/api/comments", CommentRouter);

// middleware to catch error from unknown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
