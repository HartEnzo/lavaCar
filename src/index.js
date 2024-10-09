/*
 Inicializa o servidor
 Carrega os serviços 
*/

import e from "express";
import "dotenv/config";
import "./db.js";
import cliente_router from "./routes/clienteRoute.js";
import veiculo_router from "./routes/veiculoRoute.js";

const app = e();

app.use(e.json());

app.use("/cliente", cliente_router);
app.use("/veiculo", veiculo_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`);
});