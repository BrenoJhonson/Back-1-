import { Cliente } from '../models/Cliente';

export class ClienteService {
    public static async listarClientes() {
        try {
            return await Cliente.findAll();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao listar clientes: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao listar clientes.');
            }
        }
    }

    public static async criarCliente(clienteData: any) {
        try {
            if (!clienteData.email_cliente || !clienteData.nome_cliente) {
                throw new Error('Nome e email são obrigatórios');
            }
            return await Cliente.create(clienteData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao criar cliente: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao criar cliente.');
            }
        }
    }

    public static async atualizarClienteParcial(id: string, clienteData: any) {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }

            await cliente.update(clienteData);

            return cliente;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao atualizar cliente: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao atualizar cliente.');
            }
        }
    }

    public static async excluirCliente(id: string) {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }

            await cliente.destroy();
            return cliente;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao excluir cliente: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao excluir cliente');
            }
        }
    }
}
