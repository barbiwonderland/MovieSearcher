import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

function Genres({
  type,
  selectedGenres,
  genres,
  setGenres,
  setPage,
  setSelectedGenres,
}) {
   const handleAdd = (genre) => {
     setSelectedGenres([...selectedGenres, genre]);
     setGenres(genres.filter((g) => g.id !== genre.id));
     setPage(1);
   };
const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  console.log(genres,selectedGenres)

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});//unmounting
    };
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
        {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
          {genres && genres.map((genre) => (
              <Chip
                label={genre.name}
                key={genre.id}
                className="m-1"
                clickable
                onclick={handleAdd(genre)}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Genres;
