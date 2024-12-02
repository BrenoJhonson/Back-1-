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
exports.VendedorController = void 0;
const VendedorService_1 = require("../services/VendedorService");
class VendedorController {
    static listarVendedores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedores = yield VendedorService_1.VendedorService.listarVendedores();
                res.json(vendedores);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: 'Erro ao listar vendedores: ' + error.message });
                }
                else {
                    res.status(500).json({ error: 'Erro desconhecido' });
                }
            }
        });
    }
    static criarVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedor = yield VendedorService_1.VendedorService.criarVendedor(req.body);
                res.status(201).json(vendedor);
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
    static atualizarVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedor = yield VendedorService_1.VendedorService.atualizarVendedor(req.params.id, req.body);
                res.json(vendedor);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({ error: error.message });
                }
                else {
                    res.status(404).json({ error: 'Vendedor não encontrado' });
                }
            }
        });
    }
    static excluirVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield VendedorService_1.VendedorService.excluirVendedor(req.params.id);
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
exports.VendedorController = VendedorController;
