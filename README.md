//En este caso vamos a utilizar maneras de hacer colecciones en la base de datos con su respectivas validaciones.

//const database="Publigrafit" //Esta linea es donde se creo la base de datos//
use('Publigrafit');

// Validacion de primera coleccion la cual seria insumos.
// db.createCollection("insumos", {
//    validator: {
//       $jsonSchema: {
//          required: [  "nombre", "precio", "cantidad","proveedor","estado" ],
//          properties: {
//             nombre: {
//                bsonType: "string",
//                description: "'nombre' es un campo requerido"
//             },
//             precio: {
//                bsonType: "int",
//                description: "'precio' es un campo requerido"
//             },
//             cantidad: {
//                bsonType: "int",
//                description: "'cantidad' must be a double if the field exists"
//             },
//             proveedor: {
//                 bsonType: "string",
//                 description: "'proveedor' must be a string and is required"
//              },
//               estado:{
//                 bsonType: "string",
//                 description: "'estado' must be a string and is required"
//              },
//          }
//       }
//    }
// } )
//Validacion de segunda coleccion la cual seria ficha_tecnica
// db.createCollection("ficha_tecnica", {
//     validator: {
//        $jsonSchema: {
//           required: [  "cantidad_insumos", "costo_insumo", "imagen_producto_final","costo_final_producto","detalle","id_isumos" ],
//           properties: {
//              cantidad_insumos: {
//                 bsonType: "int",
//                 description: "'cantidad_insumos:' es un campo requerido"
//              },
//              costo_insumo: {
//                 bsonType: "int",
//                 description: "'costo_insumo' es un campo requerido"
//              },
//              imagen_producto_final: {
//                 bsonType: "string",
//                 description: "'imagen_producto_final' must be a double if the field exists"
//              },
//              costo_final_producto: {
//                  bsonType: "string",
//                  description: "'costo_final_producto' must be a string and is required"
//               },
//               detalle:{
//                  bsonType: "string",
//                  description: "detalle' must be a string and is required"
//               }, 
//               id_isumos:{
//                 bsonType: "string",
//                 description: "id_isumos' must be a string and is required"
//              },
//           }
//        }
//     }
//  } )
 //tercera coleecion la cual seria insumos array.
//  db.createCollection("insumosarray", {
//    validator: {
//       $jsonSchema: {
//          required: [  "nombre", "precio", "cantidad","proveedor","estado","sizes" ],
//          properties: {
//             nombre: {
//                bsonType: "string",
//                description: "'nombre' es un campo requerido"
//             },
//             precio: {
//                bsonType: "int",
//                description: "'precio' es un campo requerido"
//             },
//             cantidad: {
//                bsonType: "int",
//                description: "'cantidad' must be a double if the field exists"
//             },
//             proveedor: {
//                 bsonType: "string",
//                 description: "'proveedor' must be a string and is required"
//              },
//               estado:{
//                 bsonType: "string",
//                 description: "'estado' must be a string and is required"
//              },
//              sizes:{
//                 bsonType: "string",
//                 description: "'sizes' must be a string and is required"
//              },
//          }
//       }
//    }
//  } )

//Punto del lookup para unir dos colecciones.
// db.insumos.aggregate([
//    {
//       $lookup: {
//         from: "ficha_tecnica",
//         localField: "'_id'",
//         foreignField: "'id_insumos'",
//         as: "asignacion"
//       }
//    },{
//       $project: {
//          "nombre":true,
//          "precio":true,
//          "cantidad":true,
//          "proveedor":true,
//          "estado":true,
//          asignacion:true


//       }
//    }
// ])

//unwid punto del taller 
// db.insumosconunwind.aggregate([{
//     $unwind : "$sizes"
//  }])
//Pipeline que se hacian 3 veces.
// db.insumos.aggregate([
//    {
//       $match: {
//         precio:{$eq:74840}
//       }
//    },
//    {
//       $project: {
//         "nombre":true,
//         "precio":true
//       }
//    },
//    {
//       $limit: 5
//    }
// ])

// db.insumos.aggregate([
//     {
//        $match: {
//          nombre:{$eq:"Bronze"}
//        }
//     },
//     {
//        $project: {
//          "nombre":true,
//          "cantidad":true
//        }
//     },
//     {
//        $limit: 5
//     }
//  ])
// db.insumos.aggregate([
//     {
//        $match: {
//          nombre:{$eq:"Rubber"}
//        }
//     },
//     {
//        $project: {
//          "nombre":true,
//          "cantidad":true
//        }
//     },
//     {
//        $limit: 5
//     }
//  ])

