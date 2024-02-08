import "./HomePage.css";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from '@mui/material/Card';
import { useEffect, useState } from "react"; 
import ListItem from "../ListItem/ListItem";
import CreatePerson  from "../CreatePerson/CreatePerson";



  
export default function HomePage() {
    const [swPeople, setSwPeople] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/people").then(response => {
            return response.json()

        }).then(data => {
            console.log(data)
            setSwPeople(data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const deleteFromList = (name) => {
        fetch("http://localhost:3001/api/people").then(response => {
            return response.json()

        }).then(data => {
            console.log(data)
            setSwPeople(data)
        }).catch(error => {
            console.log(error)
        })
    }

  return (
        <div className="wrapper">
            <Card class="body">
                <div className="header">
                    <h1>Home Page</h1>
                    <CreatePerson></CreatePerson>
                    <Button className="link" target="_blank" href="https://www.youtube.com/watch?v=U8wLBOlCKPU">
                        <OpenInNewIcon />
                    </Button>
                </div>
                <Card variant="outlined" class="content" sx={{borderRadius: 2,}}>
                    <h2 className="list-title">List</h2>
                    {swPeople.map(person => (
                        <ListItem person={person} deleteFromList={deleteFromList}></ListItem>
                    ))}
                </Card>
            </Card>
        </div>
  );
}

