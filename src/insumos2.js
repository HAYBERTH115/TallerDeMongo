const { MongoClient }=require('mongodb');
const {faker}=require('@faker-js/faker');

const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

async function crearInsumos2(nuevoInsumo1){
 const client=new MongoClient(uri);

 try{
    await client.connect();

    const resul=await client.db('Publigrafit').collection('insumosarray').insertMany(nuevoInsumo1);
    console.log(`El documento ingreso es:${resul.insertedIds}`);
    console.log(nuevoInsumo1)

 }catch (e){
    console.error(e);
 }finally{
    await client.close();
 }
}
for(let i=0; i<100; i++){
crearInsumos2([{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},{
   "nombre": faker.commerce.productMaterial(),//String
   "precio": faker.number.int({min:1,max:100000}),//int
   "cantidad":faker.number.int({min:1,max:100000}),//int
   "proveedor": faker.company.name(),//String
   "estado": "estado",//String
   "sizes":faker.datatype.array()

},
])}