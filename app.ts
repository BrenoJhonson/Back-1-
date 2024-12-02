import express from 'express';
import { clienteRoutes } from './src/routes/clienteRoutes';
import { vendedorRoutes } from './src/routes/vendedorRoutes';
import { pecaRoutes } from './src/routes/pecaRoutes';

const app = express();

app.use(express.json());

app.use(clienteRoutes);
app.use(vendedorRoutes);
app.use(pecaRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof SyntaxError && err.message.includes("Unexpected token")) {
        res.status(400).json({
            error: 'Erro de sintaxe: JSON malformado. Por favor, verifique se os dados estão corretamente formatados.',
        });
    } else {
        next(err);
    }
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack); 
    res.status(500).json({ error: 'Erro interno do servidor. Tente novamente mais tarde.' });
});

app.listen(3003, () => console.log('Servidor rodando na porta 3003'));
