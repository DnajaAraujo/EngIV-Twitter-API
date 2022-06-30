import express from 'express';
import cors from 'cors';
import './src/infrastructure/persistence/firestore';
import { TweetsController } from './src/presentation/controllers/TweetsController';
import { UsersController } from './src/presentation/controllers/UsersController';

const app = express();

app.use(express.json());
app.use(cors());

const tweetsController = new TweetsController();
const usersController = new UsersController();

const port = 4000;


// Listar todos os tweets
app.get('/tweets', tweetsController.getAll);

// Listar um tweet
app.get('/tweets/:id', tweetsController.getOne);

// Adicionar tweet
app.post('/tweets/create', tweetsController.createTweet);

// Alterar dados gerais do tweet
app.put('/tweets/update/:id', tweetsController.updateTweet);

// Deletar tweet
app.delete("/tweets/delete/:id", tweetsController.deleteTweet);

// Incluir comentário 
app.post('/tweets/comment/:id', tweetsController.commentTweet);

// Dar like
app.put('/tweets/like/:id', tweetsController.likeTweet);


// ******************************************************************


// Listar usuários
app.get('/users', usersController.getAll);

// Listar um usuário
app.get('/users/:id', usersController.getOne);

// Adicionar usuário
app.post('/users/create', usersController.createUser);

// Alterar dados gerais do usuário
app.put('/users/update/:id', usersController.updateUser);

// Deletar usuário
app.get('/users/delete/:id', usersController.deleteUser);




app.listen(port, () => {
    console.log("App running *4000...")
})
