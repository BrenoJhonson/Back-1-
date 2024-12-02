# Sistema de Gestão de Vendedores, Clientes e Peças para Motos

Este é um sistema de gerenciamento de dados de vendedores, clientes e peças para uma loja de motos, utilizando **Node.js**, **Express**, e **Sequelize** com um banco de dados **PostgreSQL**. A API permite realizar operações CRUD (Create, Read, Update, Delete) para vendedores, clientes e peças, com validações para garantir que os dados inseridos sejam válidos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js.
- **Sequelize**: ORM (Object-Relational Mapper) para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **UUID**: Identificadores exclusivos para cada registro.
- **TypeScript**: Para tipagem estática e melhor organização do código.

## Estrutura do Projeto

A API é organizada em um modelo **MVC (Model-View-Controller)**:

- **Models**: Contém as definições das tabelas no banco de dados (clientes, vendedores e peças).
- **Controllers**: Contém a lógica para lidar com as requisições HTTP.
- **Services**: Contém a lógica de interação com o banco de dados e regras de negócio.
- **Routes**: Define as rotas da API.
  
## Funcionalidades

### **Clientes**
- **Criar cliente** (`POST /clientes`)
- **Listar clientes** (`GET /clientes`)
- **Atualizar cliente** (`PUT /clientes/:id`)
- **Atualizar parcialmente cliente** (`PATCH /clientes/:id`)
- **Excluir cliente** (`DELETE /clientes/:id`)

### **Vendedores**
- **Criar vendedor** (`POST /vendedores`)
- **Listar vendedores** (`GET /vendedores`)
- **Atualizar vendedor** (`PUT /vendedores/:id`)
- **Atualizar parcialmente vendedor** (`PATCH /vendedores/:id`)
- **Excluir vendedor** (`DELETE /vendedores/:id`)

### **Peças**
- **Criar peça** (`POST /pecas`)
- **Listar peças** (`GET /pecas`)
- **Atualizar peça** (`PUT /pecas/:id`)
- **Atualizar parcialmente peça** (`PATCH /pecas/:id`)
- **Excluir peça** (`DELETE /pecas/:id`)

## Endpoints

### **Clientes**

- **POST /clientes** - Cria um novo cliente.
  - Exemplo de body:
    ```json
    {
      "nome_cliente": "João Silva",
      "email_cliente": "joao.silva@example.com",
      "telefone_cliente": "11987654321",
      "endereco_cliente": "Rua A, 123",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01000-000"
    }
    ```

- **GET /clientes** - Lista todos os clientes.
  
- **PUT /clientes/:id** - Atualiza completamente um cliente existente.

- **PATCH /clientes/:id** - Atualiza parcialmente um cliente.
  
- **DELETE /clientes/:id** - Exclui um cliente.

### **Vendedores**

- **POST /vendedores** - Cria um novo vendedor.
  - Exemplo de body:
    ```json
    {
      "nome_vendedor": "Bruno Rogerio",
      "email_vendedor": "bruno.rogerio@exemplo.com",
      "telefone": "31987654321"
    }
    ```

- **GET /vendedores** - Lista todos os vendedores.
  
- **PUT /vendedores/:id** - Atualiza completamente um vendedor existente.

- **PATCH /vendedores/:id** - Atualiza parcialmente um vendedor.
  
- **DELETE /vendedores/:id** - Exclui um vendedor.

### **Peças**

- **POST /pecas** - Cria uma nova peça.
  - Exemplo de body:
    ```json
    {
      "nome_peca": "Pneu",
      "descricao_peca": "Pneu para motocicleta",
      "preco_peca": 150.00
    }
    ```

- **GET /pecas** - Lista todas as peças.
  
- **PUT /pecas/:id** - Atualiza completamente uma peça existente.

- **PATCH /pecas/:id** - Atualiza parcialmente uma peça.
  
- **DELETE /pecas/:id** - Exclui uma peça.

## Como Rodar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/BrenoJhonson/Back-1-.git

2. **Instalar as dependências** Navegue até o diretório e isntale as dependências:
    ```bash
    cd Back-1-
    npm intall

3. **Configuração do Banco de Dados** Certifique-se de ter o PostgreSQL instalado e configurado. Crie um banco de dados para o projeto e configure as credenciais no arquivo .env.        

4. **Rodar a aplicação** Para iniciar a API, use o comando:
    ```bash
    npm start

O servidor será iniciado em http://localhost:3003.

## Estrutura de Diretórios
    ```bash
    .
├── controllers/            # Lógica de controle para as rotas
│   ├── ClienteController.ts
│   ├── VendedorController.ts
│   └── PecaController.ts
├── models/                 # Definição dos modelos e tabelas
│   ├── Cliente.ts
│   ├── Vendedor.ts
│   └── Peca.ts
├── services/               # Lógica de interação com o banco de dados
│   ├── ClienteService.ts
│   ├── VendedorService.ts
│   └── PecaService.ts
├── routes/                 # Definição das rotas da API
│   ├── clienteRoutes.ts
│   ├── vendedorRoutes.ts
│   └── pecaRoutes.ts
├── END/                    # Configuração do banco de dados
│   └── connection.ts
├── .env                    # Variáveis de ambiente (não compartilhe este arquivo)
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
└── README.md               # Este arquivo

