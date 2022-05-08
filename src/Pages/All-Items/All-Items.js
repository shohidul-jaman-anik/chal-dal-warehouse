import React from 'react';
import LoadItems from '../../Hooks/LoadItems';
import './All-Items.css';

const All_Items = () => {
        const [items] = LoadItems();
        return (
                <div className="mt-5 pt-5 text-center pb-5 mb-5">
                        <button className="btn login-btn">Regular</button>
                        <button className="btn login-btn ms-3">Fruits</button>
                        <button className="btn login-btn ms-3">Drinks</button>
                </div>
        );
};

export default All_Items;