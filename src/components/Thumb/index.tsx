import React from "react";
import { Link } from "react-router-dom";
import { ThumbProps } from "./thumb.props";
import { Image, RatingText, ThumbInfoContainer } from "./styles";

function Thumb({
  image, movieId, clickable, rating, vote_count,
}: ThumbProps): React.JSX.Element {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
      <ThumbInfoContainer>
        <RatingText>Rating: {rating?.toFixed(1)}</RatingText>
        <RatingText>👍 {vote_count}</RatingText>
      </ThumbInfoContainer>
    </div>
  );
}

export default Thumb;
