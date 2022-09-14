import React from 'react';
import "./ImgBx.module.css";

function ImgBx({ img }) {
    return (
        <div className='w-100 h-100 d-flex'>
            <div className='m-auto'
                style={{
                    height: "fit-content",
                }}>
                <img src={img} className='img-fluid' />
            </div>
        </div>
    )
}

export default ImgBx