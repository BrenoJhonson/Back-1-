import { Router } from 'express';
import { PecaController } from '../controllers/PecaController';

export const pecaRoutes = Router();

pecaRoutes.get('/pecas', PecaController.listarPecas);
pecaRoutes.post('/pecas', PecaController.criarPeca);
pecaRoutes.put('/pecas/:id', PecaController.atualizarPeca);
pecaRoutes.patch('/pecas/:id', PecaController.atualizarPecaParcial);
pecaRoutes.delete('/pecas/:id', PecaController.excluirPeca);
