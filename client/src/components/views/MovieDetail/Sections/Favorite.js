import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Icon} from 'antd'
function Favorite(props) {
    
    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost =  props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    let variable = {
        userFrom : userFrom,
        movieId : movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {
        

        axios.post('/api/favorite/favoriteNumber',variable)
        .then(response => {
            if(response.data.success){
                console.log("favoriteNumber",response.data)
                setFavoriteNumber(response.data.favoriteNumber)
            }else{
                alert('favorite 정보 가져오기 실패')
            }
        })


        axios.post('/api/favorite/favorited',variable)
        .then(response => {
            if(response.data.success){
                console.log('favorited',response.data)
                setFavorited(response.data.favorited)
            }else{
                alert('favorite 정보 가져오기 실패')
            }
        })


    }, [])

    const onIconClick = () => {
        
        if(Favorited){
            axios.post('/api/favorite/removeFromFavorite',variable)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber-1)
                    setFavorited(!Favorited)
                }else{
                    alert('favorite 삭제 실패')
                }
            })
        }else {
            axios.post('/api/favorite/addToFavorite',variable)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber+1)
                    setFavorited(!Favorited)
                }else{
                    alert('favorite 추가 실패')
                }
            })
        }

    }

    return (
        <div >
            <Icon type='star' theme={Favorited ? 'filled' : 'outlined'} style={{fontSize:'35px'}} onClick={onIconClick} />
            <p>이 영화를 좋아하는 사람 {FavoriteNumber}</p>
        </div>
    )
}

export default Favorite
