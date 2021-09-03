import "reflect-metadata";
import { Action, createExpressServer, useContainer } from "routing-controllers";
import { createConnection, useContainer as UseTypeOrmContainer } from "typeorm";
import { AuthControler } from "./auth/AuthControler";
import UserController from "./user/UserController";
import * as jwt from "jsonwebtoken";
import { Container } from "typedi";
import { Container as ExtenContainer } from "typeorm-typedi-extensions";

// creates express app, registers all controller routes and returns you express app instance
useContainer(Container);
UseTypeOrmContainer(ExtenContainer);
createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Finalfanta2",
  database: "test-typedi",
  entities: [__dirname + "/models/*.*"],
  synchronize: true,
})
  .then((connection) => {
    createExpressServer({
      authorizationChecker: async (action: Action, roles: string[]) => {
        const token = action.request.headers["authorization"]?.split(" ");
        if (token) {
          const decoded = jwt.decode(token[1]);
          if (decoded) return true;
        } else return false;
        return false;
      },
      cors: true,
      routePrefix: "api",
      controllers: [UserController, AuthControler], // we specify controllers we want to use
    }).listen(4000);
    console.log("App Started Sucessfully!");
  })
  .catch((error) => console.log(error));
