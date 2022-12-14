import { useState, useEffect } from 'react';

const useServices = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('./FackData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [Services, setServices];
}

export default useServices;