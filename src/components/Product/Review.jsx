import React from "react";

// Importing mui items
import { Card, CardActionArea, Typography, CardContent, Rating } from "@mui/material";

const Review = ({ data }) => {
 const { id, username, description, rating } = data;

 return (
  <>
   <Card key={id}>
    <CardContent>
     <Rating name="read-only" value={rating} readOnly />
     <Typography gutterBottom variant="h5" component="div">
      {username}
     </Typography>
     <Typography variant="body2" color="text.secondary">
      {description}
     </Typography>
    </CardContent>
   </Card>
  </>
 );
};

export default Review;
