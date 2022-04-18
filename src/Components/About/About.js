import React from 'react';
import { Form, Button } from 'react-bootstrap';
import main from '../../assets/mahabub.jpg'
import './About.css';
const About = () => {
    return (
        <div>
            <section className="sptb-2 sptb-tab">
                <div className="header-text mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="text-body mb-7">
                                    <h1 className="mb-1 leading-tight ">ABOUT</h1>
                                    <p>Second graders represent masters of the basics they learned in previous grades. While 7-year-olds may have had choppy reading capabilities in first grade, devouring children’s books is now the norm. Second-grade students can take on more complicated math problems, utilize double-digits and count by multiples of twos, threes and fours. The Learning Library is chock-full of tools—enticing worksheets, constructive online games, teacher-curated lesson plans and more—to assist young learners build upon the basics.</p>
                                </div>
                                <div className="search-background bg-transparent">
                                    <div className="form row g-0 p-2 ">
                                        <div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-1" placeholder="Search" />
                                        </div>
                                        <div className="form row g-0 p-2">
                                            <div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                                <Button variant="primary" type="submit" className="btn btn-xl btn-block btn-primary br-ts-md-0 br-bs-md-0">
                                                    SEARCH COURSES
                                                </Button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <img src={main} className="main-banner-png" alt="img" />
                                <h2>Mahabub Hossen Monir</h2>
                                <h5>About my goal:-</h5>
                                <p>My main goal is web developer at now. Then next think i am step by step complete another coding and development sector improved myself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;