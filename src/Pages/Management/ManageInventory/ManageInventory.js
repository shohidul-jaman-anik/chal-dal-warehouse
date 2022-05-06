import React, { useEffect, useState } from 'react';
import LoadItems from '../../../Hooks/LoadItems';
import './ManageInventory.css';

const ManageInventory = () => {
        const [items] = LoadItems();

        //Set Serial:
        const [number, setNumber] = useState(1);
        const handleSerial = () => {
                setNumber(number + 2);
        }
        return (
                <div className="mt-5 container">
                        <h3 className="brand-color text-center pb-5 mt-5 fw-bold text-decoration-underline">Manage Your All Items</h3>
                        <table class="table">
                                <thead>
                                        <tr className="text-center">
                                                <th scope="col fw-bold"><h4>S.L.</h4></th>
                                                <th scope="col fw-bold"><h4>Item Name</h4></th>
                                                <th scope="col fw-bold"><h4>Amount/kg</h4></th>
                                                <th scope="col fw-bold"><h4>Manage</h4></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {

                                                items?.map(item => <tr
                                                        id="t-border"
                                                        className="brand-bg"
                                                        item={item}
                                                        key={item._id}
                                                >
                                                        <th scope="row">{number}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                                <button type="button" class="btn btn-danger">Danger</button>

                                                        </td>

                                                </tr>)
                                        }
                                </tbody>
                        </table>
                </div>
        );
};

export default ManageInventory;