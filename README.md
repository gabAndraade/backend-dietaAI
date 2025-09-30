# backend-dietaAI

Backend da aplicação DietaAI, responsável por prover a API que o front-end consumirá (cadastros, geração de dieta, etc.).

🛠 Tecnologias utilizadas
	•	Node.js + TypeScript
	•	Fastify (framework de servidor HTTP)  ￼
	•	@fastify/cors para permitir requisições de front-end (CORS)  ￼
	•	dotenv para gerenciamento de variáveis de ambiente  ￼
	•	Rotas centralizadas (arquivo routes)

## Estrutura

📁 O que tem no arquivo server.ts

	•	Criação da instância do Fastify com logger: true  ￼
	•	Configuração das variáveis de ambiente com dotenv.config()  ￼
	•	Tratador de erro customizado: todas as exceções serão convertidas em resposta com código 400 e um JSON { message: error.message }  ￼
	•	Registro de plugins/middlewares:
	•	cors (para habilitar CORS)  ￼
	•	routes (rotas da aplicação)  ￼
	•	Inicialização do servidor via app.listen({ port: 9001, host: "0.0.0.0" })  
