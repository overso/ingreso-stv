import React, { PureComponent } from 'react';
import MovieResults from "./components/MovieResults";
import SearchInput from "./components/SearchInput";
import Logo from "./components/Logo";
import { connect } from 'react-redux';
import { fetchMovies, filterMovie } from './actions';
import './App.css';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.props.fetchMovies();
  }

  handleSearchChange = event => {
    const data = this.props.movies ? this.props.movies.data : [];
    this.props.filterMovie(data, event.target.value, 40);
  };

  render() {
    return (
      <div>
        <Logo 
          src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg"
          alt="ClaroVideo"
        />
        <SearchInput textChange={this.handleSearchChange} />
        <MovieResults movies={this.props.movies ? this.props.movies.filteredMovies : []}/>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({ movies });
const mapDispatchToPropsParam = { fetchMovies, filterMovie };

export default connect(mapStateToProps, mapDispatchToPropsParam)(MovieList);
