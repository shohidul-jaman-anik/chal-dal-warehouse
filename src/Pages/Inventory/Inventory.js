import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
        const { id } = useParams();
        return (
                <div>
                        <h3 className="text-center mt-5">Hello Inventory Page: {id}</h3>
                </div>
        );
};

export default Inventory;