//Empezamos con el crud de la coleccion insumos de la base de datos publigrafit
//Empezamos con los insert de la base de datos osea el metodo para agregar datos a las colecciones.
// // unwind un punto de trabajo de la base de datos
// // const { MongoClient }=require('mongodb');
// // const {faker}=require('@faker-js/faker');

// // const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// // async function crearInsumos(nuevoInsumo){
// //  const client=new MongoClient(uri);

// //  try{
// //     await client.connect();

// //     const resul=await client.db('Publigrafit').collection('insumosconunwind').insertOne(nuevoInsumo);
// //     console.log(`El documento ingreso es:${resul.insertedIds}`);
// //     console.log(nuevoInsumo)

// //  }catch (e){
// //     console.error(e);
// //  }finally{
// //     await client.close();
// //  }
// // }
// // crearInsumos([{
// //    "nombre": faker.commerce.productMaterial(),//String
// //    "precio": faker.number.int({min:1,max:100000}),//int
// //    "cantidad":faker.number.int({min:1,max:100000}),//int
// //    "proveedor": faker.company.name(),//String
// //    "estado": "estado",//String
// //    "sizes":["Hayberth","Danie","Andres","Camilo"]

// // }])
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// async function crearInsumos(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').insertMany(nuevoInsumo);
//     console.log(`El documento ingreso es:${resul.insertedIds}`);
//     console.log(nuevoInsumo)

//  }catch (e){
//     console.error(e);
//  }finally{
//     await client.close();
//  }
// }
// //for(let i=0; i<100; i++){
// // crearInsumos([{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },{
// //    "cantidad_insumos":faker.number.int({min:1,max:100000}),
// //    "Costo_insumo":faker.number.int({min:1,max:1000000}),
// //    "imagen_producto_final":faker.image.avatar(),
// //    "costo final_producto":faker.number.int(),
// //    "detalle":faker.lorem.text(),
// //    "id_isumos":faker.number.int({min:1, max:2000})

// // },
// // ])
// // }
// for(let i=0; i<100; i++){
// crearInsumos([
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    },
//    {
//       "nombre": faker.commerce.productMaterial(),//String
//       "precio": faker.number.int({min:1,max:100000}),//int
//       "cantidad":faker.number.int({min:1,max:100000}),//int
//       "proveedor": faker.company.name(),//String
//       "estado": "Activo"//String

//    }
// ])
// }

//Seguimos con el listar de la base de datos publigrafit  de la coleccion insumos con sus respectivos puntos del taller.
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').findOne({nombre:nuevoInsumo});
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos("Bronze");

