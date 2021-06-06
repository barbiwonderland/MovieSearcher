import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../config";
import ContentModal from "./contentModal";
function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <React.Fragment>
      <div className=" col-md-4 mb-3 ">
        <ContentModal media_type={media_type} id={id}>
          <Badge
            badgeContent={vote_average}
            color={vote_average > 6 ? "primary" : "secondary"}
          />
          <div className="col-8 col-md-12 mx-auto">
            <img
              className=" rounded mt-2 img-fluid justify-content-center mx-auto "
              src={
                poster
                  ? `https://image.tmdb.org/t/p/w500${poster}`
                  : `${unavailable}`
              }
              alt={title}
            />
          </div>
          <div className="text-center mx-auto justify-content-center   ">
            <br />
            <b>{title}</b>

            <br />
            <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
            <br />
            <span className="my-5">{date}</span>
          </div>
        </ContentModal>
      </div>
    </React.Fragment>
  );
}

export default SingleContent;
