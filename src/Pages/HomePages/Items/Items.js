import React from 'react';
import LoadItems from '../../../Hooks/LoadItems';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';

const Items = () => {
        const [items] = LoadItems();
        return (
                <div>
                        <h3 className="text-center mt-5">Our Items</h3>
                        <div className="container pt-5 pb-5">
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                                items?.map(item => <ItemCard
                                                        key={item._id}
                                                        item={item}
                                                >
                                                </ItemCard>)
                                        }
                                </div>
                        </div>
                </div>
        );
};

export default Items;