import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { sequelize } from "./db/config";
import formRoutes from "./routes/routes"; 

const app = new Koa();

app.use(bodyParser());
app.use(formRoutes.routes());
app.use(formRoutes.allowedMethods());

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
});
