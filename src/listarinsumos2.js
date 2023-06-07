// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos2(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumosarray').findOne({nombre:nuevoInsumo});
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos2("Steel");

//Listar todos los documentos de la base
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos2(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumosarray').find().toArray();
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos2();
//Lostar los documentos pero ahora con un limit
// 
//Listar los documentos pero con un sort
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos2(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumosarray').find().sort({nombre:1});
//     const consult=await resul.toArray()
//     console.log(consult);

    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos2();