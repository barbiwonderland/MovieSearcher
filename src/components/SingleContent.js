import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../config";
function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <React.Fragment>
      <div className="col-md-4 text-center">
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img className="mt-2" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        <br/>
        <b>{title}</b>
        <br />
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
       <br />
        <span className="my-5">{date}</span>
   
      </div >
    </React.Fragment>
  );
}

export default SingleContent;
