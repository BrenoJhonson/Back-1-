"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const ClienteController_1 = require("../controllers/ClienteController");
exports.clienteRoutes = (0, express_1.Router)();
exports.clienteRoutes.get('/clientes', ClienteController_1.ClienteController.listarClientes);
exports.clienteRoutes.post('/clientes', ClienteController_1.ClienteController.criarCliente);
exports.clienteRoutes.put('/clientes/:id', ClienteController_1.ClienteController.atualizarCliente);
exports.clienteRoutes.delete('/clientes/:id', ClienteController_1.ClienteController.excluirCliente);
