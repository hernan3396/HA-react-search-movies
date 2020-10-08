import React, { useState } from "react";
import axios from "axios";

function Search({ setMovie }) {
  const [searching, setSearching] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState("");
  const searchMovie = async (event) => {
    // La siguiente línea de código previene que se "envie" el formulario (y se recargue la página).
    // previene que la pagina se recargue
    event.preventDefault();

    setSearching(true);
    const result = await axios.get(
      `https://private.omdbapi.com/?plot=full&apikey=bef9c583&t=${searchedMovie}`
    );
    setSearching(false);

    setMovie(result.data);
  };

  return (
    <div id="search" className="box">
      <h4>Película</h4>
      <form id="search-form" onSubmit={searchMovie}>
        <div className="form-group">
          <label htmlFor="input-movie" className="sr-only">
            Título de Película
          </label>
          <input
            id="input-movie"
            type="text"
            name="movie"
            className="form-control"
            placeholder="Escribir título..."
            value={searchedMovie}
            onChange={(e) => setSearchedMovie(e.target.value)}
          />
        </div>
        <button
          id="btn-search"
          className="btn btn-success"
          type="submit"
          name="button"
        >
          {!searching ? (
            <span id="not-loading">Buscar película</span>
          ) : (
            <span id="loading">
              Buscando <i className="fa fa-spinner fa-spin"></i>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Search;
