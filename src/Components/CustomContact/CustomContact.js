import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import common from "../../common.module.css";
import ImgBx from '../ImgBx/ImgBx';
import contactImg from '../../images/contactImg.png';
import TextBx from '../TextBx/TextBx';
import ContactFormBx from '../ContactFormBx/ContactFormBx';

function CustomContact() {
    return (
        <div className={common.container}
            style={{
                background: "#F9FBFE",
            }}>
            <Container>
                <Row >
                    <div className='d-flex align-items-center flex-lg-row flex-column'>
                        <Col lg='6' md="12" className='order-2 order-lg-1'>
                            <div>
                                <ImgBx img={contactImg} />
                            </div>
                        </Col>

                        <Col lg='6' md='10' className='order-1 order-lg-2 mb-5 mb-lg-0'>
                            <div>
                                <TextBx title={"Get early access"} content={"Be the first to experience EhyaSpace before it’s publically available. Early beta will only be available for macOS."} />
                            </div>
                            <div className='mt-4'>
                                <ContactFormBx />
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default CustomContact