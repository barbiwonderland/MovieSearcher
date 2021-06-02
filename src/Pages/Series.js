import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../components/customPagination";
import Genres from "../components/Genres";
import SingleContent from "../components/SingleContent";

function Series() {
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numbOfPages, setNumbOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  // const genreForUrls =useGenres(selectedGenres)

  const fectchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      // &with_genres=${genreForUrls}
    );
    setContent(data.results);
    setNumbOfPages(data.total_pages);
  };
  useEffect(() => {
    // console.log(selectedGenres,"hola");
    fectchMovies();
  }, [page]);
  return (
    <React.Fragment>
      <div className="container text-center">
        <h2 className="text-center m-3">Series</h2>
        <Genres
          type="tv"
          selectedGenres={selectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
          setSelectedGenres={setSelectedGenres}
        />

        <div>
          <div className="row">
            {content &&
              content.map((x) => (
                <SingleContent
                  key={x.id}
                  id={x.id}
                  poster={x.poster_path}
                  title={x.title || x.name}
                  date={x.first_air_date || x.release_date}
                  media_type="tv"
                  vote_average={x.vote_average}
                />
              ))}
          </div>
        </div>
      </div>
      {numbOfPages > 1 && (
        <CustomPagination setPage={setPage} numbOfPages={numbOfPages} />
      )}
    </React.Fragment>
  );
}

export default Series;
