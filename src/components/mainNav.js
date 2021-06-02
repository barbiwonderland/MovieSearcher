import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MovieIcon from "@material-ui/icons/Movie";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    width: "100vw",
    bottom: 0,
    position: "fixed",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(() => {
    // Define los botones de abajo
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/Movies");
    else if (value === 2) history.push("./Series");
    else if (value === 3) history.push("./Search");
  }, [value]);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
