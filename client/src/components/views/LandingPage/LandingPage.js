import React,{useEffect,useState} from 'react'
import {Typography, Row,Button,Tabs} from 'antd';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import MainImage from './Section/MainImage'
import GridCards from '../commons/GridCards';
const {Title} = Typography
const { TabPane } = Tabs;
function LandingPage() {
   
    const [PopularMovies, setPopularMovies] = useState([])
    const [NowPlayingMovies, setNowPlayingMovies] = useState([])
    const [UpcomingMovies, setUpcomingMovies] = useState([])
    const [TopRatedMovies, setTopRatedMovies] = useState([])

    const [PopMainMovieImage, setPopMainMovieImage] = useState(null)
    const [NowMainMovieImage, setNowMainMovieImage] = useState(null)
    const [UpMainMovieImage, setUpMainMovieImage] = useState(null)
    const [TopMainMovieImage, setTopMainMovieImage] = useState(null)

    const [PopCurrentPage, setPopCurrentPage] = useState(1)
    const [NowCurrentPage, setNowCurrentPage] = useState(1)
    const [UpCurrentPage, setUpCurrentPage] = useState(1)
    const [TopCurrentPage, setTopCurrentPage] = useState(1)

    
    useEffect(() => {
        const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        const nowPlayingEndpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        const upcomingEndpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        const topRatedEndpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(popularEndpoint)
        fetchMovies(nowPlayingEndpoint)
        fetchMovies(upcomingEndpoint)
        fetchMovies(topRatedEndpoint)
    }, [])

    function fetchMovies (endpoint) {
        if(endpoint.includes('popular')) {
            fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log("popular response",response.results)
                setPopularMovies([...PopularMovies, ...response.results])
                setPopMainMovieImage(response.results[0])
                setPopCurrentPage(PopCurrentPage+1)
            })
        }
        if(endpoint.includes('now_playing')) {
            fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log("nowplaying response",response.results)
                setNowPlayingMovies([...NowPlayingMovies, ...response.results])
                setNowMainMovieImage(response.results[0])
                setNowCurrentPage(NowCurrentPage+1)
            })
        }
        if(endpoint.includes('upcoming')) {
            fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log("upcoming response",response.results)
                setUpcomingMovies([...UpcomingMovies, ...response.results])
                setUpMainMovieImage(response.results[0])
                setUpCurrentPage(UpCurrentPage+1)
            })
        }
        if(endpoint.includes('top_rated')) {
            fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log("toprated response",response.results)
                setTopRatedMovies([...TopRatedMovies, ...response.results])
                setTopMainMovieImage(response.results[0])
                setTopCurrentPage(TopCurrentPage+1)
            })
        }
    }

    
    
    
   

    const loadMorePopItems = () => {
        console.log('Poppage :',PopCurrentPage)
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${PopCurrentPage}`
        fetchMovies(endpoint)
        
    }
    const loadMoreNowItems = () => {
        console.log('Nowpage :',NowCurrentPage)
        const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${NowCurrentPage}`
        fetchMovies(endpoint)
        
    }
    const loadMoreUpItems = () => {
        console.log('UPpage :',UpCurrentPage)
        const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${UpCurrentPage}`
        fetchMovies(endpoint)
        
    }
    const loadMoreTopItems = () => {
        console.log('Toppage :',TopCurrentPage)
        const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${TopCurrentPage}`
        fetchMovies(endpoint)
        
    }


    // const renderCards = Movies.map((movies,index) => {
    //     return (<Col  key={index}   lg={6} md={12} xs={24}>
    //         <div style={{position:'relative'}}>
    //          <a href='/'>
    //              <img style={{width:'100%'}} src={`${IMAGE_BASE_URL}w500${movies.poster_path}`} alt={`${movies.original_title}`} />
    //         </a>
    //     </div>
    //     </Col>);
    // })


    return (
        <Tabs defaultActiveKey='1' centered style={{backgroundColor:'#0e1d24', border:'none'}}>
            <TabPane tab='Popular' key='1' >
                <div style={{width:'100%', margin: 0}}>
                    {/* Main Image */}
                    {PopMainMovieImage && 
                    <MainImage 
                        title={PopMainMovieImage.original_title} 
                        description={PopMainMovieImage.overview}
                        MainMovieImage={`${IMAGE_BASE_URL}w1280${PopMainMovieImage.backdrop_path}`}
                    />
                    }
                    <div style={{width:'85%', margin:'1rem auto'}}>
                        <Title level={2}>Movies by Popular</Title>
                        <hr/>

                        {/* Movie Grid Cards */}
                        <Row gutter={[16,16]}>
                            {PopularMovies && PopularMovies.map((movie,index) => (
                            
                                    <GridCards 
                                        key={index}
                                        landingPage
                                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                        movieId={movie.id}
                                        movieName={movie.original_title} 
                                        genre={movie.genre_ids}
                                        isAdult={movie.adult}
                                        releaseDate={movie.release_date}
                                        voteAverage={movie.vote_average}
                                    />
                            ))}
                            {/* {renderCards}  */}
                        </Row>
                        
                    </div>
                    <div style={{display:'flex',justifyContent:'center',padding:'30px 0'}}>
                        <Button type='default' onClick={loadMorePopItems}>Load more</Button>
                    </div> 
                </div>
            </TabPane>
            <TabPane tab='NowPlaying' key='2' >
            <div style={{width:'100%', margin: 0}}>
                    {/* Main Image */}
                    {NowMainMovieImage && 
                    <MainImage 
                        title={NowMainMovieImage.original_title} 
                        description={NowMainMovieImage.overview}
                        MainMovieImage={`${IMAGE_BASE_URL}w1280${NowMainMovieImage.backdrop_path}`}
                    />
                    }
                    <div style={{width:'85%', margin:'1rem auto'}}>
                        <Title level={2}>Movies by NowPlaying</Title>
                        <hr/>

                        {/* Movie Grid Cards */}
                        <Row gutter={[16,16]}>
                            {NowPlayingMovies && NowPlayingMovies.map((movie,index) => (
                            
                                    <GridCards 
                                        key={index}
                                        landingPage
                                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                        movieId={movie.id}
                                        movieName={movie.original_title} 
                                        genre={movie.genre_ids}
                                        isAdult={movie.adult}
                                        releaseDate={movie.release_date}
                                        voteAverage={movie.vote_average}
                                    />
                            ))}
                            {/* {renderCards}  */}
                        </Row>
                        
                    </div>
                    <div style={{display:'flex',justifyContent:'center',padding:'30px 0'}}>
                        <Button type='default' onClick={loadMoreNowItems}>Load more</Button>
                    </div> 
                </div>                 
            </TabPane>
            <TabPane tab='Upcoming' key='3' >
            <div style={{width:'100%', margin: 0}}>
                    {/* Main Image */}
                    {UpMainMovieImage && 
                    <MainImage 
                        title={UpMainMovieImage.original_title} 
                        description={UpMainMovieImage.overview}
                        MainMovieImage={`${IMAGE_BASE_URL}w1280${UpMainMovieImage.backdrop_path}`}
                    />
                    }
                    <div style={{width:'85%', margin:'1rem auto'}}>
                        <Title level={2}>Movies by Upcoming</Title>
                        <hr/>

                        {/* Movie Grid Cards */}
                        <Row gutter={[16,16]}>
                            {UpcomingMovies && UpcomingMovies.map((movie,index) => (
                                    <GridCards 
                                        key={index}
                                        landingPage
                                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                        movieId={movie.id}
                                        movieName={movie.original_title} 
                                        genre={movie.genre_ids}
                                        isAdult={movie.adult}
                                        releaseDate={movie.release_date}
                                        voteAverage={movie.vote_average}
                                    />
                            ))}
                            {/* {renderCards}  */}
                        </Row>
                        
                    </div>
                    <div style={{display:'flex',justifyContent:'center',padding:'30px 0'}}>
                        <Button type='default' onClick={loadMoreUpItems}>Load more</Button>
                    </div> 
                </div>
            </TabPane>
            <TabPane tab='TopRated' key='4' >
            <div style={{width:'100%', margin: 0}}>
                    {/* Main Image */}
                    {TopMainMovieImage && 
                    <MainImage 
                        title={TopMainMovieImage.original_title} 
                        description={TopMainMovieImage.overview}
                        MainMovieImage={`${IMAGE_BASE_URL}w1280${TopMainMovieImage.backdrop_path}`}
                    />
                    }
                    <div style={{width:'85%', margin:'1rem auto'}}>
                        <Title level={2}>Movies by TopRated</Title>
                        <hr/>

                        {/* Movie Grid Cards */}
                        <Row gutter={[16,16]}>
                            {TopRatedMovies && TopRatedMovies.map((movie,index) => (
                            
                                    <GridCards 
                                        key={index}
                                        landingPage
                                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                        movieId={movie.id}
                                        movieName={movie.original_title} 
                                        genre={movie.genre_ids}
                                        isAdult={movie.adult}
                                        releaseDate={movie.release_date}
                                        voteAverage={movie.vote_average}
                                    />
                            ))}
                            {/* {renderCards}  */}
                        </Row>
                        
                    </div>
                    <div style={{display:'flex',justifyContent:'center',padding:'30px 0'}}>
                        <Button type='default' onClick={loadMoreTopItems}>Load more</Button>
                    </div> 
                </div>
            </TabPane>
        </Tabs>
    )
}

export default LandingPage
