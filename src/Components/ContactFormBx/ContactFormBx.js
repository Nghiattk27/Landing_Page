import React from 'react';
import styles from './ContactFormBx.module.css';
import { Button } from 'react-bootstrap';

function ContactFormBx() {
    return (
        <div className='d-flex justify-content-center d-lg-block'>
            <div className={styles.inputBx}>
                <input placeholder='Your Email here..'
                    className={styles.input} />
                <div className='w-50'>
                    <Button className={styles.button} >
                        <strong> Get started </strong>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactFormBx