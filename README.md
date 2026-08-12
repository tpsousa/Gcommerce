# DSCommerce

Projeto front-end desenvolvido em **React**, com o objetivo de praticar componentização, roteamento, gerenciamento de estado, autenticação e consumo de API REST em uma aplicação de e-commerce.

A aplicação simula uma loja virtual, permitindo a navegação por produtos, montagem de carrinho de compras, autenticação de usuário e uma área administrativa com CRUD completo.

---

## Tecnologias utilizadas

- **React**
- **React Router** (rotas e navegação)
- **Context API / estado global** (compartilhamento de dados entre componentes)
- **Local Storage** (persistência do carrinho de compras no navegador)
- **Axios / Fetch** (consumo de API REST)
- **CSS Modules / Sass** (estilização dos componentes)

---

## Arquitetura do projeto

A aplicação é organizada em componentes reutilizáveis, seguindo o fluxo:

```
Rotas (React Router)
        ↓
Páginas (Home, Catálogo, Produto, Carrinho, Login, Admin)
        ↓
Componentes (reutilizáveis entre páginas)
        ↓
Serviços (comunicação com a API REST)
```

O estado da aplicação (carrinho, usuário autenticado) é compartilhado de forma global entre os componentes, evitando prop drilling excessivo.

---

## Funcionalidades

### Catálogo de produtos
- Listagem de produtos consumindo API REST
- Página de detalhes de um produto específico
- Navegação por rotas dinâmicas (`/products/:id`)

### Carrinho de compras
- Adição e remoção de itens
- Persistência do carrinho no **Local Storage**, mantendo os itens mesmo após recarregar a página
- Cálculo automático de totais

### Autenticação e controle de acesso
- Tela de login
- Rotas protegidas, restringindo acesso a áreas administrativas para usuários não autenticados

### Área administrativa
- Formulários de cadastro e edição
- CRUD completo de produtos, com validação de campos

### Gerenciamento de estado
- Hooks `useState` e `useEffect` para controle de dados locais e requisições
- Estado global para dados compartilhados entre múltiplos componentes (carrinho, sessão do usuário)

---

## Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado
- Uma API REST de catálogo de produtos rodando (ex: back-end compatível, como o DSCatalog)

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dscommerce.git

# Acesse a pasta do projeto
cd dscommerce

# Instale as dependências
npm install

# Rode a aplicação
npm start
```

A aplicação sobe por padrão em:
```
http://localhost:3000
```

### Configuração da API

Ajuste a URL base da API consumida pelo front-end no arquivo de configuração/variáveis de ambiente do projeto (ex: `.env`):

```
REACT_APP_API_URL=http://localhost:8080
```

---

## Modelo de dados consumido

```
Product
├── id
├── name
├── description
├── price
├── imgUrl
└── categories
```
