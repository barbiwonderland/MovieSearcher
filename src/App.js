import SimpleBottomNavigation from "./components/mainNav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>

        <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
