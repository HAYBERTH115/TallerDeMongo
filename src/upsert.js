const { MongoClient }=require('mongodb');
const {faker}= require('@faker-js/faker');



const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';


async function actualizarinsumos(nombreInsumo, precio, cantidad, proveedor, estado){
        const client = new MongoClient(uri);
    
        try {
            await client.connect();

            const result = await client.db('Publigrafit').collection('insumos').updateOne({nombre: nombreInsumo}, {$set: {precio:precio, cantidad:cantidad , proveedor:proveedor, estado:estado}},{upsert:true})
            
            console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
            console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
        } catch (e) {
            console.error(e);
        }finally{
    
        await client.close();
        }
    }
    
actualizarinsumos("Hayberth",1000, 200, "Exito","Activo");