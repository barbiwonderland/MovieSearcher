import "./components/header.css";
import Header from "./components/header";
import SimpleBottomNavigation from "./components/mainNav";
import { Container } from "@material-ui/core";
import { Switch,Route,BrowserRouter } from "react-router-dom";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
          <Header />
          <SimpleBottomNavigation />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
