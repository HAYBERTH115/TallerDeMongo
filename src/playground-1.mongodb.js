//const database="Publigrafit" //Esta lia es donde se creo la base de datos//
use('Publigrafit');

// Validacion de primera coleccion.
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
//Validacion de segunda coleccion.
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
 //tercera coleecion
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
//Pipeline que se hacian 3 veces segun el trabajo del intructor.
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
//          nombre:{$eq:"Metal"}
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