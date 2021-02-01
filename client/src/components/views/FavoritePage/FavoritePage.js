import React,{useEffect,useState} from 'react'
import {Popover,Typography,Button} from 'antd'
import './favorite.css'
import axios from 'axios'
import { IMAGE_BASE_URL } from '../../Config'
const {Title} = Typography
function FavoritePage() {

    const [Favorites, setFavorites] = useState([])



    useEffect(() => {
        fetchFavoriteMovies()
    }, [])


    const fetchFavoriteMovies = () => {
        axios.post('/api/favorite/getFavoriteMovies',{userFrom:localStorage.getItem('userId')})
        .then(response => {
            if(response.data.success){
                console.log(response.data.favorites)
                setFavorites(response.data.favorites)
            }else {
                alert('favorite movies 가져오기 실패')
            }
        })
    }


    const onClickDelete = (movieId,userFrom) => {

        const variable ={
            movieId,
            userFrom
        }

        axios.post('/api/favorite/removeFromFavorite',variable)
        .then(response => {
            if(response.data.success){
                fetchFavoriteMovies()
            }else{
                alert('favorite movie 삭제 실패')
            }
        })
    }

    


    const renderCards = Favorites.map((favorite,index) => {    
        
        const content = (
            <div>
                {favorite.moviePost ? 
                    <img  src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> :
                    'no image'
                }
            </div>
        )

        return <tr key={index}>
                <Popover content={content} title={`${favorite.movieTitle}`}>
                    <td >{favorite.movieTitle}</td>
                </Popover>
                <td>{favorite.movieRunTime} (분)</td>
                <td><Button type='danger' onClick={() => onClickDelete(favorite.movieId,favorite.userFrom)}>remove</Button></td>
            </tr>
        })

    return (
        <div style={{width:'85%',margin:'3rem auto'}}>
            <Title level={2}>Favorite Movies</Title>
            <hr/>

            <table>
                <thead>
                    <tr>
                        <th>Movie Titles</th>
                        <th>Movie RunTime</th>
                        <th>Remove From Favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
