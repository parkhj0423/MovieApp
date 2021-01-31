import React from 'react'
import  { Icon } from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'12px',
            borderTop:'1px solid #1b282b',
            marginBottom:'none',
            backgroundColor:'#1b282b'
        }}>
            
            <p style={{fontSize:'12px'}}> 
                <Icon type='github'/> parkhj0423 <br/>
                <Icon type='mail'/> parkhj0423@naver.com <br/>
                <Icon type='phone'/> 010 - 9071 - 6332
                
            </p>
           
        </div>
    )
}

export default Footer