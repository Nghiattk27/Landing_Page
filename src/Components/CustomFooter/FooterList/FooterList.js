import React from 'react';
import styles from './FooterList.module.css';

function FooterList({ title, list }) {
    return (
        <div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <ul className={styles.list}>
                {
                    list && (
                        list.map(item => {
                            return (
                                <li className={styles.item}><a href='#' style={{
                                    color: "rgb(24, 59, 50)",
                                    textDecoration: 'none',
                                }}>{item}</a></li>
                            )
                        })
                    )
                }
            </ul>
        </div>
    )
}

export default FooterList