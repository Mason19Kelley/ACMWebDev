
import { Card } from "@mui/material";
import "./ListItem.css";


export default function ListItem(props) {

  return (
        <Card>
            <h3>{props.name}</h3>
            <p>Height: {props.height}</p>
            <br></br>
            <p>Gender:{props.gender}</p>
        </Card>
  );
}

