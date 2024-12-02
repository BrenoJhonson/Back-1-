import { Request, Response } from 'express';
import { ClienteService } from '../services/ClienteService';

export class ClienteController {
    public static async listarClientes(req: Request, res: Response) {
        try {
            const clientes = await ClienteService.listarClientes();
            res.json(clientes);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao listar clientes: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido' });
            }
        }
    }

    public static async criarCliente(req: Request, res: Response) {
        try {
            const { nome_cliente, email_cliente, telefone_cliente, endereco_cliente, cidade, estado, cep } = req.body;

            if (!nome_cliente || !email_cliente) {
                throw new Error('Nome e email são obrigatórios');
            }

            if (typeof nome_cliente !== 'string') {
                throw new Error('O nome do cliente deve ser uma string');
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email_cliente)) {
                throw new Error('O email informado é inválido');
            }

            if (telefone_cliente && !/^\d{11}$/.test(telefone_cliente)) {
                throw new Error('O telefone deve ter 11 dígitos');
            }

            if (endereco_cliente && typeof endereco_cliente !== 'string') {
                throw new Error('O endereço do cliente deve ser uma string');
            }

            if (cidade && typeof cidade !== 'string') {
                throw new Error('A cidade deve ser uma string');
            }

            if (estado && typeof estado !== 'string') {
                throw new Error('O estado deve ser uma string');
            }

            if (cep && typeof cep !== 'string') {
                throw new Error('O CEP deve ser uma string');
            }

            const cliente = await ClienteService.criarCliente(req.body);
            res.status(201).json(cliente);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao criar cliente' });
            }
        }
    }

    public static async atualizarClienteParcial(req: Request, res: Response) {
        try {
            const { endereco_cliente, cidade, estado, cep } = req.body;

            // Verificações de tipo para os campos que podem ser atualizados parcialmente
            if (endereco_cliente && typeof endereco_cliente !== 'string') {
                throw new Error('O endereço do cliente deve ser uma string');
            }

            if (cidade && typeof cidade !== 'string') {
                throw new Error('A cidade deve ser uma string');
            }

            if (estado && typeof estado !== 'string') {
                throw new Error('O estado deve ser uma string');
            }

            if (cep && typeof cep !== 'string') {
                throw new Error('O CEP deve ser uma string');
            }

            const cliente = await ClienteService.atualizarClienteParcial(req.params.id, req.body);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }
            res.json(cliente);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(404).json({ error: 'Erro desconhecido ao atualizar parcialmente o cliente' });
            }
        }
    }

    public static async excluirCliente(req: Request, res: Response) {
        const clienteId = req.params.id;

        try {
            const cliente = await ClienteService.excluirCliente(clienteId);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }

            res.status(200).json({ message: 'Cliente excluído com sucesso' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: 'Erro ao excluir cliente: ' + error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao excluir cliente' });
            }
        }
    }
}
