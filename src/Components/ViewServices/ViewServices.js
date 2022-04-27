import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import RequireAuth from '../Login/RequireAuth/RequireAuth';

const ViewServices = (props) => {
    const { title, details, fee, lesson, weeks, img } = props.course;
    return (
        <div className="mt-3">
            <Col className="m-3">
                <Card border="primary" className="shadow border border-3 border-rounded" style={{ width: 300, height: 550 }}>
                    <Image variant="top" src={img} height="180" rounded />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold fs-4">{title}</Card.Title>
                        <div className="d-flex justify-content-around">
                            <Card.Text className="fw-bold"><i className="far fa-clock text-danger"></i> {weeks} weeks</Card.Text>
                            <Card.Text className="fw-bold"><i className="fas fa-chalkboard text-danger"></i> {lesson}</Card.Text>
                        </div>
                        <Card.Text className="text-start fst-italic">{details}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0">
                        <div className="d-flex inline-block justify-content-around">
                            <Card.Title className="text-danger"><i className="fas fa-dollar-sign"></i> {fee}</Card.Title>
                            <Button type="button" className="btn btn-danger btn-outline-danger text-white fs-6 fw-bold border border-danger" style={{ marginBottom: 3 }}>Purchase Course</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default ViewServices;