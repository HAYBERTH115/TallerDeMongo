// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function actualizarInsumos(nombreInsumo, campoAtualizar){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').updateOne({nombre:nombreInsumo },{$set:{proveedor: campoAtualizar}})

//     console.log(`${resul.matchedCount} propiedad(s) cumple con el citerio de busqueda`);
//     console.log(`${resul.modifiedCount} propiedad(es) fue(ron) actulizada(s)`);

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// actualizarInsumos("Hayberth","movistar");
// //Este actualizar sive para todos los que tengan el mismo nombre.
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function actualizarInsumos(nombreInsumo, campoAtualizar){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').updateMany({nombre:nombreInsumo },{$set:{proveedor: campoAtualizar}})

//     console.log(`${resul.matchedCount} propiedad(s) cumple con el citerio de busqueda`);
//     console.log(`${resul.modifiedCount} propiedad(es) fue(ron) actulizada(s)`);

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// actualizarInsumos("Granite","Homecenter");

