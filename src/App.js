import React, { useState } from "react";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const [movie, setMovie] = useState(null);

  return (
    <div id="movieApp" className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <Search setMovie={setMovie} />
        </div>
        <div className="col-md-8 col-lg-9">
          {!movie && <Welcome />}
          {movie && movie.Response === "True" && <Movie movie={movie} />}
          {movie && movie.Response === "False" && <Alert />}
        </div>
      </div>
    </div>
  );
}

export default App;
