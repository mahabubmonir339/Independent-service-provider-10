import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const HomeService = (props) => {
    const { title, fee, img, lesson, weeks } = props.c;
    return (
        <div className="mt-3">
            <Col className="m-3 gx-4">
                <Card className="shadow-lg p-2 m-2 border-0 style={{width: 200}}">
                    <Image variant="top" src={img} height="180" rounded />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{title}</Card.Title>
                        <div className="d-flex justify-content-around">
                            <Card.Text className="fw-bold"><i className="far fa-clock text-danger"></i> {weeks} weeks</Card.Text>
                            <Card.Text className="fw-bold"><i className="fas fa-chalkboard text-danger"></i> {lesson}</Card.Text>
                            <Card.Text className="text-dark fw-bold"><i className="text-danger fas fa-dollar-sign"></i> {fee}</Card.Text>
                        </div>
                        <Button type="button" className="btn btn-danger btn-outlined text-white fs-6 fw-bold">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeService;