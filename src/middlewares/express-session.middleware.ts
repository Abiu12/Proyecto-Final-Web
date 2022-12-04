import { Request, Response, NextFunction } from "express";
import session from "express-session";

import UsuarioType from "../types/usuario.type";

declare module "express-session" {
  interface SessionData {
    user: UsuarioType;
  }
}

export const sessionConfig = session({
  name: "session-cookie",
  secret: "secreto123",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    signed: true,
    maxAge: 1 * (60 * 1000),
  },
});

export const sessionMiddleware = (req: Request, res: Response, next: NextFunction)=> {
  const {user} =  req.session;
  console.log(user);
  res.locals.user = user;
  next();
}