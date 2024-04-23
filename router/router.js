import express from "express";
import path from "path";

import {
  hateoas,
  joyasCategory,
  joyasFieldControl,
} from "../controller/controller.js";

const router = express.Router();
const __dirname = import.meta.dirname;

//ruta principal
router.get("/", (req, res) => {
  res.send("jaja");
});

router.get("/joyas", hateoas);

router.get("/joyas/categoria/:categoria", joyasCategory)

router.get("/joyas/:id", joyasFieldControl)





//creamos nuestra ruta generica, simeprea al final
router.get("*", (req, res) => {
  res.status(400);
  res.send("<h1><center>404 ERROR -- Pagina No Encontrada</center></h1>");
});

export default router;
