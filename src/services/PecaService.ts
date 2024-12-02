import { Peca } from '../models/Peca';

export class PecaService {
    public static async listarPecas() {
        try {
            return await Peca.findAll();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao listar peças: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao listar peças');
            }
        }
    }

    public static async criarPeca(pecaData: any) {
        try {
            const { nome_peca, preco, estoque, categoria, marca, modelo_moto } = pecaData;

            if (!nome_peca || !preco || !estoque || !categoria || !marca || !modelo_moto) {
                throw new Error('Nome da peça, categoria, marca, modelo da moto e preço são obrigatórios');
            }

            return await Peca.create(pecaData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao criar peça: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao criar peça');
            }
        }
    }

    public static async atualizarPeca(id: string, pecaData: any) {
        try {
            const peca = await Peca.findByPk(id);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }
            return await peca.update(pecaData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao atualizar peça: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao atualizar peça');
            }
        }
    }

    public static async atualizarPecaParcial(id: string, pecaData: any) {
        try {
            const peca = await Peca.findByPk(id);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }
            return await peca.update(pecaData, { fields: Object.keys(pecaData) });  // Update only specified fields
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao atualizar peça parcialmente: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao atualizar peça parcialmente');
            }
        }
    }

    public static async excluirPeca(id: string) {
        try {
            const peca = await Peca.findByPk(id);
            if (!peca) {
                throw new Error('Peça não encontrada');
            }
            await peca.destroy();
            return peca;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao excluir peça: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao excluir peça');
            }
        }
    }
}
