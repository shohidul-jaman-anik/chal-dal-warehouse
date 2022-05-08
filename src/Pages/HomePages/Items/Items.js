import React from 'react';
import LoadItems from '../../../Hooks/LoadItems';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';
import spinner from '../../images/spinner.gif';

const Items = () => {
        const [items] = LoadItems();
        if (!items.length) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="pb-5">
                        <h1 className="w-25 brand-bg mx-auto text-center mt-5 brand-color fw-bold text-decoration-underline"> <marquee>Our Items</marquee></h1>
                        <div className="container pt-5 pb-5">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                                items.length ? items.map(item => <ItemCard
                                                        key={item._id}
                                                        item={item}
                                                >
                                                </ItemCard>)
                                                        :
                                                        ''
                                        }
                                </div>
                        </div>
                </div>
        );
};

export default Items;