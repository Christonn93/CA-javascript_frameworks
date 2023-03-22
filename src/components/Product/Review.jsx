import React from "react";

const Review = ({data}) => {
 const { id, username, description, rating } = data;

 return (
  <>
   <div key={id}>
    <h4>{username}</h4>
    <p>{description}</p>
    <p>{rating}</p>
   </div>
  </>
 );
};

export default Review;
