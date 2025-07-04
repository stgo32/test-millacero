import Router from "koa-router";
import { Context } from "koa"
import { InferCreationAttributes } from "sequelize";
import { Info } from "../models/Info";

const router = new Router();

// POST /send-info
router.post("/send-info", async (ctx: Context) => {
  try {
    const data = ctx.request.body as InferCreationAttributes<Info>;
    const submission = await Info.create(data);
    ctx.body = submission;
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: "Error al guardar la información", details: err };
  }
});

// GET /load-info
router.get("/load-info", async (ctx: Context) => {
  try {
    const lastSubmission = await Info.findOne({
      order: [["id", "DESC"]],
    });
    ctx.body = lastSubmission;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Error al cargar los datos" };
  }
});


export default router;
