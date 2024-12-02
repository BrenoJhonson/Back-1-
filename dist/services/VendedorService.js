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
exports.VendedorService = void 0;
const Vendedor_1 = require("../models/Vendedor");
class VendedorService {
    static listarVendedores() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Vendedor_1.Vendedor.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao listar vendedores: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao listar vendedores');
                }
            }
        });
    }
    static criarVendedor(vendedorData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Vendedor_1.Vendedor.create(vendedorData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao criar vendedor: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao criar vendedor');
                }
            }
        });
    }
    static atualizarVendedor(id, vendedorData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedor = yield Vendedor_1.Vendedor.findByPk(id);
                if (!vendedor) {
                    throw new Error('Vendedor não encontrado');
                }
                return yield vendedor.update(vendedorData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao atualizar vendedor: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao atualizar vendedor');
                }
            }
        });
    }
    static excluirVendedor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedor = yield Vendedor_1.Vendedor.findByPk(id);
                if (!vendedor) {
                    throw new Error('Vendedor não encontrado');
                }
                yield vendedor.destroy();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao excluir vendedor: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao excluir vendedor');
                }
            }
        });
    }
}
exports.VendedorService = VendedorService;
