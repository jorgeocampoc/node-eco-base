import type { Express } from "express";
const {
  express,
  cors,
  corsOptions,
  connectDatabase,
  cookieParser
} = require("../config/index");
import "./index";
class Server {
  private app: Express;
  private port: number;
  private customerPath: string;
  private adminPath: string;
  private authPath: string;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "3000", 10);
    this.customerPath = "/customers";
    this.adminPath = "/admin";
    this.authPath = "/auth";
    this.db();
    this.middlewares();
    this.routes();
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
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use(this.customerPath, require("../routes/customer.routes"));
    this.app.use(this.adminPath, require("../routes/admin.routes"));
    this.app.use(this.authPath, require("../routes/auth.routes"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on");
    });
  }
}

module.exports = Server;
