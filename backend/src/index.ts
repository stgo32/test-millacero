import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { sequelize } from "./db/config";
import formRoutes from "./routes/routes"; 

const app = new Koa();

app.use(cors({
  origin: "http://localhost:3000", 
}));

app.use(bodyParser());
app.use(formRoutes.routes());
app.use(formRoutes.allowedMethods());

const PORT = 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
});
