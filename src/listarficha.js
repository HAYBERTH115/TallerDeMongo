// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarFicha(nuevaImagen){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').findOne({imagen_producto_final:nuevaImagen});
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg");

// Listar todos los documentos de la base
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarFicha(nuevoImagen){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').find().toArray();
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarFicha();
// //Listar los documentos pero con un sort
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarFicha(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').find().sort({detalle:1});
//     const consult=await resul.toArray()
//     console.log(consult);

    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarFicha();