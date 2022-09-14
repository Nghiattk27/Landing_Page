import React from 'react';
import styles from './Card.module.css';

function Card({ title, content }) {
    return (
        <div className={`
        pt-lg-3 pb-lg-1 ps-lg-3 pe-lg-4 
        pt-md-3 pb-md-5 ps-md-4 pe-md-4 
        pt-3 pb-1 ps-3 pe-5
        position-relative rounded 
         ${styles.bg}`}>
            <div className={`position-absolute top-0 start-0 w-100`}
                style={{
                    background: "#fff",
                    zIndex: -1,
                }}>
            </div>
            <h2 className={styles.h2}>
                {title}
            </h2>
            <p className={styles.p}>
                {content}
            </p>
        </div>
    )
}

export default Card