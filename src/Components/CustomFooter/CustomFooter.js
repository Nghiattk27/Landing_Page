import React from 'react';
import styles from './CustomFooter.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../images/logo.svg";
import ImgBx from '../../Components/ImgBx/ImgBx';
import common from "../../common.module.css";
import IconSocialMedia from './IconSocialMedia/IconSocialMedia';
import FooterList from './FooterList/FooterList';

function CustomFooter() {
    return (
        <div className={common.container}>
            <Container>
                <Row className='d-flex'>
                    <Col lg="3" md='5' sm='12' className='order-md-1 order-2'>
                        <div className='m-md-0 m-auto'
                            style={{
                                width: "fit-content"
                            }}>
                            <ImgBx img={logo} />
                        </div>
                        <div className='text-center text-md-start'>
                            <p className={styles.smallText}>
                                Build a modern and creative website with crealand
                            </p>
                            <div className='d-flex flex-row justify-content-center 
                            justify-content-md-start'>
                                <IconSocialMedia icon={"fa-brands fa-facebook-f"} />
                                <IconSocialMedia icon={"fa-brands fa-twitter"} />
                                <IconSocialMedia icon={"fa-brands fa-instagram"} />
                                <IconSocialMedia icon={"fa-brands fa-linkedin"} />
                            </div>
                        </div>
                    </Col>

                    <Col lg="9" md='7' sm='12' className='order-md-2 order-1'>
                        <Container>
                            <Row>
                                <Col lg='3' xs='6'>
                                    <FooterList title={"Product"}
                                        list={["Landingpage", "Features", "Documentation", "Referral Program",
                                            "Pricing"]}
                                    />
                                </Col>
                                <Col lg='3' xs='6'>
                                    <FooterList title={"Services"}
                                        list={["Documentation", "Design", "Themes", "Illustrations",
                                            "UI Kit"]}
                                    />
                                </Col>
                                <Col lg='3' xs='6'>
                                    <FooterList title={"Company"}
                                        list={["About", "Terms", "Privacy Policy", "Careers"]}
                                    />
                                </Col>
                                <Col lg='3' xs='6'>
                                    <FooterList title={"More"}
                                        list={["Documentation", "License", "Changelog"]}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CustomFooter