import React from 'react';
import  * as api from '../lib/api/post/index';

interface Props {

}
interface test {
    title : string
}
interface State {
    movies: test[];
    loading: Boolean;
}
  

class MovieListContainer extends React.Component<Props, State> {

    state: State = {
        movies : [],
        loading : false
    };
    componentDidMount= () => {
        let self = this
        async function fetchData (this:any) {
            const movieList = await api.getMovieList();
            
            self.setState({
                movies: movieList?.data.data.movies,
                loading:true
            });

        }
        fetchData();
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <div className="Aligner">
                <div className="Aligner-item red header-font-size">
                    MovieList
                </div>
                <div className="Aligner-item">
                    
                {loading ? movies.map(movie => (
                    <div style={{textAlign:'center'}}>
                        {movie.title}
                    </div>
                )) : 'loading...'}
                </div>
            </div>
        );
        
    }
}

export default MovieListContainer;