# VUTTR - Very Usefuls Tools To Remember
	
## Objetivo
 A tarefa é construir o Front-End para a API e banco de dados fornecidados na aplicação [VUTTR (Very Useful Tools to Remember)](https://vuttr-shumax.herokuapp.com/). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# User Stories e wireframes

## 1: O(A) usuário(a) deve poder ver a lista de todas as ferramentas cadastradas

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/1-home.png)
 
## 2: O usuário deve poder adicionar uma nova ferramenta

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/2-add-tool.png)

## 3: O usuário deve poder remover uma ferramenta

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/3-remove-tool.png)

## 4: O usuário deve poder buscar ferramentas dinamicamente (global ou utilizando apenas tags)

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/4-search.png)

## Itens Extras
 - Migrations para configuração do banco de dados utilizado;
 - Testes;
 - Autenticação e autorização ( JWT );
 - Deploy ( Heroku );

## Dependências Necessárias
```json
{
	"bcryptjs": "^2.4.3",
	"body-parser": "^1.19.0",
	"cross-env": "^7.0.2",
	"express": "^4.17.1",
	"jest": "^26.4.2",
	"jsonwebtoken": "^8.5.1",
	"mysql2": "^2.1.0",
	"sequelize": "^6.3.4",
	"sequelize-cli": "^6.2.0",
	"supertest": "^4.0.2"
}
```

### Iniciar o projeto:
* Instale as dependências do projeto com o comando *yarn install* ou *npm install*.
* Inicie o projeto com comando *yarn start* ou *npm start* / *npm run start*.

### Requisitos:
* **[Node v12.18.3](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
* **[Create React App](https://github.com/facebook/create-react-app)**