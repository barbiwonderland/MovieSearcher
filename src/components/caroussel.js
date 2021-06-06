import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, CarouselItemProps } from "react-bootstrap";
import { noPicture, img_300 } from "../config";

function Caroussel({ media_type, id }) {
  const [credits, setCredits] = useState();
  const fectCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };
  useEffect(() => {
    fectCredits();
  }, []);

  return (
    <Carousel>
      {credits &&
        credits.map((x) => (
          <Carousel.Item interval={1000}>
            <img
              className="d-block justify-content-center mx-auto h-10"
              src={x.profile_path ? `${img_300}/${x.profile_path}` : noPicture}
              alt={x.name}
            />
            <Carousel.Caption>
              <b>{x.name}</b>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Caroussel;
