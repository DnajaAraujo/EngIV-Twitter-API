# Atividade: Twitter-API (back-end)

- Prot�tipo de API do Twitter;

- Utiliza Arquitetura REST e Clean DDD;

- Utiliza o Firebase Firestore como banco de dados;
---

### Rotas:

#### Tweets:
  - Listar todos os tweets | **/tweets**
  - Listar um tweet | **/tweets/:id**
  - Adicionar tweet | **/tweets/create**
  - Alterar dados gerais do tweet | **/tweets/update/:id**
  - Deletar tweet | **/tweets/delete/:id**
  - Incluir coment�rio | **/tweets/comment/:id**
  - Dar like | **/tweets/like/:id**

#### Users:
  - Listar todos os usu�rios | **/users**
  - Listar um usu�rio | **/users/:id**
  - Adicionar usu�rio | **/users/create**
  - Alterar dados gerais do usu�rio | **/users/update/:id**
  - Deletar usu�rio | **/users/delete/:id**

---

### Classes Principais:


![](img/classes.jpg)

- Para rodar, digite "**yarn dev:run**".