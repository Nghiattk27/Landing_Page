import React from 'react';
import styles from "./CustomCounterparty.module.css";
import common from "../../common.module.css";
import { Container, Row, Col } from "react-bootstrap";
import slack from "./images/ic-slack.svg";
import airbnb from "./images/ic-airbnb.svg";
import netflix from "./images/ic-netflix.svg";
import google from "./images/ic-google.svg";
import fitbit from "./images/ic-fitbit.svg";
import ImgBx from '../ImgBx/ImgBx';
import LinkBx from '../LinkBx/LinkBx';

function CustomCounterparty() {
    return (
        <div className={common.container}>
            <Container>
                <Row>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column'>
                            <div className='mb-5'>
                                <ImgBx img={slack} />
                            </div>
                            <div>
                                <ImgBx img={airbnb} />
                            </div>
                        </div>

                        <div className='d-flex flex-column'>
                            <div className='mb-5'>
                                <ImgBx img={netflix} />
                            </div>
                            <div>
                                <ImgBx img={google} />
                            </div>
                        </div>

                        <div className='d-sm-flex flex-column d-none'>
                            <div className='mb-5'>
                                <ImgBx img={fitbit} />
                            </div>
                            <div>
                                <ImgBx img={slack} />
                            </div>
                        </div>

                        <div className='d-sm-flex flex-column d-none'>
                            <div className='mb-5'>
                                <ImgBx img={google} />
                            </div>
                            <div>
                                <ImgBx img={netflix} />
                            </div>
                        </div>

                        <div className='d-lg-flex flex-column d-none'>
                            <div className='mb-5'>
                                <ImgBx img={airbnb} />
                            </div>
                            <div>
                                <ImgBx img={fitbit} />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='mt-5 pt-0 pt-sm-5 text-center'>
                        <LinkBx content={"See all customer stories "} />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default CustomCounterparty