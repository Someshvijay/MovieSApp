import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { Carousel } from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Carousel>
        {movies.map((movie, index) => (
          <Paper key={index}>
            <div className="movie-card-container">
              <div className="movie-card">
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt={movie.title} />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home movies={movies} />} /> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
