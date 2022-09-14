import React from 'react';
import ImgBx from '../../ImgBx/ImgBx';
import styles from "./Card.module.css";

function Card({ img, title, content }) {
    return (
        <div className="d-flex flex-sm-row flex-column me-lg-1 me-4 w-50">
            <div style={{
                minWidth: "30px",
                minHeight: "30px",
                maxWidth: "30px",
                maxHeight: "30px",
            }}>
                <ImgBx img={img} />
            </div>
            <div className={`${styles.p} ms-sm-4 mt-sm-0 mt-3 pe-3 pe-sm-0`}>
                <strong>{title}</strong>
                <p className='mt-2'>{content}</p>
            </div>
        </div>
    )
}

export default Card