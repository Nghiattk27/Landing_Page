import React from 'react';
import styles from "./CustomPlatform.module.css";
import common from "../../common.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from './Card/Card';

function CustomPlatform() {
    return (
        <div className={common.container}
            style={{
                borderTop: "1px solid #000"
            }}>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg="6">
                        <div className='text-center'>
                            <h2 className={styles.title}>
                                Ready for your workflow
                            </h2>
                            <p className={styles.content}>
                                EhyaSpace can be plugged to several services from owner to customer. Allowing you to shape it to your workflow.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="d-flex flex-md-row flex-column mt-5 justify-content-center 
                    align-items-center
                    ps-md-4">
                        <Col md="4" sm="8" xs="6" style={{
                            minWidth: "220px",
                        }}>
                            <div className='me-md-4'>
                                <Card title={"Multi OS"}
                                    icons={["fa-brands fa-windows", "fa-brands fa-apple", "fa-brands fa-ubuntu"]}
                                    bgColor={"#e5f8fb"}
                                    color={"#1E6BD9"}
                                />
                            </div>
                        </Col>
                        <Col md="4" sm='8' xs="6" style={{
                            minWidth: "220px",
                        }}>
                            <div className='me-md-4'>
                                <Card title={"Compatibility"}
                                    icons={["fa-brands fa-sketch", "fa-brands fa-figma"]}
                                    bgColor={"#ebf7f2"}
                                    color={"#37B37F"}
                                />
                            </div>
                        </Col>
                        <Col md="4" sm='8' xs="6" style={{
                            minWidth: "220px",
                        }}>
                            <div className='me-md-4'>
                                <Card title={"Integrations"}
                                    icons={["fa-brands fa-slack", "fa-brands fa-github", "fa-brands fa-gitlab"]}
                                    bgColor={"#fdeeea"}
                                    color={"#E95432"}
                                />
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div >
    )
}

export default CustomPlatform