import React from 'react'
import {Col} from 'antd'
import './GridCards.css'

function GridCards(props) {

    const genreConfig = (genre)=> {
        
        let genreList = []
        for(let i =0; i< genre.length;i++){
            if(genre[i] === 28){
                genreList.push('액션 ')
            }
            if(genre[i] === 16){
                genreList.push('애니메이션 ')
            }
            if(genre[i] === 99){
                genreList.push('다큐멘터리 ')
            }
            if(genre[i] === 18){
                genreList.push('드라마 ')
            }
            if(genre[i] === 10751){
                genreList.push('가족 ')
            }
            if(genre[i] === 14){
                genreList.push('판타지 ')
            }
            if(genre[i] === 36){
                genreList.push('역사 ')
            }
            if(genre[i] === 35){
                genreList.push('코미디 ')
            }
            if(genre[i] === 10752){
                genreList.push('전쟁 ')
            }
            if(genre[i] === 80){
                genreList.push('범죄 ')
            }
            if(genre[i] === 10402){
                genreList.push('음악 ')
            }
            if(genre[i] === 9648){
                genreList.push('미스터리 ')
            }
            if(genre[i] === 10749){
                genreList.push('로맨스 ')
            }
            if(genre[i] === 878){
                genreList.push('SF ')
            }
            if(genre[i] === 27){
                genreList.push('공포 ')
            }
            if(genre[i] === 10770){
                genreList.push('TV 영화 ')
            }
            if(genre[i] === 53){
                genreList.push('스릴러 ')
            }
            if(genre[i] === 37){
                genreList.push('서부 ')
            }
            if(genre[i] === 12){
                genreList.push('모험 ')
            }
        }
        return genreList
    }
    
    if(props.landingPage) {
        return (<Col lg={4} md={6} xs={12}>
            <div style={{position:'relative'}} >
                <a href={`/movie/${props.movieId}`} >
                    <img style={{width:'80%',height:'250px'}} src={props.image} alt={`${props.movieName}`}  />
                    <span className='desc' >
                        제목 : {props.movieName}<br/><br/>
                        장르 : {genreConfig(props.genre)}<br/><br/>
                        개봉일 : {props.releaseDate}<br/><br/>
                        평점 : {props.voteAverage}/ 10<br/><br/>
                        {props.isAdult ? 
                        <img src='https://as1.ftcdn.net/jpg/03/82/76/66/500_F_382766642_6wXnMs19WwKcMQOlgjM6RkCc9Sj7PUgL.jpg' alt='19+'/>
                        : <img src='https://as1.ftcdn.net/jpg/04/02/40/00/500_F_402400066_EY9GQhvkCaYg55JmX7HARWLACUDBUuQZ.jpg' alt='19-'/> }<br/><br/>
                    </span>
                </a>
            </div>
        </Col>)
    }else {
        return (
            <Col lg={2} md={3} xs={8}>
            <div style={{position:'relative'}} >    
                <img style={{width:'80%',height:'100px'}} src={props.image} alt={`${props.characterName}`}  />   
                <p style={{fontSize:'10px'}}>{props.characterName}</p>         
            </div>
        </Col>
        )
    }
}

export default GridCards
