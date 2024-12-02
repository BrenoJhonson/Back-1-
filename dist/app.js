"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteRoutes_1 = require("./src/routes/clienteRoutes");
const vendedorRoutes_1 = require("./src/routes/vendedorRoutes");
const pecaRoutes_1 = require("./src/routes/pecaRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(clienteRoutes_1.clienteRoutes);
app.use(vendedorRoutes_1.vendedorRoutes);
app.use(pecaRoutes_1.pecaRoutes);
app.listen(3003, () => console.log('Servidor rodando na porta 3003'));
