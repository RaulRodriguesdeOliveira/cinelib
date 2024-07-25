import "./App.css";
import Movies from "./Views/Movies/Movies";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoMovies from "./Views/InfoMovies/InfoMovies";
import axios from "axios";
import { setLanguagesData } from "./store/modules/Global/action";
import { useEffect } from "react";

function App() {

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

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:id" element={<InfoMovies />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
