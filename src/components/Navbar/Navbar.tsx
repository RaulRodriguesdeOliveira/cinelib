import cineLibLogo from "../../assets/Logos/cinelib-logo-white.png";
import { Link } from "react-router-dom";
import { NavContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { GLOBAL } from "../../store/modules/Global/types";
import { setSearchTitleData, setSelectLangData } from "../../store/modules/Global/action";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { languages, selectLang, search, filteredContents } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  );

  useEffect(() => {
    setSearchTerm(search);
  },[search])

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    dispatch(setSelectLangData(selectedLanguage));
  };

  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState(search);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setSearchTitleData(searchTerm));
    }, 300)

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, dispatch])
  
  const handleSearchDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchData = event.target.value;
    setSearchTerm(searchData);
    setIsSearchListVisible(searchData.length > 0);
  }    

  const languageOptions = languages.map((language) => (
    <option key={language} value={language}>
      {language}
    </option>
  ));
  
  const handleItemClick = () => {
    setIsSearchListVisible(false);
    setSearchTerm('');
  }

  return (
    <NavContainer>
      <Link to="/">
        <img className="cinelib-logo" src={cineLibLogo} alt="" />
      </Link>
      <div className="catalog">
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchDataChange}
          />
          {isSearchListVisible && filteredContents.length > 0 && (
            <div className="search-list">
            {filteredContents.map((content) => (
              <Link key={content.id} to={content.title ? `/movies/${content.id}` : `/tvseries/${content.id}`} onClick={handleItemClick}>
                {content.id != 0 ? <img className="item-img" src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`} alt="" /> : null}
                {content.title || content.name}
                
              </Link>
            ))}</div>
          )}
        </div>
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
