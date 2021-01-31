import React from 'react'
import {Typography} from 'antd'
const {Title} = Typography
function MainImage(props) {
    return (
        <div>
            <div style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${props.MainMovieImage}'), #1c1c1c`,
            width: '100%',
            height:'400px',
            backgroundSize: '100% cover',
            backgroundPosition: 'center, top',
            backgroundRepeat:'no-repeat',
            position: 'relative'
        }}>
                <div style={{position:'absolute',maxWidth:'500px',bottom:'2rem',marginLeft:'2rem'}}>
                    <Title style={{color:'white'}} level={1}>{props.title}</Title>
                    <p style={{color:'white',fontSize:'1rem'}}>{props.description}</p>

                </div>
            </div>
        </div>
    )
}

export default MainImage
