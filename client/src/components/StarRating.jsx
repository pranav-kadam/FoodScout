import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ color: "#ff8d0a" }}
        ></i>
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i
          key={i}
          className="fa-regular fa-star-half-stroke"
          style={{ color: "#ff8d0a" }}
        ></i>
      );
    } else {
      stars.push(
        <i
          key={i}
          className="fa-regular fa-star"
          style={{ color: "#ff8d0a" }}
        ></i>
      );
    }
  }
  return <>{stars}</>;
};

export default StarRating;
