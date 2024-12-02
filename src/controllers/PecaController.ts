import { Request, Response } from 'express';
import { PecaService } from '../services/PecaService';

export class PecaController {   
    public static async listarPecas(req: Request, res: Response) {
        try {
            const pecas = await PecaService.listarPecas();
            res.json(pecas);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao listar peças: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao listar peças' });
            }
        }
    }

    public static async criarPeca(req: Request, res: Response) {
        try {
            const { nome_peca, preco, estoque, categoria, marca, modelo_moto } = req.body;

            if (!nome_peca || !preco || !estoque || !categoria || !marca || !modelo_moto) {
                throw new Error('Nome da peça, categoria, marca, modelo da moto e preço são obrigatórios');
            }

            if (typeof nome_peca !== 'string') {
                throw new Error('Nome da peça deve ser uma string');
            }
            if (typeof categoria !== 'string') {
                throw new Error('Categoria deve ser uma string');
            }
            if (typeof marca !== 'string') {
                throw new Error('Marca deve ser uma string');
            }
            if (typeof modelo_moto !== 'string') {
                throw new Error('Modelo da moto deve ser uma string');
            }
            if (isNaN(preco)) {
                throw new Error('Preço deve ser um número');
            }
            if (isNaN(estoque)) {
                throw new Error('Estoque deve ser um número');
            }

            const peca = await PecaService.criarPeca(req.body);
            res.status(201).json(peca);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao criar peça: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao criar peça' });
            }
        }
    }

    public static async atualizarPeca(req: Request, res: Response) {
        const pecaId = req.params.id;
        const pecaData = req.body;

        try {
            if (!pecaData.nome_peca || !pecaData.preco || !pecaData.estoque || !pecaData.categoria || !pecaData.marca || !pecaData.modelo_moto) {
                throw new Error('Nome da peça, categoria, marca, modelo da moto e preço são obrigatórios');
            }

            if (typeof pecaData.nome_peca !== 'string') {
                throw new Error('Nome da peça deve ser uma string');
            }
            if (typeof pecaData.categoria !== 'string') {
                throw new Error('Categoria deve ser uma string');
            }
            if (typeof pecaData.marca !== 'string') {
                throw new Error('Marca deve ser uma string');
            }
            if (typeof pecaData.modelo_moto !== 'string') {
                throw new Error('Modelo da moto deve ser uma string');
            }
            if (isNaN(pecaData.preco)) {
                throw new Error('Preço deve ser um número');
            }
            if (isNaN(pecaData.estoque)) {
                throw new Error('Estoque deve ser um número');
            }

            const peca = await PecaService.atualizarPeca(pecaId, pecaData);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }

            res.json(peca);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao atualizar peça: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao atualizar peça' });
            }
        }
    }

    public static async atualizarPecaParcial(req: Request, res: Response) {
        const pecaId = req.params.id;
        const pecaData = req.body;

        try {
            if (pecaData.nome_peca && typeof pecaData.nome_peca !== 'string') {
                throw new Error('Nome da peça deve ser uma string');
            }
            if (pecaData.categoria && typeof pecaData.categoria !== 'string') {
                throw new Error('Categoria deve ser uma string');
            }
            if (pecaData.marca && typeof pecaData.marca !== 'string') {
                throw new Error('Marca deve ser uma string');
            }
            if (pecaData.modelo_moto && typeof pecaData.modelo_moto !== 'string') {
                throw new Error('Modelo da moto deve ser uma string');
            }
            if (pecaData.preco && isNaN(pecaData.preco)) {
                throw new Error('Preço deve ser um número');
            }
            if (pecaData.estoque && isNaN(pecaData.estoque)) {
                throw new Error('Estoque deve ser um número');
            }

            const peca = await PecaService.atualizarPeca(pecaId, pecaData);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }

            res.json(peca);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao atualizar peça parcialmente: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao atualizar peça parcialmente' });
            }
        }
    }

    public static async excluirPeca(req: Request, res: Response) {
        const pecaId = req.params.id;

        try {
            const peca = await PecaService.excluirPeca(pecaId);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }

            res.status(200).json({ message: 'Cliente excluído com sucesso' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao excluir peça: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao excluir peça' });
            }
        }
    }
}
