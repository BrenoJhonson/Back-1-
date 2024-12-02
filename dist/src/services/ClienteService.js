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
exports.ClienteService = void 0;
const Cliente_1 = require("../models/Cliente");
class ClienteService {
    static listarClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Cliente_1.Cliente.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao listar clientes: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao listar clientes');
                }
            }
        });
    }
    static criarCliente(clienteData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Cliente_1.Cliente.create(clienteData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao criar cliente: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao criar cliente');
                }
            }
        });
    }
    static atualizarCliente(id, clienteData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield Cliente_1.Cliente.findByPk(id);
                if (!cliente) {
                    throw new Error('Cliente não encontrado');
                }
                return yield cliente.update(clienteData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao atualizar cliente: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao atualizar cliente');
                }
            }
        });
    }
    static excluirCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield Cliente_1.Cliente.findByPk(id);
                if (!cliente) {
                    throw new Error('Cliente não encontrado');
                }
                yield cliente.destroy();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao excluir cliente: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao excluir cliente');
                }
            }
        });
    }
}
exports.ClienteService = ClienteService;
