import { Box, Typography } from "@mui/material";

import ReviewDisplay from "./ReviewUi";
import ErrorResponse from "../../utils/ErrorResponse";

const DisplayReview = (data) => {
 const reviewData = data;

 if (reviewData === "undefined") {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 if (reviewData.length >= 1) {
  return (
   <Box>
    {reviewData.map((i) => (
     <ReviewDisplay key={i.id} name={i.username} rating={i.rating} body={i.description} />
    ))}
   </Box>
  );
 } else {
  return (
   <Box>
    <Typography variant="body1">There is no reviews on this product</Typography>
   </Box>
  );
 }
};

export default DisplayReview;
