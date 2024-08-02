import cineLibLogo from "../../assets/Logos/cinelib-logo-white.png";
import { Link } from "react-router-dom";
import { NavContainer } from "./style";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { GLOBAL } from "../../store/modules/Global/types";
import { setSelectLangData } from "../../store/modules/Global/action";

const Navbar = () => {
  const { languages, selectLang } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setSelectLangData(selectedLanguage);
  };

  const languageOptions = languages.map((language) => (
    <option key={language} value={language}>
      {language}
    </option>
  ));

  return (
    <NavContainer>
      <Link to="/">
        <img className="cinelib-logo" src={cineLibLogo} alt="" />
      </Link>
      <div className="catalog">
        <Link to="/" className="movies">
          Movies
        </Link>
        <Link to="/tvseries" className="tvseries">
          TV Series
        </Link>
      </div>
      <select
        className="languages"
        onChange={handleLanguageChange}
        value={selectLang}
      >
        {languageOptions}
      </select>
    </NavContainer>
  );
};

export default Navbar;
