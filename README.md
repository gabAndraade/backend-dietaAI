# 🥗 Dieta.AI — Backend

Backend da aplicação **Dieta.AI**, responsável pelo gerenciamento da API da plataforma, incluindo processamento de requisições, integração com IA, geração de dietas e comunicação com o front-end.

O projeto foi desenvolvido utilizando uma arquitetura simples e escalável, focada em performance, organização de rotas e tipagem segura com TypeScript.

---

# Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify
- @fastify/cors
- dotenv

---

# Funcionalidades

- Estruturação de API REST
- Geração de dietas utilizando IA
- Integração com front-end React Native
- Tratamento centralizado de erros
- Configuração de variáveis de ambiente
- Middleware de CORS
- Organização modular de rotas

---

# Arquitetura do Projeto

O backend segue uma estrutura organizada e modular, separando responsabilidades para facilitar manutenção e escalabilidade.

## Estrutura principal

```bash
src/
 ├── routes/
 ├── server.ts
 └── ...
```

---

# Configuração do servidor

O arquivo `server.ts` é responsável por:

- Criar a instância do Fastify
- Configurar variáveis de ambiente com dotenv
- Registrar plugins e middlewares
- Configurar CORS
- Centralizar o tratamento de erros
- Registrar as rotas da aplicação
- Inicializar o servidor

---

# Tratamento de erros

A aplicação possui um handler global para tratamento de exceções, retornando respostas padronizadas em formato JSON.

Exemplo:

```json
{
  "message": "Descrição do erro"
}
```

---

# 🌐 Inicialização do servidor

```ts
app.listen({
  port: 9001,
  host: "0.0.0.0"
})
```

O servidor é iniciado localmente na porta `9001`.

---

# 📦 Instalação e execução

## Clone o repositório

```bash
git clone <url-do-repositorio>
```

## Instale as dependências

```bash
npm install
```

## Execute o projeto

```bash
npm run dev
```

---

# Integração

Este backend foi desenvolvido para comunicação com o aplicativo mobile do projeto **Dieta.AI**, criado em React Native.

---

# Autor

Gabriel Andrade

- GitHub: https://github.com/gabAndraade
- LinkedIn: https://www.linkedin.com/in/gabriel-carvalho-a028772b3/
