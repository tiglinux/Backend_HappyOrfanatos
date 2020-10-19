

/*
   Code by : Tiago Ribeiro Santos
   Email : tiago.programador@hotmail.com
   Site :  www.tiagoprogramador.6te.net
*/

import express from 'express';
import { getRepository } from 'typeorm';
import Orfanato from './models/Orfanato';

import '../database/connection';

const app = express();

app.use(express.json()); //Usa expresse como JSON;

//Rota - /mostrar
//Recurso -mostrar
//Métodos HTTP => GET,POST,PUT,DELETE;
//Parâmetros = 

//GET -> BUSCAR UMA INFORMAÇÃO(lista,item)
//POST -> CRIANDO UMA INFORMAÇÃO
//PUT -> EDITANDO UMA INFORMAÇÃO
//DELETE -> DELETANDO UMA INFORMAÇÃO


//Query Params-> http://localhost:3333/users?search=Tiago
//Route Params -> http://localhost:3333/users/1 (Identificar um recurso) --> Identificaria um usuário com ID 1

//Rota  (Função que quando utilizar /mostrar executa o que está dentro)
app.post('/orphnages', async(request, response) => {
   const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
   } = request.body;

   const orphnagesRepository = getRepository(Orfanato);

   const orphnage = orphnagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
   });

   await orphnagesRepository.save(orphnage);

   return response.json({ message: 'Resposta recebida com sucesso!' });
})

//Escrevendo Queries com JS

/* knex('users').select('*').where('name','Tiago');//SELECT * FROM users WHERE 'name =Tiago'; */


//Users
//User

//3 users
//User User User

app.listen(3333);   ///Escuta na porta 3333;

