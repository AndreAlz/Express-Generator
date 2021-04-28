import { Request, Response } from "express";
import * as process from "process";
const loggerMiddleware = (req: Request, resp: Response, next) => {
  const ENV = process.env.profile;
  var mensaje: string;
  switch (ENV) {
    case "devlocal":
      mensaje = `Request logged: || method: ${req.method} || path: ${
        req.path
      } || server time: ${new Date()} `;
      console.log(mensaje);
      break;
    case "qas":
      mensaje = `Request logged: || method: ${req.method} || path: ${
        req.path
      } || server time: ${new Date()} `;
      console.log(mensaje);
      break;
  }
  next();
};

export default loggerMiddleware;
