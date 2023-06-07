// // const { MongoClient }=require('mongodb');
// // const {faker}=require('@faker-js/faker');

// // const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// // //Listar una propiedad del documento
// // async function listarInsumos(nuevoInsumo){
// //  const client=new MongoClient(uri);

// //  try{
// //     await client.connect();

// //     const resul=await client.db('Publigrafit').collection('insumos').findOne({nombre:nuevoInsumo});
// //     if(resul){
// //         console.log(resul)

// //     }
    

// //     }catch (e){
// //     console.error(e);
// //     }finally{
// //     await client.close();
// //     }
// // }
// // listarInsumos("Bronze");

// // //Listar todos los documentos de la base
// // const { MongoClient }=require('mongodb');
// // const {faker}=require('@faker-js/faker');

// // const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// // //Listar una propiedad del documento
// // async function listarInsumos(nuevoInsumo){
// //  const client=new MongoClient(uri);

// //  try{
// //     await client.connect();

// //     const resul=await client.db('Publigrafit').collection('insumos').find().toArray();
// //     if(resul){
// //         console.log(resul)

// //     }
    

// //     }catch (e){
// //     console.error(e);
// //     }finally{
// //     await client.close();
// //     }
// // }
// // listarInsumos();

// //Lostar los documentos pero ahora con un limit
// // 
// //Listar los documentos pero con un sort
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').find().sort({nombre:1});
//     const consult=await resul.toArray()
//     console.log(consult);

    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos();


