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
exports.PecaController = void 0;
const PecaService_1 = require("../services/PecaService");
class PecaController {
    static listarPecas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pecas = yield PecaService_1.PecaService.listarPecas();
                res.json(pecas);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: 'Erro ao listar peças: ' + error.message });
                }
                else {
                    res.status(500).json({ error: 'Erro desconhecido' });
                }
            }
        });
    }
    static criarPeca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const peca = yield PecaService_1.PecaService.criarPeca(req.body);
                res.status(201).json(peca);
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
    static atualizarPeca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const peca = yield PecaService_1.PecaService.atualizarPeca(req.params.id, req.body);
                res.json(peca);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({ error: error.message });
                }
                else {
                    res.status(404).json({ error: 'Peça não encontrada' });
                }
            }
        });
    }
    static excluirPeca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield PecaService_1.PecaService.excluirPeca(req.params.id);
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
exports.PecaController = PecaController;
