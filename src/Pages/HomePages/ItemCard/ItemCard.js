import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
        const { name, price, img, quantity, description, _id } = item;

        // Manage Item to Inventory Page:
        const navigate = useNavigate();
        const manageItem = (id) => {
                navigate(`/inventory/${id}`);
        }
        return (
                <div className="col p-3">
                        <div className="item-detail h-100">
                                <div className="item-img p-3">
                                        <img src={img} className="img-fluid w-100 rounded-3" alt="..." />
                                </div>
                                <div className="card-body">
                                        <h4 className="card-title fw-bold">{name}</h4>
                                        <p className="card-text mt-3">{description}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center ps-3 pe-3 pt-3 pb-3">
                                        <div>
                                                <h6><small>Quantity: {quantity} kg</small> </h6>
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