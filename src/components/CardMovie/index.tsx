import { Link } from "react-router-dom";
import { InfoMovie } from "../../models/movie";
import { Poster } from "./style";

interface Props {
  props: InfoMovie;
}

function PosterMovie({ props }: Props) {
  return (
    <Poster>
      <Link to={`/movies/${props.id}`}>
        <div className="body">
          <span className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
              alt={props.title}
            />
          </span>
          <span>
            <div className="movie-name">{props.title}</div>
          </span>
        </div>
      </Link>
    </Poster>
  );
}

export default PosterMovie;
