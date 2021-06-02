import React from "react";
import { img_300, unavailable } from "../config";
function SingleContent({
  key,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <img
              src={poster ? `${img_300}/${poster}` : unavailable}
              alt={title}
            />
            <b>{title}</b>
            <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleContent;
