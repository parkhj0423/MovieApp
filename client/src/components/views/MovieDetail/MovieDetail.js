import React,{useEffect,useState} from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import {Button} from 'antd';
import MainImage from '../LandingPage/Section/MainImage'
import MovieInfo from './Sections/MovieInfo'
import GridCards from '../commons/GridCards';
import {Row} from 'antd'

function MovieDetail(props) {

    let movieId = props.match.params.movieId
    
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)
    useEffect(() => {
       fetch(endpointInfo)
       .then(response => response.json())
       .then(response => {
           setMovie(response)
           console.log('Movie : ', response)
       })

       fetch(endpointCrew)
       .then(response => response.json())
       .then(response => {
           setCasts(response.cast)
           console.log('casts : ', response.cast)
       })


    }, [])

    const onActorToggle = () => {
        setActorToggle(!ActorToggle)
    }
   

    return (
        <div>
            {/* Header */}
            <MainImage 
                title={Movie.original_title} 
                description={Movie.overview}
                MainMovieImage={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
            />
            

            {/* BODY */}
            <div style={{width:'85%',margin:'1rem auto'}}>

                {/* Movie Info */}
                <MovieInfo
                    movie={Movie}    
                />
                <br/>

                {/* Actor Grid */}

                <div style={{display:'flex',justifyContent:'center',margin:'2rem'}}>
                     <Button type='default' onClick={onActorToggle} >Show Actors</Button>
                </div>
                {ActorToggle &&
                    <Row gutter={[16,16]}>
                            {Casts && Casts.map((cast,index) => (
                                <React.Fragment key={index}> 
                                    {cast.profile_path &&
                                        <div className='card'>
                                            <GridCards
                                                image={cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}`: null} 
                                                characterName={cast.name}
                                            /> 
                                        </div>
                                    }   
                                </React.Fragment>
                            ))}
                    </Row>
                }

            </div>
        </div>
    )
}

export default MovieDetail
