import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
        const { id } = useParams();

        const [item, setItem] = useState({});
        useEffect(() => {
                fetch(`http://localhost:5000/item/${id}`)
                        .then(res => res.json())
                        .then(data => setItem(data))
        }, [item])
        const { img, name, description, quantity, price, sold } = item ? item : '';
        return (
                <div className="container mt-5">
                        <div className="row">
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-4">
                                        <div class="col p-3">
                                                <div class="item-detail h-100">
                                                        <div class="item-img p-3">
                                                                <img src={img} class="img-fluid w-100 rounded-3" alt="..." />
                                                        </div>
                                                        <div class="card-body">
                                                                <h4 class="card-title fw-bold">{name}</h4>
                                                                <p class="card-text mt-3">{description}</p>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-center ps-3 pe-3 pt-3 pb-3">
                                                                <div>
                                                                        <h6><small>Quantity: {quantity} kg</small> </h6>
                                                                        <h6><small>Already {sold} kg sold ✅</small> </h6>
                                                                </div>
                                                                <div>
                                                                        <h2 className="brand-color">{price}৳</h2>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Inventory;