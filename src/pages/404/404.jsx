// Importing react
import { Paper, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WarningText = {
    color: "red"
}

function RouteNotFound() {
 return (
 <Container>
    <Paper elevation={3}
    sx={{
        padding: "20px",
        border: "1px solid red",
        borderRadius: "15px"
    }}
    >
        <h1 style={WarningText}>404</h1>
        <p>We are sorry. There is a error that have occurred with the link you clicked. Please return to <Link to={"/"}>Home</Link></p>
    </Paper>   
 </Container>
 );
}
export default RouteNotFound;
