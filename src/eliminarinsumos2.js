// //Eliminar un elemento con sus atrubutos por su nombre.
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function eliminarInsumos(nombreInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumosarray').deleteOne({nombre:nombreInsumo})

//     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// eliminarInsumos("Cotton");

// //Eliminar varios.
// // const { MongoClient }=require('mongodb');
// // const {faker}=require('@faker-js/faker');

// // const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// // //Listar una propiedad del documento
// // async function eliminarInsumos(nombreInsumo){
// //  const client=new MongoClient(uri);

// //  try{
// //     await client.connect();

// //     const resul=await client.db('Publigrafit').collection('insumosarray').deleteMany({nombre:nombreInsumo})

// //     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
// //     }catch (e){
// //     console.error(e);
// //     }finally{
// //     await client.close();
// //     }
// // }
// // eliminarInsumos("Frozen");




