import axios from "axios";
import react, { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent";

function Trending() {
  const [content, setContent] = useState([]);
  console.log(process.env);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span>Trending</span>
      <div>
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
  );
}

export default Trending;
