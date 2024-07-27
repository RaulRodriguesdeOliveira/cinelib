import axios from "axios";
import React, { useEffect } from "react";
import { setTVSeriesData } from "../../store/modules/TVSeries/action";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { TVSERIES } from "../../store/modules/TVSeries/types";
import PosterTVSerie from "../../components/CardTVSerie";
import { GLOBAL } from "../../store/modules/Global/types";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { PageBody, PageControls } from "./style";

const TVSeries = () => {
  const { tvseries } = useSelector<ApplicationState, TVSERIES>(
    (state) => state.tvseries
  );

  const { selectLang } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  const [page, setPage] = React.useState(1);

  function handlePage(event: React.MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.value;
    if (value === "Previous" && page > 1) {
      setPage(page - 1);
    } else if (value === "Next" && page < 500) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  }
  
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setPage(Number(event.target.value));
    event.target.value = "";
  };

  async function getTVSeries() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=${selectLang}&page=${page}&sort_by=popularity.desc&api_key=d24c8fa294078dc6f582d21f50f4a1a6`
      )
      .then((response) => {
        const TVSerieData = [];
        for (const key in response.data.results) {
          TVSerieData.push(response.data.results[key]);
        }
        console.log(TVSerieData);
        setTVSeriesData(TVSerieData);
      });
  }

  useEffect(() => {
    getTVSeries();
  }, [selectLang, page]);

  return (
    <PageBody>
      <Navbar />
      <div className="body-container">
        <div className="container-xxl">
          <div className="row d-flex p-5">
            {tvseries.map((serie) => {
              return <PosterTVSerie key={serie.id} props={serie} />;
            })}
          </div>
        </div>
        <PageControls>
        <div className="d-flex mb-5 gap-5">
          <button value="Previous" onClick={handlePage}>
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
          <button value="Next" onClick={handlePage}>
            Próxima
          </button>
        </div>
        </PageControls>
      </div>
      <Footer />
    </PageBody>
  );
};

export default TVSeries;
