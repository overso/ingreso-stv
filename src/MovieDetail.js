import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { detailMovie } from './actions';
import Genres from "./components/Genres";
import Roles from "./components/Roles";
import TitleDetail from "./components/TitleDetail";
import { Link } from "react-router-dom";

class MovieDetail extends PureComponent {
  constructor(props) {
    super(props);
    const { movieId } = this.props.match.params
    this.props.detailMovie(movieId);
  }


  render() {
    if (!this.props.movies.selectedMovie) {
        return <div><h1>Cargando ...</h1></div>;
    }
    const { selectedMovie } = this.props.movies;
    return (
        <div className="wrapper">
            <div className="box header">
                <Link to={`/movies/`}><h2>regresar</h2></Link>
                <h2>{selectedMovie.title}</h2>
            </div>
            <div className="box sidebar"><img src={selectedMovie.image_medium} alt={selectedMovie.image_small_alt} /></div>
            <div className="box content">
                <TitleDetail 
                    title={selectedMovie.title}
                    publishyear={selectedMovie.extendedcommon.media.publishyear} 
                    ratingCode={selectedMovie.extendedcommon.media.rating.code}
                    duration={selectedMovie.extendedcommon.media.duration}
                />
                <Genres genres={selectedMovie.extendedcommon.genres.genre}/>
                <Roles roles={selectedMovie.extendedcommon.roles.role} />
                Título Original: {selectedMovie.extendedcommon.media.originaltitle}
            </div>
        </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({ movies });
const mapDispatchToPropsParam = { detailMovie };

export default connect(mapStateToProps, mapDispatchToPropsParam)(MovieDetail);
