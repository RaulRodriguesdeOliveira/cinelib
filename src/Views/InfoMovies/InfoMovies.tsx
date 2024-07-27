import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { setDetailsMovie } from "../../store/modules/InfoMovies/action";
import { useSelector } from "react-redux";
import { DETAILSMOVIE } from "../../store/modules/InfoMovies/types";
import { ApplicationState } from "../../store";
import { Info, MovieImages } from "./style";
import starRate from "../../assets/star-rate.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GLOBAL } from "../../store/modules/Global/types";

const InfoMovies = () => {
  const { id } = useParams();

  const { detailsMovie } = useSelector<ApplicationState, DETAILSMOVIE>(
    (state) => state.detailsMovie
  );

  const { selectLang } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=${selectLang}&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
      )
      .then((response) => {
        setDetailsMovie(response.data);
      });
  }, [selectLang]);
  console.log(detailsMovie);

  return (
    <div>
      <Navbar />
      <MovieImages
        backgroundimage={`https://image.tmdb.org/t/p/w500/${detailsMovie.backdrop_path}`}
      >
        <div className="blur-background">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`}
            alt={detailsMovie.title}
          />
        </div>
      </MovieImages>
      <Info>
        <div>
          <h2 className="movie-title">{detailsMovie.title}</h2>
          <div className="movie-rating">
            <img src={starRate} alt="star" />
            <span className="movie-vote">
              {detailsMovie.vote_average.toFixed(2)}
            </span>
          </div>
          {detailsMovie.overview !== "" && 
          <div className="movie-overview">
            <h3>Overview</h3>
            <div className="overview-text">{detailsMovie.overview}</div>
          </div>}
          <div className="production-companies">
            <h3>Production Companies</h3>
            <div className="companies">
              {detailsMovie.production_companies.map((production) => (
                <div key={production.id} className="production">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${production.logo_path}`}
                    className="production-logo"
                    alt="production-logo"
                  />
                  <p>{production.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {detailsMovie.homepage !== "" && (
              <div className="homepage">
                <h3>Homepage</h3>
                <a target="blank" href={detailsMovie.homepage}>
                  {detailsMovie.homepage}
                </a>
              </div>
            )}
          </div>
        </div>
      </Info>
      <Footer />
      </div>
  );
};

export default InfoMovies;
