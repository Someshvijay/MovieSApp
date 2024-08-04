import React from "react";
import Hero from "../hero/Hero"; // Ensure correct import path

const Home = ({ movies = [] }) => {
  return <Hero movies={movies} />;
};

export default Home;
