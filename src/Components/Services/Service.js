import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import ViewServices from '../ViewServices/ViewServices';

const Service = () => {
    const [services] = useServices();

    return (
        <div className="bg-white mb-3">
            <h2 className="text-danger fw-bold pt-3 pb-3" style={{ textShadow: "2px 2px 2px #000000" }}>Recent Services and Reviews</h2>
            <Row xs={1} sm={1} md={2} lg={4} className="g-1">
                {
                    services.map(course => <ViewServices key={course.id} course={course}></ViewServices>)
                }
            </Row>
        </div>
    );
};

export default Service;