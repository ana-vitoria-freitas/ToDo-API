# ToDo API

Implmentando uma API no modelo REST, utilizando Node.js e SQLite.

### Rotas

#### Usuários:
O padrão de usuários que estão inseridos no banco de dados, segue a seguinte forma:
```
{
  "ID": 1,
  "NOME": "Ana",
  "EMAIL": "ana@hotmail.com",
  "SENHA": *********
}
```
Dessa forma, é possível esperar resultados dessa forma, ao seguir as seguintes rotas:

- É possível *listar todos os usuários* apenas utilizando ```GET /user```;
- Para *listar um usuário específico*, basta seguir a rota ```GET /user/<email_usuario>```;
- Para *inserir um usuário* a rota a ser seguida é ```POST /user```, lembrando que as novas informações a serem inseridas devem estar em um ```JSON``` no body da requesição;
-  Para *atualizar um usuário* deve-se utilizar a rota ```PUT /user/<email_usuario>```, e como foi dito acima, as novas informações devem constar no body da requesição;
-  Para *deletar um usuário* é preciso apenas da rota ```DELETE /user```.




