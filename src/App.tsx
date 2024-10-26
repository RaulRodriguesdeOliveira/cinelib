import "./App.css";
import Movies from "./Views/Movies/Movies";
import {useSelector } from "react-redux";
import { ApplicationState } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoMovies from "./Views/InfoMovies/InfoMovies";
import axios from "axios";
import { setFilteredContentData, setLanguagesData } from "./store/modules/Global/action";
import { useEffect } from "react";
import TVSeries from "./Views/TVSeries/TVSeries";
import InfoTVSeries from "./Views/InfoTVSeries/InfoTVSeries";
import { GLOBAL } from "./store/modules/Global/types";

function App() {
  const { selectLang, search, filteredContents } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );


  useEffect(() => {
    getLanguages()
  },[])

  async function getLanguages() {
    axios
      .get(
        "https://api.themoviedb.org/3/configuration/primary_translations?api_key=d24c8fa294078dc6f582d21f50f4a1a6"
      )
      .then((response) => {
        setLanguagesData(response.data);
      });
  }

  useEffect(() => {
    if (search) getTitles()
      console.log(filteredContents);
  }, [search, selectLang])

  async function getTitles() {
    const searchReplaced = search.replace(/ /g, "+");

    const fetchMovies = axios.get(
      `https://api.themoviedb.org/3/search/movie?language=${selectLang}&query=${searchReplaced}&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
    );
    const fetchTvSeries = axios.get(
      `https://api.themoviedb.org/3/search/tv?language=${selectLang}&query=${searchReplaced}&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
    );

    Promise.all([fetchMovies, fetchTvSeries]).then((responses) => {
      const [moviesResponses, tvSeriesResponses] = responses;
      const moviesData = moviesResponses.data.results || []
      const tvSeriesData = tvSeriesResponses.data.results || []
      setFilteredContentData([...moviesData, ...tvSeriesData])
      
    })
  }
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:id" element={<InfoMovies />} />
          <Route path="/tvseries/:id" element={<InfoTVSeries/>} />
          <Route path="/tvseries" element={<TVSeries/>} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
