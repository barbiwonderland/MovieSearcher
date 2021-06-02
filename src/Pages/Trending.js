import axios from "axios";
import react, { useState, useEffect } from "react";
import CustomPagination from "../components/customPagination";
import SingleContent from "../components/SingleContent";

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}& page=${page}`
    );
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <div className="container text-center">
        <h2 className="text-center m-3">Trending</h2>

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
                  media_type={x.media_type}
                  vote_average={x.vote_average}
                />
              ))}
          </div>
        </div>
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
