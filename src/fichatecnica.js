const { MongoClient }=require('mongodb');
const {faker}=require('@faker-js/faker');

const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

async function crearFicha_Tecnica(nuevaFicha){
 const client=new MongoClient(uri);

 try{
    await client.connect();

    const resul=await client.db('Publigrafit').collection('ficha_tecnica').insertMany(nuevaFicha);
    console.log(`El documento ingreso es:${resul.insertedIds}`);
    console.log(nuevaFicha)

 }catch (e){
    console.error(e);
 }finally{
    await client.close();
 }
}
for(let i=0; i<100; i++){
crearFicha_Tecnica([{
   "cantidad_insumos":faker.number.int({min:1,max:100000}),
   "Costo_insumo":faker.number.int({min:1,max:1000000}),
   "imagen_producto_final":faker.image.avatar(),
   "costo final_producto":faker.number.int(),
   "detalle":faker.lorem.text(),
   "id_isumos":faker.number.int({min:1, max:2000})

},{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 },{
    "cantidad_insumos":faker.number.int({min:1,max:100000}),
    "Costo_insumo":faker.number.int({min:1,max:1000000}),
    "imagen_producto_final":faker.image.avatar(),
    "costo final_producto":faker.number.int(),
    "detalle":faker.lorem.text(),
    "id_isumos":faker.number.int({min:1, max:2000})
 
 }
])}