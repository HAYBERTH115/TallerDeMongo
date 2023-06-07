// // unwind
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