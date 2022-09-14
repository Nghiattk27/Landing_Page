import React from 'react';
import styles from "./CustomHome.module.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ill from "../../images/ill.png";
import icon from "../../images/Icon.png"
import common from "../../common.module.css";
import ImgBx from '../ImgBx/ImgBx';
import ContactFormBx from '../ContactFormBx/ContactFormBx';

function CustomHome() {
    return (
        <div className={common.container}
            style={{
                background: "#EBF7F2",
            }}>
            <Container>
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
                        <div>
                            <ContactFormBx />
                        </div>
                    </Col>
                    <Col lg="6" md="9" sm="12 mb-5">
                        <img src={ill} class="img-fluid" alt="..." />
                    </Col>
                </Row>
                <Row>
                    <ImgBx img={icon} />
                </Row>
            </Container>
        </div >
    )
}

export default CustomHome