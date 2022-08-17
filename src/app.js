import express from "express";
import { tipsDB } from "./tips.js";

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log("Servidor rodando na porta http://localhost:3333");
});

tipsDB(app);
