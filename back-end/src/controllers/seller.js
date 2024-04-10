//Importando a Prisma Cliente
import prisma from '../database/client'

const controller = {} //Objeto vazio


//********CREATE**********/
controller.create = async function(req, res){

 try {
 await prisma.seller.create({ data: req.body})

 //HTTP 201: Create = chamada do prisma na tabela car e criar uma tabela
 res.status(201).end() // Resposta ok para o front informando que a requisição foi Ok

}   
 
catch(error) {
    console.log(error)
 //HTPP 500: Internal Server Error
 res.status(500).end() // Resposta "não ok" para o front informando que a requisição não foi efetuada
 }

}

//********RETRIEVE**********/
controller.retrieveAll = async function (req,res){
   try{
      const result = await prisma.car.findMany()
      //HTTP 200: ok (implícito)
      res.send(result)
   }

   catch(error) {
      console.log(error)
   //HTPP 500: Internal Server Error
   res.status(500).end() // Resposta "não ok" para o front informando que a requisição não foi efetuada
   }
}

//********UNIQUE**********/
controller.retrieveOne = async function (req,res){
   try{
      const result = await prisma.seller.findUnique({
         where: {id: Number(req.params.id)}
      })
      //Encontrou: retorno HTTP 200: ok
      if(result) res.send(result)
      //Não encontrou: retorno HTTP 404:Not Found
   else res.status(404).end()
   }
   catch(error) {
      console.log(error)
   //HTPP 500: Internal Server Error
   res.status(500).end() // Resposta "não ok" para o front informando que a requisição não foi efetuada
   }
}

//********UPDATE**********/
controller.update = async function(req, res){
   try{
      const result = await prisma.seller.update({
         where: {id: Number(req.params.id)},
         data: req.body
      })
      //Encontrou e atualizou: retorna HTTP 204: No content
       if(result) res.status(204).end()
       //Não encontrou (e não atualizou): retorno HTTP 404: Not Found
      else res.status(404).end()
   }
   catch(error) {
      console.log(error)
   //HTPP 500: Internal Server Error
   res.status(500).end() // Resposta "não ok" para o front informando que a requisição não foi efetuada
   }
}

export default controller
