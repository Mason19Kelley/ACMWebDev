const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors())

let swPeople = [
    {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
    }, 
    {
        "name": "C-3PO", 
        "height": "167", 
        "mass": "75", 
    }, 
    {
        "name": "R2-D2", 
        "height": "96", 
        "mass": "32", 
    }, 
    {
        "name": "Darth Vader", 
        "height": "202", 
        "mass": "136",  
    }, 
    {
        "name": "Leia Organa", 
        "height": "150", 
    }, 
    {
        "name": "Owen Lars", 
        "height": "178", 
        "mass": "120", 
    }, 
    {
        "name": "Beru Whitesun lars", 
        "height": "165", 
        "mass": "75", 
    }, 
    {
        "name": "R5-D4", 
        "height": "97", 
        "mass": "32", 
    }, 
    {
        "name": "Biggs Darklighter", 
        "height": "183", 
        "mass": "84", 
    }, 
    {
        "name": "Obi-Wan Kenobi", 
        "height": "182", 
        "mass": "77", 
    }
]


// MongoDB stuff
const mongoose = require('mongoose')

const password = encodeURIComponent("#password123");

const url =
  `mongodb+srv://mkk020:${password}@acmdemo.3r15yx0.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
    name: String,
    height: String,
    mass: String,
    });

const Person = mongoose.model('Person', personSchema);

// API calls

app.get('/api/people', async (request, response) => {
    try {
      const people = await Person.find({});
      response.json(people);
    } catch (error) {
      console.error('Error fetching people:', error.message);
      response.status(500).send('Internal Server Error');
    }
  });


//   app.post('/api/insertPerson', async (request, response) => {
//     console.log(request.body)
//     try {
//         const { name, height, mass } = request.body; 
//         const newPerson = new Person({ name, height, mass });
//         await newPerson.save();
//         response.status(201).send('Person inserted successfully');
//     } catch (error) {
//       console.error('Error inserting person:', error.message);
//       response.status(500).send('Internal Server Error');
//     }
//   });

//   app.delete('/api/deletePersonByName/:name', async (request, response) => {
//     console.log("endpoint hit")
//     try {
//         const { name } = request.params;
//         const result = await Person.deleteOne({ name });
//         if (result.deletedCount === 0) {
//             response.status(404).send('Person not found');
//         } else {
//             response.status(200).send('Person deleted successfully');
//         }
//     } catch (error) {
//         console.error('Error deleting person:', error.message);
//         response.status(500).send('Internal Server Error');
//     }
//   });




const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})