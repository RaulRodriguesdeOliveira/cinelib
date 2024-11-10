import axios from "axios";
import React, { useEffect } from "react";
import { setDetailsTvSeries } from "../../store/modules/InfoTVSeries/action";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { DETAILSTVSERIES } from "../../store/modules/InfoTVSeries/types";
import { useParams } from "react-router";
import { GLOBAL } from "../../store/modules/Global/types";
import { Info, MovieImages } from "./style";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import starRate from "../../assets/star-rate.png";

const InfoTVSeries = () => {
  const { id } = useParams();

  const { detailsTvSeries } = useSelector<ApplicationState, DETAILSTVSERIES>(
    (state) => state.detailsTvSeries
  );

  const { selectLang } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  async function getInfoTVSeries() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?language=${selectLang}&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
      )
      .then((response) => {
        setDetailsTvSeries(response.data);
        console.log(response.data);
        
      });
  }

  useEffect(() => {
    getInfoTVSeries();
  }, [id, selectLang]);

  const statusColorMap: {[key: string]: string} = {
    "Ended": "green",
    "Returning Series": "#cdab0d",
    "Canceled": "red"
  }

  const statusSerieMap: {[key: string]: string} = {
    "Ended": "Finished",
    "Returning Series": "In Progress",
    "Canceled": "Canceled"
  }

  return (
    < >
      <Navbar />
      <MovieImages
        backgroundimage={`https://image.tmdb.org/t/p/w500/${detailsTvSeries.backdrop_path}`}
      >
        <div className="blur-background">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500/${detailsTvSeries.poster_path}`}
            alt={detailsTvSeries.name}
          />
        </div>
      </MovieImages>
      <Info>
        <div>
          <h2 className="tv-title">{detailsTvSeries.name}</h2>
          <div className="tv-rating">
            <img src={starRate} alt="star" />
            <span className="tv-vote">
              {detailsTvSeries.vote_average.toFixed(2)}
            </span>
          </div>
          {detailsTvSeries.overview !== "" && (
            <div className="tv-overview">
              <h3>Overview</h3>
              <div className="overview-text">{detailsTvSeries.overview}</div>
            </div>
          )}
          <div className="info-series">
            <div className="seasons">
              <h3>Seasons</h3>
              <h3>{detailsTvSeries.number_of_seasons}</h3>
            </div>
            <div className="episodes">
              <h3>Episodes</h3>
              <h3>{detailsTvSeries.number_of_episodes}</h3>
            </div>
            <div className="status">
              <h3>Status</h3>
                <span className="status-serie" style={{backgroundColor: statusColorMap[detailsTvSeries.status] || "gray"}}>{statusSerieMap[detailsTvSeries.status]}</span>
              {/* {detailsTvSeries.status == "Ended" ?
              <span className="status-serie" style={{backgroundColor: "red"}}>Finished</span> : <span className="status-serie" style={{backgroundColor: "green"}}>In Progress</span>}             */}
            </div>
          </div>
          <div className="production-companies">
            <h3>Production Companies</h3>
            <div className="companies">
              {detailsTvSeries.production_companies.map((production) => (
                <div key={production.id} className="production">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${production.logo_path}`}
                    alt=""
                    className="production-logo"
                  />
                  <p>{production.name}</p>
                </div>
              ))}
            </div>
          </div>
          {detailsTvSeries.homepage !== "" && (
            <div className="homepage">
              <h3>Homepage</h3>
              <a target="blank" href={detailsTvSeries.homepage}>
                {detailsTvSeries.homepage}
              </a>
            </div>
          )}
        </div>
      </Info>
      <Footer />
    </>
  );
};

export default InfoTVSeries;
