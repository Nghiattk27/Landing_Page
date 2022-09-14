import React from 'react';
import styles from "./TextBx.module.css";

function TextBx({ title, content }) {
    return (
        <div className='text-lg-start text-md-center text-small-start text-center'>
            <div className={styles.h2Bx}>
                <h2 className={styles.h2}>
                    {title}
                </h2>
            </div>
            <p className={styles.p}>
                {content}
            </p>
        </div>
    )
}

export default TextBx