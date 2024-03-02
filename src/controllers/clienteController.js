const clienteModel = require("../models/clienteModel");

const clienteController = {
    selectClientes: async (req, res) => {
        try {
            const cliente = await clienteModel.selecionaTodosClientes();
            return res.json(cliente)
        } catch (error) {
            throw error;
        }
    },
    selectIdClientes: async (req, res) => {
        try {
            const { id } = req.params;
            const selectId = await clienteModel.selecionaClienteId(id);
            return res.json(selectId)
        } catch (error) {
            throw error;
        }
    },

    clientesInsert: async (req, res) => {
        try {
            const { nome, idade } = req.body;
            const insert = await clienteModel.insertClientes({ nome: nome, idade: idade });
            return res.status(200).json({ message: "Cadastrado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },

    updateCliente: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, idade } = req.body;
            const update = await clienteModel.updateClientes(id, { nome: nome, idade: idade });
            return res.status(200).json({ message: "Cliente atualizado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },

    apagaClientes: async (req, res) => {
        try {
            const { id } = req.params;
            const apaga = await clienteModel.deleteClientes(id);
            return res.status(200).json({ message: "Cliente deletado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },
}

module.exports = { clienteController }