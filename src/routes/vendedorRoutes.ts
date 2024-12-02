import { Router } from 'express';
import { VendedorController } from '../controllers/VendedorController';

export const vendedorRoutes = Router();

vendedorRoutes.get('/vendedores', VendedorController.listarVendedores);
vendedorRoutes.post('/vendedores', VendedorController.criarVendedor);
vendedorRoutes.put('/vendedores/:id', VendedorController.atualizarVendedor);
vendedorRoutes.patch('/vendedores/:id', VendedorController.atualizarVendedorParcial);
vendedorRoutes.delete('/vendedores/:id', VendedorController.excluirVendedor);
