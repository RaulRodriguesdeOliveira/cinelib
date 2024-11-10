/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { setMoviesData } from "../../store/modules/Movies/action";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { MOVIES } from "../../store/modules/Movies/types";
import PosterMovie from "../../components/CardMovie";
import React from "react";
import { PageBody, PageControls } from "./style";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GLOBAL } from "../../store/modules/Global/types";
// import { setMoviesData } from "../store/modules/Movies/action";

const Movies = () => {
  const { movies: moviesState } = useSelector<ApplicationState, MOVIES>(
    (state) => state.movies
  );

  const { selectLang } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  const [page, setPage] = React.useState(1);

  // const MoviesTitles: { titles: string[]; id: number[] } = {
  //   titles: [],
  //   id: [],
  // };
  // movies.map(
  //   (movie) => (
  //     MoviesTitles.titles.push(movie.title), MoviesTitles.id.push(movie.id)
  //   )
  // );

  // console.log(MoviesTitles);

  // const titlesFiltered = MoviesTitles.titles.filter((title) =>
  //   title.toLowerCase().includes(search.toLowerCase())
  // );

  function handlePage(event: React.MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.value;
    if (value === "next" && page < 500) {
      setPage(page + 1);
    } else if (value === "previous" && page > 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setPage(Number(event.target.value));
    event.target.value = "";
  };
  async function getMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${selectLang}&page=${page}&sort_by=popularity.desc&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
      )
      .then((response) => {
        const moviesData = [];
        for (const key in response.data.results) {
          moviesData.push(response.data.results[key]);
        }
       console.log(moviesData);

        setMoviesData(moviesData);
      });
  }

  useEffect(() => {
    getMovies();
    console.log(page);
  }, [page, selectLang]);
  return (
    <div>
      <Navbar />
      <PageBody>
        <div className="body-container">
          <div className="container-xxl">
            <div className="row d-flex p-5">
              {moviesState
                .map((movie) => (
                  <PosterMovie key={movie.id} props={movie} />
                ))}
            </div>
          </div>
          <PageControls>
            <div className="d-flex mb-5 gap-5">
              <button value="previous" onClick={handlePage}>
                Anterior
              </button>
              <span>
                Page{" "}
                <input
                  type="number"
                  onBlur={handleBlur}
                  placeholder={page.toString()}
                />
                of 500
              </span>
              <button value="next" onClick={handlePage}>
                Próximo
              </button>
            </div>
          </PageControls>
        </div>
      </PageBody>
      <Footer />
    </div>
  );
};

export default Movies;
