import React, { useEffect, useState } from "react";
import "./GenreContener.css";
import SingleMovie from "../SingleMovie/SingleMovie";
import { getContent } from "../../utils/api-request";

const GenreContener = ({ title, movie_url }) => {
  const [movis, setmovis] = useState([]);

  useEffect(() => {
    const fatch = async () => {
      const data = await getContent(movie_url);
      setmovis(data?.results);
    };

    fatch(); 
  }, [movie_url]);

  return (
    <div className="hero"> 
      <h1>{title}</h1>
      <div className="images_Contaner">
      {movis.map((Movie ,index) => (
        <SingleMovie movis={Movie} />
        ))}
        </div>
        <hr className="line"/>
    </div>
  );
};

export default GenreContener;
