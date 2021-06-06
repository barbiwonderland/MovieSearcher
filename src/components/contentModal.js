import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config";
import { Button } from "@material-ui/core";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Caroussel from "./caroussel";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ContentModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`
    );
    setContent(data);
    // // console.log(data);
  };
  const fecthVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`
    );
    // ? si existe..
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fecthVideo();
  }, []);
  return (
    <div>
      <button className="BotonCard" type="button" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        className="modalSize"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className=" container text-center">
                <div className="row">
                  <div className="col-md-12">
                    <div
           
                    >
                      <img
                      className="image"
                        src={
                          content.backdrop_path
                            ?  `https://image.tmdb.org/t/p/original/${content.backdrop_path}`
                            : unavailableLandscape
                        }
                        alt={content.name || content.title}
                      />
                    </div>
                    <div className="title">
                      <h2>{content.name || content.title}</h2>
                    </div>
                    <div className="date">
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "----"
                      ).substring(0, 4)}
                    </div>
                    <div className="tagline">
                      {content.tagline && <i>{content.tagline}</i>}
                    </div>
                    <div className="description">
                      <p>{content.overview}</p>
                    </div>

                    {/* <Caroussel media_type={media_type} id={id} /> */}
                    <Button
                      variant="contained"
                      startIcon={<YoutubeIcon />}
                      color="secondary"
                      target="_blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      TRAILER
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
