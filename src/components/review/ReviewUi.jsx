// Importing mui items
import { Card, CardActionArea, Typography, CardContent, Chip } from "@mui/material";

const ReviewDisplay = (props) => {
 return (
  <Card sx={{ maxWidth: 345 }} key={props.id}>
   <CardActionArea>
    <CardContent>
     <Chip label={props.rating} color="success" />
     <Typography gutterBottom variant="h5" component="div">
      {props.name}
     </Typography>
     <Typography variant="body2" color="text.secondary">
      {props.body}
     </Typography>
    </CardContent>
   </CardActionArea>
  </Card>
 );
};

export default ReviewDisplay;
