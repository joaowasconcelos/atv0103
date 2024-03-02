const {connect}  = require("../config/db");

const modelClientes = {
    selecionaTodosClientes: async () => {
        try {
            const conn = await connect();
            const [rows] = await conn.query("select * from clientes;");
            return rows;
        } catch (error) {
            throw error;
        }
    },

    selecionaClienteId: async (id) => {
        try {
            const conn = await connect();
            const sql = "SELECT * FROM clientes WHERE id=?;";
            const values = id;
            const [rows] = await conn.query(sql, values);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    insertClientes: async (cliente) => {
        try {
            const conn = await connect();
            const sql = "insert into clientes(nome,idade) values (?,?);";
            const values = [cliente.nome, cliente.idade];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    },

    updateClientes: async (id,cliente) => {
        try {
            const conn = await connect();
            const sql = "update clientes set nome=?, idade=? where id=?";
            const values = [cliente.nome, cliente.idade, id];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    },

    deleteClientes:async(id)=>{
        try{
            const conn = await connect();
            const sql ='delete from clientes where id=?;';
            const values = id;
            return await conn.query(sql,values)
        }catch(error){
            throw error;
        }
    },
}

module.exports = modelClientes
