import { Vendedor } from '../models/Vendedor';

export class VendedorService {
    public static async listarVendedores() {
        try {
            return await Vendedor.findAll();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao listar vendedores: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao listar vendedores');
            }
        }
    }

    public static async criarVendedor(vendedorData: any) {
        try {
            const vendedor = await Vendedor.create(vendedorData);
            return vendedor;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao criar vendedor: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao criar vendedor');
            }
        }
    }

    public static async atualizarVendedor(id: string, vendedorData: any) {
        try {
            const vendedor = await Vendedor.findByPk(id);
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }
            return await vendedor.update(vendedorData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao atualizar vendedor: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao atualizar vendedor');
            }
        }
    }

    public static async atualizarVendedorParcial(id: string, vendedorData: any) {
        try {
            const vendedor = await Vendedor.findByPk(id);
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }
    
            await vendedor.update(vendedorData);
    
            return await Vendedor.findByPk(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao atualizar vendedor: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao atualizar vendedor');
            }
        }
    }
    
    public static async excluirVendedor(id: string) {
        try {
            const vendedor = await Vendedor.findByPk(id);
            if (!vendedor) {
                throw new Error('Vendedor não encontrado');
            }
            await vendedor.destroy();
            return vendedor;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Erro ao excluir vendedor: ' + error.message);
            } else {
                throw new Error('Erro desconhecido ao excluir vendedor');
            }
        }
    }
}
