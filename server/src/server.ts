import express from "express";

const app = express();

//GET: buscar ou listar uma informação
//POST: criar uma nova informação
//PUT: atualizar uma informação existente
//DELETE: deletar uma informação existente

app.post("/users", (request, response) => {
  const users = [
    { name: "Diego", age: 25 },
    { name: "juan", age: 23 },
  ];

  return response.json([users]);
});

app.listen(3333);
