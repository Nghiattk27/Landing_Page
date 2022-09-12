import React from 'react';
import styles from "./CustomHome.module.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ill from "../../../images/ill.png";
import icon from "../../../images/Icon.png"

function CustomHome() {
    return (
        <div className='100vw'
            style={{
                fontFamily: "hk_groteskbold, sans-serif",
                background: "#EBF7F2",
            }}>
            <Container
                style={{
                    background: "#EBF7F2",
                    paddingTop: "10vw",
                }}>
                <Row className='d-md-flex justify-content-center'>
                    <Col lg="6" md="10" sm="12" className='text-lg-start text-center mb-5'>
                        <h2
                            className={styles.h2}>
                            Better customer relations starts now
                        </h2>
                        <div className='d-none d-sm-block'>
                            <p
                                className={styles.p}>
                                With all of your communication and tools in
                                one place, remote teams will stay productive no matter where you're working from.
                            </p>
                        </div>
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
                    </Col>
                    <Col lg="6" md="9" sm="12 mb-5">
                        <img src={ill} class="img-fluid" alt="..." />
                    </Col>
                </Row>
                <Row>
                    <div className='d-flex justify-content-center d-lg-block'>
                        <div className='mb-5 d-flex justify-content-center
                        justify-content-lg-start' style={{ width: "100px" }} >
                            <img src={icon} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </Row>
            </Container>
        </div >
    )
}

export default CustomHome