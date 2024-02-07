
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import "./ListItem.css";
import axios from 'axios';


export default function ListItem(props) {

  // const deletePerson = () => {
  //   console.log(props.person.name)
  //   axios.delete(`http://localhost:3001/api/deletePersonByName/${props.person.name}`)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error))
  // }
  
  return (
        <Card className="card" style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <h3>{props.person.name}</h3>
            <p>Height: {props.person.height}</p>
            <p>Mass:{props.person.mass}</p>
          </div>
          <Button onClick={deletePerson}variant="contained" color="error">Delete</Button>
        </Card>
  );
}

