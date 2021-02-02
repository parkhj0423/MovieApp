import React from 'react'
import {Descriptions} from 'antd'

function MovieInfo(props) {
    let { movie } = props; //! let movie = props.movie
    
    // 여기 엄청 헤맸다... object형 배열출력은 for in 사용으로 key값으로 value를 출력
    let Genre = []
    for(let key in movie.genres){
        Genre.push(movie.genres[key].name,' ')
     }
    
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
            <Descriptions.Item label="장르">{Genre}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo
