const express = require("express");
const router = express.Router();
const {clienteController} = require("../controllers/clienteController");

router.get("/clientes",clienteController.selectClientes);
router.get("/clientes/:id",clienteController.selectIdClientes);
router.post("/clientes",clienteController.clientesInsert);
router.put("/clientes/:id",clienteController.updateCliente);
router.delete("/clientes/:id",clienteController.apagaClientes);


module.exports = router;