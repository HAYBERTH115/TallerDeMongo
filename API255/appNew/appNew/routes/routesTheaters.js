const express = require('express');
const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id

const uri = 'mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';

const router = express.Router();

/**
 * CRUD , CREATE , READ , UPDTAE , DELETE
 */

// READ

// find()
router.get('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

  try {
      await client.connect();
      const theaters = await client.db('Publigrafit').collection('ficha_tecnica').find({}).toArray();  
      
      if(theaters){
      res.status(200).send(theaters);
      }else{
      res.status(404).send("No se encontró información");
      }
  } catch (e) {
      console.error(e);
  }finally{

  await client.close();
    }
}
)

// findOne()
router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const theaters = await client.db('Publigrafit').collection('ficha_tecnica').findOne({_id: new ObjectId(id)});  
    if (theaters){
    res.status(200).send(theaters);

   }else{
    res.status(404).send("No se encontró información");
   }
    } catch (e) {
      console.error(e);
    }finally{

    await client.close();
    }

}
)

// CREATE

// insertOne()
// router.post('/:id', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const theaters = await client.db('Publigrafit').collection('ficha_tecnica').insertOne({body});  
//     if (theaters){
//     res.status(200).json({
//         message : 'Se crearon la ficha tecnica en la base de datos',
//         theaters,
//         //data: body
//     });
//    }else{
//     res.status(404).send("No se crearon la ficha tecnica");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// insertMany()
router.post('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const theaters = await client.db('Publigrafit').collection('ficha_tecnica').insertMany([{body}]);  
    if (theaters){
    res.status(200).json({
        message : 'Se crearon las fichas_tecnicas en la base de datos',
        theaters,
        //data: body
    });

   }else{
    res.status(404).send("No se crearon las fichas tecnicas");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

// UPDATE

// updateOne()
router.patch('/:id', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const theaters = await client.db('Publigrafit').collection('ficha_tecnica').updateOne({_id: new ObjectId(id)},
        {$set:{
            title: body, 
            year: body.year
        }
    });  
    if (theaters){
    res.status(200).json({
        message : 'Se actualizó la ficha tecnica',
        theaters,
        // data: body
    });

   }else{
    res.status(404).send("No se actualizó la ficha tecnica");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

// DELETE

// Eliminar un solo campo
router.delete('/:id', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const theaters = await client.db('Publigrafit').collection('ficha_tecnica').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (theaters){
    res.status(200).json({
        message : 'Se eliminó la ficha tecnica',
        theaters,
        data: body
    });

   }else{
    res.status(404).send("No se eliminó la ficha tecnica");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)
// insertMany()
router.post('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const fichaTecnica = await client.db('Publigrafit').collection('ficha_tecnica').insertMany([body]);  
    if (fichaTecnica){
    res.status(200).json({
        message : 'Se crearon los insumos en la base de datos',
        users,
        // data: body
    });

   }else{
    res.status(404).send("No se crearon los insumos");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)
router.patch('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const fichaTecnica = await client.db('Publigrafit').collection('ficha_tecnica').updateMany({},
        {$set:{body}});  
        if (routesTheaters){
        res.status(200).send(`Se actualizó la colección ${fichaTecnica}`);
    

   }else{
    res.status(404).send("No se actualizó la colección");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)
//deleMany()
router.delete('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const fichaTecnica= await client.db('Publigrafit').collection('ficha_tecnica').deleteMany(body);
        if(routesTheaters){
            res.status(200).send(`Se borró la siguiente colección ${fichaTecnica}`);

        }else{
        res.status(404).send("No se encontró información");
        }
        } catch (e) {
        console.error(e);
        }finally{

        await client.close();
        }

}
)

module.exports = router;