//Listar todos los documentos de la base
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function listarInsumos(nuevoInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').find().toArray();
//     if(resul){
//         console.log(resul)

//     }
    

//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// listarInsumos();
//Lostar los documentos pero ahora con un limit
// 
//Listar los documentos pero con un sort
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

//Seguimos con el Actualizar la coleccion insumos de la base de datos con sus respectivos puntos del taller solicitados por el instructor.
const { MongoClient }=require('mongodb');
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

//Este actualizar sive para todos los que tengan el mismo nombre.
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



//Seguimos con el ultimo punto del crud el cual seria eliminar datos de la coleccion insumos de la base de datos publigrafit con sus respectivos puntos que solicito el instructor.
const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function eliminarInsumos(nombreInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').deleteOne({nombre:nombreInsumo})

//     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// eliminarInsumos("Granite");

// //Elimnar muchos Datos con el mismo nombre
// const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function eliminarInsumos(nombreInsumo){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumos').deleteMany({nombre:nombreInsumo})

//     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// eliminarInsumos("Frozen");



//Seguimos con la segunda creacion de la coleccion llamada ficha tecnica la cual tiene realacion en nuestro modelo relacional con insumos empezamos con su crud el cual se iniciaria por la insertacion de datos ya que sus validaciones estan en la parte superir de la pagina

//Insertar datos en la coleccion ficha_tecnica.
const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// async function crearFicha_Tecnica(nuevaFicha){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').insertMany(nuevaFicha);
//     console.log(`El documento ingreso es:${resul.insertedIds}`);
//     console.log(nuevaFicha)

//  }catch (e){
//     console.error(e);
//  }finally{
//     await client.close();
//  }
// }
// for(let i=0; i<100; i++){
// crearFicha_Tecnica([{
//    "cantidad_insumos":faker.number.int({min:1,max:100000}),
//    "Costo_insumo":faker.number.int({min:1,max:1000000}),
//    "imagen_producto_final":faker.image.avatar(),
//    "costo final_producto":faker.number.int(),
//    "detalle":faker.lorem.text(),
//    "id_isumos":faker.number.int({min:1, max:2000})

// },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  },{
//     "cantidad_insumos":faker.number.int({min:1,max:100000}),
//     "Costo_insumo":faker.number.int({min:1,max:1000000}),
//     "imagen_producto_final":faker.image.avatar(),
//     "costo final_producto":faker.number.int(),
//     "detalle":faker.lorem.text(),
//     "id_isumos":faker.number.int({min:1, max:2000})
 
//  }
// ])}


//Seguimos con la primera parte de la coleccion de ficha_tecnica la cual seria listar ficha_tecnica.
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
// listarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/630.jpg");

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

//Seguimos con la segunda parte de la colecion ficha_tecnica la cual seria Actualizar uno o muchos datos de la lista utilizando un mismo link

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


//Seguimos con la ultima parte del crud que seria eliminar algunos datos o muchos datos de la coleccion ficha_tecnica
const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
// //Listar una propiedad del documento
// async function eliminarFicha(nombreImagen){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('ficha_tecnica').deleteOne({imagen_producto_final:nombreImagen})

//     console.log(`${resul.deletedCount} propiedad(s) fue(ron) eliminada(s)`);
    
//     }catch (e){
//     console.error(e);
//     }finally{
//     await client.close();
//     }
// }
// eliminarFicha("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1156.jpg");

//Una manera de eliminar mas de un dato utilizando delete many para eliminar mas de uno.
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

//Seguimos con la tercera coleccion la cual fue solicitada por el instructor la cual recive un nombre de insumosarray que seria practicamente insumos pero esta tiene nuevos atributos, la cual la hace diferente utilizando sus respectivos faker para generar datos y sus validaciones estan en la parte inicial de la pagina 

//Empezamos haciendo su crud el cual seria hacer manera de ingresar los datos a la coleccion insumosarray

const { MongoClient }=require('mongodb');
// const {faker}=require('@faker-js/faker');

// const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// async function crearInsumos2(nuevoInsumo1){
//  const client=new MongoClient(uri);

//  try{
//     await client.connect();

//     const resul=await client.db('Publigrafit').collection('insumosarray').insertMany(nuevoInsumo1);
//     console.log(`El documento ingreso es:${resul.insertedIds}`);
//     console.log(nuevoInsumo1)

//  }catch (e){
//     console.error(e);
//  }finally{
//     await client.close();
//  }
// }
// for(let i=0; i<100; i++){
// crearInsumos2([{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },{
//    "nombre": faker.commerce.productMaterial(),//String
//    "precio": faker.number.int({min:1,max:100000}),//int
//    "cantidad":faker.number.int({min:1,max:100000}),//int
//    "proveedor": faker.company.name(),//String
//    "estado": "estado",//String
//    "sizes":faker.datatype.array()

// },
// ])}

//Seguimos con la creacion del siguente crud el cual seria el listar de insumosarray que seria la tercera coleccion.

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

//Seguimos con la ultima parte del crud el cual seria eliminar algunos datos o muchos datos de la coleccion insumosarray.
//Eliminar un elemento con sus atrubutos por su nombre.
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





//Empezamos con la parte de la api para nuestra base de datos publigrafit con sus respectivas 3 coleciones ademas de hacer unos router para poder hacer las verificaciones en la estencion tunder

//Empezamos con la manera de conectar la base de datos con visual para la elaboracion y comprovacion de los crud

const express = require('express');
// const bodyparser = require('body-parser');
// const routerApi = require('./routes');
// // const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id
// // const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';
// // const hostname = 'localhost';
// // const port = 3000;
// // const router = express.Router();
// const app = express();

// //Middlewares //Desde que recibimos la petición hasta que obtenemos la respuesta
// app.use(bodyparser.json()); //Para poder trabajar con JSON
// app.use(bodyparser.urlencoded({extended: true})); //Para poder trabajar con formularios codificados en url
// app.use(express.json()); //Para poder trabajar con JSON
// routerApi(app);

// // const port = 3000;

// app.get('/', (req, res) => {
//     res.send("Servidor de Publigrafit con sus colecciones");
// })

// app.listen(3000, () => {
//     console.log(`El servidor está Activo para el trabajo utilizando publigrafit.`);
// })

//Seguimos con los index osea las rutas para que sirvan el contenido de los router en la extension tunder.

const routerInsumosArray= require('./routesSessions');
const routerFicha_tecnica = require('./routesTheaters');
const routerInsumos = require('./routesUsers');

//Seguimos en el index con la parte de conexiones.
//function routerApi(app){
//La app que creamos con appexpress va a asociar "movies" con el controlador routesMovies
//app.use('/insumosarray', routerInsumosArray);
//app.use('/fichatecnica', routerFicha_tecnica);
//app.use('/insumos', routerInsumos);
//}

//module.exports = routerApi;

Seguimos con la creacion de los ruter con cada coleccion con un crud el cual es actualizar elliminar y listar 

//empezamos con el primer router llamado routesUser.js el cual pertenece a a coleccion insumos

const express = require('express');
// const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id

// const uri = 'mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// const router = express.Router();

// /**
//  * CRUD , CREATE , READ , UPDTAE , DELETE
//  */

// // READ

// // find()
// router.get('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//   try {
//       await client.connect();
//       const users = await client.db('Publigrafit').collection('insumos').find({}).toArray();  
      
//       if(users){
//       res.status(200).send(users);
//       }else{
//       res.status(404).send("No se encontró información");
//       }
//   } catch (e) {
//       console.error(e);
//   }finally{

//   await client.close();
//     }
// }
// )

// // findOne()
// router.get('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const client = new MongoClient(uri);

//     try {
//       await client.connect();
//       const users = await client.db('Publigrafit').collection('insumos').findOne({_id: new ObjectId(id)});  
//     if (users){
//     res.status(200).send(users);

//    }else{
//     res.status(404).send("No se encontró información");
//    }
//     } catch (e) {
//       console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// // CREATE

// // insertOne()
// // router.post('/:id', async (req, res) => { 
// //     const body = req.body;
// //     const client = new MongoClient(uri);

// //     try {
// //         await client.connect();
// //         const users = await client.db('Publigrafit').collection('insumos').insertOne({body});  
// //     if (users){
// //     res.status(200).json({
// //         message : 'Se crearon los insumos en la base de datos',
// //         users,
// //         //data: body
// //     });
// //    }else{
// //     res.status(404).send("No se crearon los insumos");
// //    }
// //     } catch (e) {
// //         console.error(e);
// //     }finally{

// //     await client.close();
// //     }

// // }
// // )

// // insertMany()
// router.post('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const users = await client.db('Publigrafit').collection('insumos').insertMany([{body}]);  
//     if (users){
//     res.status(200).json({
//         message : 'Se crearon los insumos en la base de datos',
//         users,
//         //data: body
//     });

//    }else{
//     res.status(404).send("No se crearon los insumos");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// // UPDATE

// // updateOne()
// router.patch('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const users = await client.db('Publigrafit').collection('insumos').updateOne({_id: new ObjectId(id)},
//         {$set:{
//             title: body, 
//             year: body.year
//         }
//     });  
//     if (users){
//     res.status(200).json({
//         message : 'Se actualizó el insumo',
//         users,
//         // data: body
//     });

//    }else{
//     res.status(404).send("No se actualizó el insumo");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// // DELETE

// // Eliminar un solo campo
// router.delete('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const users = await client.db('Publigrafit').collection('insumos').deleteOne({_id: new ObjectId(id)},
//         {$set:{
//             title:body, 
//             year: body.year
//         }
//     });  
//     if (users){
//     res.status(200).json({
//         message : 'Se eliminó el insumo',
//         users,
//         data: body
//     });

//    }else{
//     res.status(404).send("No se eliminó el insumo");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// // insertMany()
// router.post('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumos = await client.db('Publigrafit').collection('insumos').insertMany([body]);  
//     if (insumos){
//     res.status(200).json({
//         message : 'Se crearon los insumos en la base de datos',
//         users,
//         // data: body
//     });

//    }else{
//     res.status(404).send("No se crearon los insumos");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// //Update many
// router.patch('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumos = await client.db('Publigrafit').collection('insumos').updateMany({},
//         {$set:{body}});  
//         if (routesUser){
//         res.status(200).send(`Se actualizó la colección ${insumos}`);
    

//    }else{
//     res.status(404).send("No se actualizó la colección");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// //deleMany()
// router.delete('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumos= await client.db('Publigrafit').collection('insumos').deleteMany(body);
//         if(routesUser){
//             res.status(200).send(`Se borró la siguiente colección ${insumos}`);

//         }else{
//         res.status(404).send("No se encontró información");
//         }
//         } catch (e) {
//         console.error(e);
//         }finally{

//         await client.close();
//         }

// }
// )

// module.exports = router;

//empezamos con el segundo router llamado routesTheater.js el cual pertenece a a coleccion ficha tecnica con sus respetivo crud el cual es editar eliminar y listar datos utilizando siertos parametros.


//empezamos con el tercero y ultimo router llamado routesSession.js el cual pertenece a a coleccion insumosarray con sus respetivo crud el cual es editar eliminar y listar datos utilizando siertos parametros.

const express = require('express');
// const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id

// const uri = 'mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

// const router = express.Router();

// /**
//  * CRUD , CREATE , READ , UPDTAE , DELETE
//  */

// // READ

// // find()
// router.get('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//   try {
//       await client.connect();
//       const sessions = await client.db('Publigrafit').collection('insumosarray').find({}).toArray();  
      
//       if(sessions){
//       res.status(200).send(sessions);
//       }else{
//       res.status(404).send("No se encontró información");
//       }
//   } catch (e) {
//       console.error(e);
//   }finally{

//   await client.close();
//     }
// }
// )

// // findOne()
// router.get('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const client = new MongoClient(uri);

//     try {
//       await client.connect();
//       const sessions = await client.db('Publigrafit').collection('insumosarray').findOne({_id: new ObjectId(id)});  
//     if (sessions){
//     res.status(200).send(sessions);

//    }else{
//     res.status(404).send("No se encontró información");
//    }
//     } catch (e) {
//       console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// // CREATE

// // insertOne()
// // router.post('/:id', async (req, res) => { 
// //     const body = req.body;
// //     const client = new MongoClient(uri);

// //     try {
// //         await client.connect();
// //         const sessions = await client.db('Publigrafit').collection('insumosarray').insertOne({body});  
// //     if (sessions){
// //     res.status(200).json({
// //         message : 'Se crearon el insumosarray en la base de datos',
// //         sessions,
// //         //data: body
// //     });
// //    }else{
// //     res.status(404).send("No se crearon el insumosarray");
// //    }
// //     } catch (e) {
// //         console.error(e);
// //     }finally{

// //     await client.close();
// //     }

// // }
// // )

// // insertMany()
// router.post('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const sessions = await client.db('Publigrafit').collection('insumosarray').insertMany([{body}]);  
//     if (sessions){
//     res.status(200).json({
//         message : 'Se crearon los insumosarray en la base de datos',
//         sessions,
//         //data: body
//     });

//    }else{
//     res.status(404).send("No se crearon los insumosarray");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// // UPDATE

// // updateOne()
// router.patch('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const sessions = await client.db('Publigrafit').collection('insumosarray').updateOne({_id: new ObjectId(id)},
//         {$set:{
//             title: body, 
//             year: body.year
//         }
//     });  
//     if (sessions){
//     res.status(200).json({
//         message : 'Se actualizó el insumosarray',
//         sessions,
//         // data: body
//     });

//    }else{
//     res.status(404).send("No se actualizó el insumosarray");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// // DELETE

// // Eliminar un solo campo
// router.delete('/:id', async (req, res) => { 
//     const id = req.params.id;
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const sessions = await client.db('Publigrafit').collection('insumosarray').deleteOne({_id: new ObjectId(id)},
//         {$set:{
//             title:body, 
//             year: body.year
//         }
//     });  
//     if (sessions){
//     res.status(200).json({
//         message : 'Se eliminó el insumoarray',
//         sessions,
//         data: body
//     });

//    }else{
//     res.status(404).send("No se eliminó el insumoarray");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// // insertMany()
// router.post('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumos = await client.db('Publigrafit').collection('insumosarray').insertMany([body]);  
//     if (insumos){
//     res.status(200).json({
//         message : 'Se crearon los insumos en la base de datos',
//         users,
//         // data: body
//     });

//    }else{
//     res.status(404).send("No se crearon los insumos");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// // insertMany()
// router.post('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumos = await client.db('Publigrafit').collection('insumos').insertMany([body]);  
//     if (insumos){
//     res.status(200).json({
//         message : 'Se crearon los insumos en la base de datos',
//         users,
//         // data: body
//     });

//    }else{
//     res.status(404).send("No se crearon los insumos");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// //Update many
// router.patch('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumosArray = await client.db('Publigrafit').collection('insumosarray').updateMany({},
//         {$set:{body}});  
//         if (routesSessions){
//         res.status(200).send(`Se actualizó la colección ${insumosArray}`);
    

//    }else{
//     res.status(404).send("No se actualizó la colección");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )
// //DeleteMany()
// router.delete('/', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const insumosArray = await client.db('Publigrafit').collection('insumosarray').deleteMany(body);
//         if(routesSessions){
//             res.status(200).send(`Se borró la siguiente colección ${insumosArray}`);

//         }else{
//         res.status(404).send("No se encontró información");
//         }
//         } catch (e) {
//         console.error(e);
//         }finally{

//         await client.close();
//         }

// }
// )

// module.exports = router;








