// const express = require('express')
import express from "express";

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000;

app.post('/api/users', (req, res) => {

  console.log('-------------------');
  console.log(req.body);
  console.log('-------------------');

  // recuperar la info a guardar en bd
  // Validaciones
  // tratar la informacion
  // guardar en bd
  // finalmente siempre mi api debe devolver una respuesta


  res.status(200).send('CREATE USER')
})

app.get('/api/users', (req, res) => {
  res.status(200).send('GET USERS')
})

app.put('/api/users', (req, res) => {

  console.log('-------------------');
  console.log(req.body);
  console.log('-------------------');

  res.status(200).send('UPDATE USER')
})

app.delete('/api/users/:id', (req, res) => {
  res.status(200).send('DELETE USER ' + req.params.id)
})

app.listen(PORT, () => {
  // console.log("Server is running on port" + PORT);
	console.log(`Server is running on port ${PORT}`);
});
