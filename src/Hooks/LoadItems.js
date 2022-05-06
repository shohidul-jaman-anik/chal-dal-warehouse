import React, { useEffect, useState } from 'react';

const LoadItems = () => {
        const [items, setItems] = useState([]);
        // Load Items By UseEffect:
        useEffect(() => {
                fetch('http://localhost:5000/items')
                        .then(res => res.json())
                        .then(data => setItems(data));
        }, [])
        return [items, setItems];
};

export default LoadItems;
