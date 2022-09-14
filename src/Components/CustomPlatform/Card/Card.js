import React from 'react';
import styles from './Card.module.css';

function Card({ title, icons, bgColor, color }) {

    return (
        <div className='text-center 
        pt-lg-5 pb-lg-5 
        pt-md-4 pb-md-4 
        pt-sm-5 pb-sm-5 mb-sm-4
        pt-4 pb-4 mb-4
        rounded-4'
            style={{
                background: `${bgColor}`,
            }}>
            <h2 className={styles.title}>{title}</h2>
            <div className='d-flex flex-row justify-content-center ps-4'>
                {
                    icons && (
                        icons.map((icon, index) => {
                            return (
                                <div key={icon} className={`rounded-circle d-flex justify-content-center
                                align-items-center me-4 ${styles.icon} `}
                                    style={{
                                        border: `2px solid ${color}`,
                                    }}>
                                    <i className={`${icon}`}
                                        style={{
                                            color: `${color}`,
                                        }}></i>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Card