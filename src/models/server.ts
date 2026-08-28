import type { Express } from "express";
const { express, cors, corsOptions, connectDatabase } = require("../config/index");
require("./index");
class Server {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "3000", 10);
    this.middlewares();
    this.db();
  }

  async db() {
    try {
      await connectDatabase();
    } catch (error) {
      console.log(error);
    }
  }
  middlewares() {
    this.app.use(cors(corsOptions));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on");
    });
  }
}

module.exports = Server;
