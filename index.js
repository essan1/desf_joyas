import express from "express";
import router from "./router/router.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3033;
const __dirname = import.meta.dirname;

//mioddleware res json
app.use(express.json());
//carpetos publicas
app.use(express.static(path.join(__dirname, "assets")));

app.use(router);

app.listen(PORT, () =>
  console.log(`🔥Server Running on http://localhost:${PORT}`)
);
