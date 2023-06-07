// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function actualizarFicha(nombreImagen, campoAtualizar){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').updateOne({imagen_producto_final
//         :nombreImagen },{$set:{detalle: campoAtualizar}})

//     console.log(`${resul.matchedCount} propiedad(s) cumple con el citerio de busqueda`);
//     console.log(`${resul.modifiedCount} propiedad(es) fue(ron) actulizada(s)`);

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// actualizarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/630.jpg","movistar");

//Actualizar varios datos de la coleccion con un mismo link
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function actualizarFicha(nombreImagen, campoAtualizar){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').updateMany({imagen_producto_final
//         :nombreImagen },{$set:{detalle: campoAtualizar}})

//     console.log(`${resul.matchedCount} propiedad(s) cumple con el citerio de busqueda`);
//     console.log(`${resul.modifiedCount} propiedad(es) fue(ron) actulizada(s)`);

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// actualizarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/630.jpg","movistar");