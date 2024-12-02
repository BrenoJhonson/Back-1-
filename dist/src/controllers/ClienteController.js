"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const ClienteService_1 = require("../services/ClienteService");
class ClienteController {
    static listarClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield ClienteService_1.ClienteService.listarClientes();
                res.json(clientes);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: 'Erro ao listar clientes: ' + error.message });
                }
                else {
                    res.status(500).json({ error: 'Erro desconhecido' });
                }
            }
        });
    }
    static criarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield ClienteService_1.ClienteService.criarCliente(req.body);
                res.status(201).json(cliente);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Erro desconhecido' });
                }
            }
        });
    }
    static atualizarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield ClienteService_1.ClienteService.atualizarCliente(req.params.id, req.body);
                res.json(cliente);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({ error: error.message });
                }
                else {
                    res.status(404).json({ error: 'Cliente não encontrado' });
                }
            }
        });
    }
    static excluirCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ClienteService_1.ClienteService.excluirCliente(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Erro desconhecido' });
                }
            }
        });
    }
}
exports.ClienteController = ClienteController;
