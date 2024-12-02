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
exports.PecaService = void 0;
const Peca_1 = require("../models/Peca");
class PecaService {
    static listarPecas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Peca_1.Peca.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao listar peças: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao listar peças');
                }
            }
        });
    }
    static criarPeca(pecaData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Peca_1.Peca.create(pecaData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao criar peça: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao criar peça');
                }
            }
        });
    }
    static atualizarPeca(id, pecaData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const peca = yield Peca_1.Peca.findByPk(id);
                if (!peca) {
                    throw new Error('Peça não encontrada');
                }
                return yield peca.update(pecaData);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao atualizar peça: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao atualizar peça');
                }
            }
        });
    }
    static excluirPeca(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const peca = yield Peca_1.Peca.findByPk(id);
                if (!peca) {
                    throw new Error('Peça não encontrada');
                }
                yield peca.destroy();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('Erro ao excluir peça: ' + error.message);
                }
                else {
                    throw new Error('Erro desconhecido ao excluir peça');
                }
            }
        });
    }
}
exports.PecaService = PecaService;
