import React, { useEffect, useState } from 'react';

const LoadItems = () => {
        const [items, setItems] = useState([]);
        // Load Items By UseEffect:
        useEffect(() => {
                fetch('./fakedata.json')
                        .then(res => res.json())
                        .then(data => setItems(data));
        }, [])
        return [items];
};

export default LoadItems;
