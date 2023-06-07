const { MongoClient }=require('mongodb');
const {faker}=require('@faker-js/faker');

const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
//Listar una propiedad del documento
async function eliminarFicha(nombreImagen){
 const client=new MongoClient(uri);

 try{
    await client.connect();

    const resul=await client.db('Publigrafit').collection('ficha_tecnica').deleteOne({imagen_producto_final:nombreImagen})

    console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
    }catch (e){
    console.error(e);
    }finally{
    await client.close();
    }
}
eliminarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1156.jpg");

// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function eliminarFicha(nombreImagen){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').deleteMany({imagen_producto_final:nombreImagen})

//     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// eliminarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/630.jpg");