import React from 'react';
import styles from "./CustomDetail.module.css";
import { Container, Row, Col } from "react-bootstrap";
import common from "../../common.module.css";
import detail from "../../images/detail.png";
import ImgBx from '../ImgBx/ImgBx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Card from './Card/Card';
import support from './images/ic-support.svg';
import sell from "./images/ic-sell.svg";
import guide from "./images/ic-guide.svg";
import explore from "./images/ic-explore.svg";
import chat from "./images/ic-chat.svg";
import gather from "./images/ic-gather.svg";
import talk from "./images/ic-talk.svg";
import connect from "./images/ic-connect.svg"

function CustomDetail() {
    return (
        <div className={common.container}
            style={{
                background: "#36B37E",
                color: "#fff",
            }}>
            <Container>
                <Row>
                    <Col lg="6" md="12">
                        <div className='mb-5 pe-5'>
                            <div className={styles.h2Bx}>
                                <h2 className={styles.h2}>
                                    We try to give all for our member
                                </h2>
                            </div>
                            <p className={styles.p}>
                                The customer journey differs for everybody—whether you use them together or on their own, our products are flexible enough to pave the path that’s best for you.
                            </p>
                        </div>
                        <div className='d-lg-block d-none'>
                            <ImgBx img={detail} />
                        </div>
                    </Col>

                    <Col lg="6" md="12">
                        <div className='mb-5'>
                            <div className={styles.h2Bx}>
                                <h2 className={styles.h2}>
                                    The Support site
                                </h2>
                            </div>
                            <div className={styles.linkBx}>
                                <a href="#" class={`${styles.a}`}>
                                    The full service experience
                                    <FontAwesomeIcon icon={faArrowRight} style={{
                                        fontSize: "0.75rem",
                                        marginLeft: "12px",
                                    }} />
                                </a>
                            </div>
                            <div className={styles.itemsBx}>
                                <div className='d-flex flex-row mt-5'>
                                    <Card img={support} title={"Support"} content={"Integrated customer support"} />
                                    <Card img={sell} title={"Sell"} content={"Sell method and shipping details"} />
                                </div>
                                <div className='d-flex flex-row mt-5'>
                                    <Card img={guide} title={"Guide"} content={"Knowlegde base and smart service"} />
                                    <Card img={explore} title={"Explore"} content={"Sell analytics and reporting"} />
                                </div>
                                <div className='d-flex flex-row mt-5'>
                                    <Card img={chat} title={"Chat"} content={"Live chat and instant mesaging"} />
                                    <Card img={gather} title={"Gather"} content={"Community forum discussion"} />
                                </div>
                                <div className='d-flex flex-row mt-5'>
                                    <Card img={talk} title={"Talk"} content={"Talk enter software"} />
                                    <Card img={connect} title={"Connect"} content={"Proactive campaigns"} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='d-lg-none d-sm-block'>
                        <ImgBx img={detail} />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default CustomDetail