import { Tab, Tabs, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import axios from "axios";
import SingleContent from "../components/SingleContent";
import CustomPagination from "../components/customPagination";
import { Button } from "react-bootstrap";
function Search() {
  const [type, setType] = useState();
  const [page, setPage] = useState();
  const [content, setContent] = useState();
  const [numbOfPages, setNumbOfPages] = useState();
  const [searchText, setSearchText] = useState("");
  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumbOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row"></div>
        <h2 className="text-center m-3 FuenteCinema">Buscar</h2>
        <div className="col-12 d-flex mx-auto text-center justify-content-center align-items-center">
          <TextField
            className=" mx-auto text-center align-content-center"
            id="outlined-basic"
            variant="outlined"
            style={{ flex: 1 }}
            label="Buscar.."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="light"
            onClick={fetchSearch}
            className="ml-2 bg-white"
          >
            <SearchOutlinedIcon />
          </Button>
        </div>
        <Tabs
          className="my-4"
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
            <Tab style={{ width: "50%" }} label="Buscar Peliculas" />
            <Tab style={{ width: "50%" }} label="Buscar Series" />
        </Tabs>

        <div>
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
                    media_type={type ? "tv" : "movie"}
                    vote_average={x.vote_average}
                  />
                ))}
            </div>
          </div>
          {searchText &&
            !content &&
            (type ? (
              <div className="text-center">
                <h2>No series Found</h2>
              </div>
            ) : (
              <div className="text-center">
                <h2>No Movies Found</h2>
              </div>
            ))}
        </div>
        {numbOfPages > 1 && (
          <CustomPagination setPage={setPage} numbOfPages={numbOfPages} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Search;
