import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
        const { name, price, img, quantity, description, _id } = item;

        // Manage Item to Inventory Page:
        const manageItem = (id) => {
                console.log(id)
        }
        return (
                <div class="col p-3">
                        <div class="card h-100">
                                <div class="item-img p-3">
                                        <img src={img} class="img-fluid rounded-3" alt="..." />
                                </div>
                                <div class="card-body">
                                        <h4 class="card-title fw-bold">{name}</h4>
                                        <p class="card-text mt-3">{description}</p>
                                </div>
                                <div class="d-flex justify-content-between align-items-center ps-3 pe-3 pt-3 pb-3">
                                        <div>
                                                <h6><small>Quantity: {quantity}</small> </h6>
                                                <h2 className="brand-color">{price}৳</h2>
                                        </div>
                                        <div>
                                                <button onClick={() => manageItem(_id)} className="btn brand-btn">
                                                        Manage
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ItemCard;