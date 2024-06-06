import { Router } from "express";
import { getUsers, createUsers, deleteUser,pegarPorId, update } from "./controllers/productController.js";
import { getUsers1, createUsers1, deleteUser1,pegarPorId1, update1 } from "./controllers/fornecedorController.js";
import { getUsers2, createUsers2, deleteUser2, pegarPorId2, update2  } from "./controllers/lojaControllers.js";

 const ROUTES = Router()


ROUTES.get('/produtos', getUsers)
ROUTES.get('/produtos/:_id', pegarPorId)
ROUTES.put('/produtos/:_id', update)
ROUTES.post('/produtos',createUsers)
ROUTES.delete('/produtos/:id',deleteUser)

ROUTES.get('/fornecedor', getUsers1)
ROUTES.get('/fornecedor/:_id', pegarPorId1)
ROUTES.put('/fornecedor/:_id', update1)
ROUTES.post('/fornecedor',createUsers1)
ROUTES.delete('/fornecedor/:id',deleteUser1)

ROUTES.get('/loja', getUsers2)
ROUTES.get('/loja/:_id', pegarPorId2)
ROUTES.put('/loja/:_id', update2)
ROUTES.post('/loja',createUsers2)
ROUTES.delete('/loja/:id',deleteUser2)

export default ROUTES