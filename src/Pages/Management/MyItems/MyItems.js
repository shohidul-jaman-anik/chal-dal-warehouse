import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/firebase.init';
import LoadItems from '../../../Hooks/LoadItems';
import './MyItems.css';

const MyItems = () => {
        const [items, setItems] = useState([]);
        const [user] = useAuthState(auth);

        useEffect(() => {
                fetch('https://chaldal-warehouse.herokuapp.com/items')
                        .then(res => res.json())
                        .then(data => {
                                const myItems = data?.filter(item => item.email === user.email);
                                setItems(myItems);
                        })
        }, [items])

        // Handle Delete Item:
        const handleDeleteItem = deleteItem => {
                const sure = window.confirm(`Are you sure to delete ${deleteItem.name} ?`);
                if (sure) {
                        const url = `https://chaldal-warehouse.herokuapp.com/items/${deleteItem._id}`;
                        fetch(url, {
                                method: 'DELETE',
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data.deletedCount > 0) {
                                                const myItem = items?.filter(item => item.email === user.email);
                                                setItems(myItem)
                                                toast(`Successfully Delete ${deleteItem.name}`);
                                        }
                                        else {
                                                toast("something went wrong! Please try again");
                                        }
                                })
                }
        }
        return (
                <div className="container pb-5 mb-5">
                        <h3 className="brand-color text-center pb-5 mt-5 fw-bold text-decoration-underline">My Items</h3>
                        <table className="table">
                                <thead>
                                        <tr className="text-center">
                                                <th scope="col fw-bold"><h4>Item Name</h4></th>
                                                <th scope="col fw-bold"><h4>Amount/kg</h4></th>
                                                <th scope="col fw-bold"><h4>Quantity</h4></th>
                                                <th scope="col fw-bold"><h4>Sold</h4></th>
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
                                                        <td>{item.name}</td>
                                                        <td>{item.price}৳</td>
                                                        <td>{item.quantity}kg</td>
                                                        <td>{item.sold}kg</td>
                                                        <td>
                                                                <button onClick={() => handleDeleteItem(item)} type="button" className="btn btn-danger">Delte Item</button>

                                                        </td>

                                                </tr>)
                                        }
                                </tbody>
                        </table>
                </div>
        );
};

export default MyItems;