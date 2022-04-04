import { useState, useEffect } from 'react';

const useHomeService = () => {
    const [homeService, setHomeService] = useState([]);
    useEffect(() => {
        fetch('./homeservice.json')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, [])

    return [homeService, setHomeService];
}

export default useHomeService;