import React from 'react';
import styles from "./CustomInfo.module.css";
import { Container, Col, Row } from "react-bootstrap"
import Card from './Card/Card';
import infoImg from "../../images/infoImg.png";
import TextBx from "../TextBx/TextBx";
import common from "../../common.module.css";

function CustomInfo() {
    return (
        <div className={common.container}>
            <Container className='d-flex'>
                <Row>
                    <Col lg="5" md="12" className='text-md-center text-lg-start text-start'>
                        <TextBx
                            title={"Help your customers and your team"}
                        />
                        <div className='mt-5 d-md-flex d-lg-block'>
                            <div className='me-3 me-lg-0 w-100 h-100'>
                                <Card
                                    title={"Be Organized"}
                                    content={"Bring traditional files, cloud content, EhyaSpace Paper docs, and web shortcuts together in one place—and work the way that works for you."} />
                            </div>
                            <div>
                                <img src={infoImg} className="img-fluid d-sm-none d-block pt-3 pb-3" />
                            </div>
                            <div className="mt-lg-3 me-3 me-lg-0 w-100 h-100">
                                <Card
                                    title={"Stay Focused"}
                                    content={"Personalized suggestions give you files and folders when you need them so you spend less time searching the files."}
                                />
                            </div>
                            <div className="mt-lg-3 w-100 h-100">
                                <Card
                                    title={"Get in Sync"}
                                    content={"Coordinate with your team and push projects forward with the tools you use every day—all within EhyaSpace. That make your drive safe."}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg="7" md="12">
                        <div className="d-flex w-100 h-100 ms-lg-3 mt-lg-0 mt-5">
                            <div className={`m-auto w-100 ${styles.imgBx}`}
                                style={{
                                    height: "fit-content",
                                }}>
                                <img src={infoImg} className="img-fluid d-none d-md-block mb-lg-0 mb-5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomInfo