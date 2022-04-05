import React from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import main from '../../assets/banner.png'
import './Home.css';
import { Link } from 'react-router-dom';
import useHomeService from '../../hooks/useHomeServices';
import HomeService from '../HomeServices/HomeServices';

const Home = () => {
    const [homeService] = useHomeService();
    return (
        <Row>
            <section className="sptb-2 sptb-tab">
                <div className="header-text mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="text-body mb-7">
                                    <h1 className="mb-1 leading-tight ">Start Investing on your child</h1>
                                    <p>It takes a comunity to educate a child</p>
                                </div>
                                <div className="search-background bg-transparent">
                                    <div className="form row g-0 ">
                                        <div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-1" placeholder="Search Courses" />
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                            <Button variant="danger" type="submit" className="btn btn-xl btn-block btn-primary br-ts-md-0 br-bs-md-0">
                                                Join with
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <img src={main} className="main-banner-png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sptb bg-white container">
                <Container>

                    <div>
                        <h2 className="text-danger fw-bold text-center p-3" style={{ textShadow: "2px 2px 2px #000000" }}>Course And Reviews</h2>
                        <Row xs={1} sm={2} md={3} className="g-1">
                            {
                                homeService.map(c => <HomeService key={c.id} c={c}></HomeService>)
                            }
                        </Row>
                    </div>


                    <div className="row justify-content-center ">
                        <div className="col-lg-7 col-md-8 mt-2 pb-5">
                            <div className="text-center"> <Link className="btn btn-md theme-bg-light theme-cl " to="/reviews">See All Reviews</Link></div>
                        </div>
                    </div>
                </Container>
            </section>

        </Row>
    );
};

export default Home;