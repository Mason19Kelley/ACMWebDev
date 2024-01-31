import "./HomePage.css";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from '@mui/material/Card';
import { useEffect, useState } from "react"; 


//hooks
//useEffect
//conditional rendering
//loops
//click events
// components
//props
//promises / async
// router
export default function HomePage() {
    //https://swapi.dev/
    useEffect(() => {
        fetch("https://swapi.dev/api/people").then(response => {
            return response.json()

        }).then(data => {
            console.log(data.results)
        }).catch(error => {
            console.log(error)
        })
    }, [])
  return (
        <div className="wrapper">
            <Card class="body">
                <div className="header">
                    <h1>Home Page</h1>
                    <Button className="link" target="_blank" href="https://www.youtube.com/watch?v=U8wLBOlCKPU">
                        <OpenInNewIcon />
                    </Button>
                </div>
                <Card variant="outlined" class="content" sx={{borderRadius: 2,}}>
                    <h2 className="list-title">List</h2>
                </Card>
            </Card>
        </div>
  );
}

