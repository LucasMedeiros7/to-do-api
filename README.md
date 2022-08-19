# 📚 ToDo API - Resilia

Desenvolvimento de uma API Rest para um aplicativo de lista de tarefas.

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o Postgres.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## 🤔 Instalação da Aplicação

Abra o terminal de sua preferência e rode os comandos abaixo:

Clonando o repositório:

```
git clone git@github.com:LucasMedeiros7/toDoAPI.git
```

Entrando na pasta:

```
cd ToDoAPI
```

Instalando os pacotes:

```
npm install
```

Rodando o projeto:

```
npm run dev
```

## 🚚 Rotas implementadas

## Usuário

- **GET /users**

  Esquema da resposta

  ```json
  [
    {
      "id": 1,
      "nome": "Eugênio Oliveira",
      "email": "eugenio.oliveira@bol.com.br"
    },
    {
      "id": 2,
      "nome": "Olívia Ribeiro",
      "email": "olivia.ribeiro@gmail.com"
    },
    {
      "id": 3,
      "nome": "Mirtes Faria Lima",
      "email": "mirtes_fl@yahoo.com"
    }
  ]
  ```

- **GET /users/id**

  Esquema da resposta

  ```json
  [
    {
      "id": 1,
      "nome": "Eugênio Oliveira",
      "email": "eugenio.oliveira@bol.com.br"
    }
  ]
  ```

- **POST /users**

  Esquema da requisição

  ```json
  {
    "nome": "NomeExemplo",
    "email": "exemplo@example.com",
    "senha": "senhaBoladona123456"
  }
  ```

- **PUT /users/id**

  Esquema da requisição

  ```json
  {
    "nome": "Novo omeExemplo",
    "email": "exemplo@example.com",
    "senha": "@NovasenhaBoladona123456"
  }
  ```

  Esquema da resposta

  ```json
  {
    "message": "User updated"
  }
  ```

- **DELETE /users/id**

  Esquema da resposta

  ```json
  {
    "message": "User deleted"
  }
  ```

## Tarefas

- **GET /tasks**

  Esquema da resposta

  ```json
  [
    {
      "id": 1,
      "titulo": "Yoga",
      "descricao": "Fazer yoga segunda e quarta",
      "status": "Continuo",
      "datacriacao": "2021-01-10",
      "id_usuario": 2
    },
    {
      "id": 2,
      "titulo": "Médico",
      "descricao": "Consulta com Dr. Ayrton sexta",
      "status": "TODO",
      "datacriacao": "2021-01-13",
      "id_usuario": 1
    },
    {
      "id": 3,
      "titulo": "Pagar contas",
      "descricao": "Pagar boletos de água e luz",
      "status": "DOING",
      "datacriacao": "2021-01-02",
      "id_usuario": 2
    }
  ]
  ```

- **GET /tasks/id**

  Esquema da resposta

  ```json
  [
    {
      "id": 1,
      "titulo": "Yoga",
      "descricao": "Fazer yoga segunda e quarta",
      "status": "Continuo",
      "datacriacao": "2021-01-10",
      "id_usuario": 2
    }
  ]
  ```

- **POST /tasks**

  Esquema da requisição

  ```json
  {
    "titulo": "Yoga",
    "descricao": "Fazer yoga segunda e quarta",
    "status": "Continuo",
    "datacriacao": "2021-01-10",
    "id_usuario": 2
  }
  ```

- **PUT /tasks/id**

  Esquema da requisição

  ```json
  {
    "titulo": "Yoga",
    "descricao": "Fazer yoga segunda e quarta",
    "status": "Feito",
    "datacriacao": "2021-01-10",
    "id_usuario": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    "message": "Task updated"
  }
  ```

- **DELETE /tasks/id**

  Esquema da resposta

  ```json
  {
    "message": "Task deleted"
  }
  ```
