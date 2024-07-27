// import { Link } from "react-router-dom";
import { Poster } from "./style";
import { InfoTVSerie } from "../../models/tvSerie";
import { Link } from "react-router-dom";

interface Props {
  props: InfoTVSerie;
}

function PosterTVSerie({ props }: Props) {
  return (
    <Poster>
      <Link to={`/tvseries/${props.id}`}>
        <div className="body">
          <span className="serie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
              alt={props.name}
            />
          </span>
          <span>
            <div className="serie-name">{props.name}</div>
          </span>
        </div>
      </Link>
   </Poster>
  );
}

export default PosterTVSerie;
