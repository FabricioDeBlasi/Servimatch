const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola desde Vercel!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});