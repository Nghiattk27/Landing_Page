import React, { useEffect, useRef } from 'react';
import styles from "./LinkBx.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function LinkBx({ content }) {

    return (
        <a href="#" class={`${styles.a} fw-bold`}>
            {content}
            <FontAwesomeIcon icon={faArrowRight} style={{
                fontSize: "0.75rem",
                marginLeft: "12px",
            }} />
        </a>
    )
}

export default LinkBx