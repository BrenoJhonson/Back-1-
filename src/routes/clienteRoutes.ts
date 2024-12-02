import { Router } from 'express';
import { ClienteController } from '../controllers/ClienteController';

export const clienteRoutes = Router();

clienteRoutes.get('/clientes', ClienteController.listarClientes);
clienteRoutes.patch('/clientes/:id', ClienteController.atualizarClienteParcial);
clienteRoutes.post('/clientes', ClienteController.criarCliente);
clienteRoutes.delete('/clientes/:id', ClienteController.excluirCliente);
