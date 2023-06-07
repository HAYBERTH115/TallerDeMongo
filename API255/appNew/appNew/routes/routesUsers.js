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
      const users = await client.db('Publigrafit').collection('insumos').find({}).toArray();  
      
      if(users){
      res.status(200).send(users);
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
      const users = await client.db('Publigrafit').collection('insumos').findOne({_id: new ObjectId(id)});  
    if (users){
    res.status(200).send(users);

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
//         const users = await client.db('Publigrafit').collection('insumos').insertOne({body});  
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

// insertMany()
router.post('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const users = await client.db('Publigrafit').collection('insumos').insertMany([{body}]);  
    if (users){
    res.status(200).json({
        message : 'Se crearon los insumos en la base de datos',
        users,
        //data: body
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

// UPDATE

// updateOne()
router.patch('/:id', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const users = await client.db('Publigrafit').collection('insumos').updateOne({_id: new ObjectId(id)},
        {$set:{
            title: body, 
            year: body.year
        }
    });  
    if (users){
    res.status(200).json({
        message : 'Se actualizó el insumo',
        users,
        // data: body
    });

   }else{
    res.status(404).send("No se actualizó el insumo");
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
        const users = await client.db('Publigrafit').collection('insumos').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (users){
    res.status(200).json({
        message : 'Se eliminó el insumo',
        users,
        data: body
    });

   }else{
    res.status(404).send("No se eliminó el insumo");
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
        const insumos = await client.db('Publigrafit').collection('insumos').insertMany([body]);  
    if (insumos){
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
//Update many
router.patch('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const insumos = await client.db('Publigrafit').collection('insumos').updateMany({},
        {$set:{body}});  
        if (routesUser){
        res.status(200).send(`Se actualizó la colección ${insumos}`);
    

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
        const insumos= await client.db('Publigrafit').collection('insumos').deleteMany(body);
        if(routesUser){
            res.status(200).send(`Se borró la siguiente colección ${insumos}`);

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