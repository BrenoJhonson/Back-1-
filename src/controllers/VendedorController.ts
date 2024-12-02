import { Request, Response } from 'express';
import { VendedorService } from '../services/VendedorService';

export class VendedorController {
    public static async listarVendedores(req: Request, res: Response) {
        try {
            const vendedores = await VendedorService.listarVendedores();
            res.json(vendedores);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao listar vendedores: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido' });
            }
        }
    }

    public static async criarVendedor(req: Request, res: Response) {
        try {
            const { nome_vendedor, email_vendedor, telefone } = req.body;

            if (!nome_vendedor || !email_vendedor) {
                throw new Error('Nome e email são obrigatórios');
            }

            if (typeof nome_vendedor !== 'string') {
                throw new Error('Nome do vendedor deve ser uma string');
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email_vendedor)) {
                throw new Error('O email informado é inválido');
            }

            if (telefone && !/^\d{11}$/.test(telefone)) {
                throw new Error('O telefone deve ter 11 dígitos');
            }

            const vendedor = await VendedorService.criarVendedor(req.body);
            res.status(201).json(vendedor);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao criar vendedor' });
            }
        }
    }

    public static async atualizarVendedor(req: Request, res: Response) {
        try {
            const { nome_vendedor, email_vendedor, telefone } = req.body;

            if (nome_vendedor && typeof nome_vendedor !== 'string') {
                throw new Error('Nome do vendedor deve ser uma string');
            }

            if (email_vendedor) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email_vendedor)) {
                    throw new Error('O email informado é inválido');
                }
            }

            if (telefone && !/^\d{11}$/.test(telefone)) {
                throw new Error('O telefone deve ter 11 dígitos');
            }

            const vendedor = await VendedorService.atualizarVendedor(req.params.id, req.body);
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }

            res.json(vendedor);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao atualizar vendedor' });
            }
        }
    }

    public static async atualizarVendedorParcial(req: Request, res: Response) {
        try {
            const vendedorId = req.params.id;
            const vendedorData = req.body;
    
            if (vendedorData.nome_vendedor && typeof vendedorData.nome_vendedor !== 'string') {
                throw new Error('O nome do vendedor deve ser uma string');
            }
    
            if (vendedorData.email_vendedor) {
                if (typeof vendedorData.email_vendedor !== 'string') {
                    throw new Error('O e-mail do vendedor deve ser uma string');
                }
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(vendedorData.email_vendedor)) {
                    throw new Error('O e-mail informado é inválido');
                }
            }
    
            if (vendedorData.telefone && !/^\d{11}$/.test(vendedorData.telefone)) {
                throw new Error('O telefone deve ter 11 dígitos');
            }
    
            const vendedor = await VendedorService.atualizarVendedorParcial(vendedorId, vendedorData);
    
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }

            res.json(vendedor);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao atualizar vendedor' });
            }
        }
    }

    public static async excluirVendedor(req: Request, res: Response) {
        try {
            const vendedor = await VendedorService.excluirVendedor(req.params.id);
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }
            res.status(200).json({ message: 'Vendedor excluído com sucesso' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao excluir vendedor: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao excluir vendedor' });
            }
        }
    }
}
