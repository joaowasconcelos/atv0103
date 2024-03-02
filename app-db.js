const express = require("express");
const app = express();
const clienteRoute = require("./src/routes/clienteRoute");
app.use(express.json());
app.use("/",clienteRoute)
app.listen(8080, () => {
    console.log("Servidor respondendo na porta 8080")
})