import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
        const { name, price, img, quantity, description, _id, sold } = item;

        // Manage Item to Inventory Page:
        const navigate = useNavigate();
        const manageItem = (id) => {
                navigate(`/inventory/${id}`);
        }
        return (
                <div className="col p-3">
                        <div className="item-detail h-100">
                                <div className="item-img p-3">
                                        <img src={img} className="img-fluid w-100 rounded-3 pt-3" alt="..." />
                                </div>
                                <div className="ps-3 pe-3 pb-4">
                                        <div className="card-body">
                                                <h4 className="card-title fw-bold">{name}</h4>
                                                <p className="card-text mt-3">{description.slice(0, 100)}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center ps-3 pe-3 pt-3 pb-3">
                                                <div>
                                                        <h6><small>Quantity: {quantity}kg</small> </h6>

                                                        <h2 className="brand-color">{price}৳/kg</h2>
                                                </div>
                                                <div>

                                                        <h6 className="text-end brand-color fw-bold pb-3"><small>Already Sold {sold}kg</small> </h6>
                                                        <button onClick={() => manageItem(_id)} className="btn brand-btn">
                                                                Manage Item
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ItemCard;