import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CreatePerson() {
   const [name, setName] = useState("")
   const [height, setHeight] = useState("")
   const [mass, setMass] = useState("")

   const submitClick = () => {
      let createObject = {
         name: name,
         height: height,
         mass: mass
      }
      console.log(createObject)
      axios.post('http://localhost:3001/api/insertPerson', createObject)
        .then(response => {
            // Handle success
            console.log('Post request successful', response)
            setName("");
            setHeight("");
            setMass("");
        })
        .catch(error => {
            console.error('Error during post request', error);
        });

   }
 return (
    <Card style={{margin: 5, height: 100, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField  label="Height" variant="outlined" value={height} onChange={(e) => setHeight(e.target.value)}/>
        <TextField label="Mass" variant="outlined" value={mass} onChange={(e) => setMass(e.target.value)}/>
        <Button onClick={submitClick} variant="contained">Create</Button>
    </Card>
 );
}

export default CreatePerson;
