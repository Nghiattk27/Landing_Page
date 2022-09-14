import React from 'react';
import './CustomBasic.module.css';
import styles from "./CustomBasic.module.css";
import { Container, Row, Col } from "react-bootstrap";
import basic from "../../images/basic.png";
import union from "../../images/union.png";
import TextBx from '../TextBx/TextBx';
import common from "../../common.module.css";
import ImgBx from '../ImgBx/ImgBx';
import LinkBx from '../LinkBx/LinkBx';

function CustomBasic() {
    return (
        <div className={common.container}
            style={{
                background: "#EBF7F2",
            }}>
            <Container>
                <Row>
                    <Col lg="6" className="d-lg-block d-none">
                        <ImgBx img={basic} />
                    </Col>
                    <Col lg="6" md='12' className="ps-lg-5 ps-md-5 pe-2">
                        <div className="pb-2">
                            <TextBx
                                title={"Save time efficiently your marketing"}
                                content={"Like Steve Jobs quotes, “Design is not just what it looks like and feels like. Design is how it works”. We always try to make a great output."}
                            />
                            <div className="w-100 text-lg-start text-md-center mt-4 mb-5 ms-3 ms-md-0 ">
                                <LinkBx content={"Learn more"} />
                            </div>
                            <div className='d-lg-none d-md-block d-sm-none d-block'>
                                <ImgBx img={basic} />
                            </div>
                        </div>
                        <div style={{
                            textAlign: "start !important"
                        }}>
                            <p className={styles.p}>
                                In-context messaging lets us form 1:1 connections with our users more efficient.
                            </p>
                        </div>
                        <div className='w-100 text-center text-md-start'>
                            <strong>Andries Grootoonk, </strong>
                            <p className='d-md-inline-block d-block'>VP Quality Assurance</p>
                            <div className={`${styles.img} 
                            `}>
                                <img src={union} className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomBasic