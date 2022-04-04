import React from 'react';
import { Form, Button } from 'react-bootstrap';
import main from '../../assets/banner.png'
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <section className="sptb-2 sptb-tab">
                <div className="header-text mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="text-body mb-7">
                                    <h1 className="mb-1 leading-tight ">Subscribe</h1>
                                    <p>Have a nice day</p>
                                </div>
                                <div className="search-background bg-transparent">
                                    <div className="form row g-0 p-2 ">
                                        <div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-1" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form row g-0 p-2">
                                        <div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-1" placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                    <div className="form row g-0 p-2">
                                        <div className="form-group  col-xl-9 col-lg-9 col-md-12 mb-0">
                                            <Form.Control type="text" className="form-control input-xl ps-5 border-1" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="form row g-0 p-2">
                                        <div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                            <Button variant="primary" type="submit" className="btn btn-xl btn-block btn-primary br-ts-md-0 br-bs-md-0">
                                                Submit
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

        </div>
    );
};

export default Contact;