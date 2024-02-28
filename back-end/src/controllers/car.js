//Importando a Prisma Cliente
import prisma from '../database/client'

const controller = {} //Objeto vazio
controller.create = async function(req, res){

 try {
 await prisma.car.create({ data: req.body})

 //HTTP 201: Create = chamada do prisma na tabela car e criar uma tabela
 res.status(201).end() // Resposta ok para o front informando que a requisição foi Ok
 }       
 catch(error) {
    console.log(error)
 //HTPP 500: Internal Server Error
 res.status(500).end() // Resposta "não ok" para o front informando que a requisição não foi efetuada
 }

}

export default controller
