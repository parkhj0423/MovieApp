import React from 'react'
import {Row} from 'antd'
import { IMAGE_BASE_URL } from '../../../Config'
import GridCards from '../../commons/GridCards'


function MovieSearchPage(props) {
    
    let result = props.movies.filter(movies => {
        return movies.original_title.includes(props.SearchValue)
    })
    
    return (
        <div >
            <br/> 
            <Row gutter={[16,16]}>
            {result && result.map((movie,index) => (
                    <GridCards 
                        key={index}
                        searchPage
                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                        movieId={movie.id}
                        movieName={movie.original_title} 
                        genre={movie.genre_ids}
                        isAdult={movie.adult}
                        releaseDate={movie.release_date}
                        voteAverage={movie.vote_average}
                    />                           
            ))}
            </Row>
            <br/> 
        </div>
    )
}

export default MovieSearchPage
