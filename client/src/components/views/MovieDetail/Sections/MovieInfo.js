import React,{useState} from 'react'
import {Descriptions} from 'antd'

function MovieInfo(props) {
    let { movie } = props; //! let movie = preps.movie

    const [Genre, setGenre] = useState([])

    // let genres = movie.genres.map((genre,index)=> {
    //     setGenre(genre);
    // })
    
    console.log(props.movie.genres)
    // for(let i =0; i<props.movie.genres.length)
    
    return (
        <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="수익">{movie.revenue}$</Descriptions.Item>
            <Descriptions.Item label="상영 시간">{movie.runtime} (분)</Descriptions.Item>
            <Descriptions.Item label="평점" span={1}>
                {movie.vote_average} / 10
            </Descriptions.Item>
            <Descriptions.Item label="득표 수">{movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="상영 여부">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
            {/* <Descriptions.Item label="장르">{Genre}</Descriptions.Item> */}
        </Descriptions>
    )
}

export default MovieInfo
