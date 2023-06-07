const express = require('express');
const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id

const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';

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
      const movies = await client.db('sample_mflix').collection('movies').find({}).toArray();  
      
      if(movies){
      res.status(200).send(movies);
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
      const movies = await client.db('sample_mflix').collection('movies').findOne({_id: new ObjectId(id)});  
    if (movies){
    res.status(200).send(movies);

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
//         const movies = await client.db('sample_mflix').collection('movies').insertOne({body});  
//     if (movies){
//     res.status(200).json({
//         message : 'Se crearon las películas en la base de datos',
//         movies,
//         //data: body
//     });
//    }else{
//     res.status(404).send("No se crearon las películas");
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
        const movies = await client.db('sample_mflix').collection('movies').insertMany([{body}]);  
    if (movies){
    res.status(200).json({
        message : 'Se crearon las películas en la base de datos',
        movies,
        //data: body
    });

   }else{
    res.status(404).send("No se crearon la películas");
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
        const movies = await client.db('sample_mflix').collection('movies').updateOne({_id: new ObjectId(id)},
        {$set:{
            title: body, 
            year: body.year
        }
    });  
    if (movies){
    res.status(200).json({
        message : 'Se actualizó la película',
        movies,
        // data: body
    });

   }else{
    res.status(404).send("No se actualizó la película");
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
        const movies = await client.db('sample_mflix').collection('movies').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (movies){
    res.status(200).json({
        message : 'Se eliminó la película',
        movies,
        data: body
    });

   }else{
    res.status(404).send("No se eliminó la película");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

module.exports = router;