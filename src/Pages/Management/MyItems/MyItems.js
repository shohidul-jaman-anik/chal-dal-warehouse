import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/firebase.init';
import './MyItems.css';

const MyItems = () => {
        const [items, setItems] = useState([]);
        const [user] = useAuthState(auth);
        const navigate = useNavigate();

        useEffect(() => {
                // fetch(`http://localhost:5000/my-items?email=${user?.email}`, {
                //         headers: {
                //                 authorization: `Bearer ${localStorage.getItem('token')}`
                //         }
                // })
                //         .then(res => res.json())
                //         .then(data => {
                //                 setItems(data);
                //         })
                //         .catch(err => {
                //                 console.log(err)
                //                 if (err.response.status === 401 || err.response.status === 403) {
                //                         navigate('login');
                //                         signOut(auth);
                //                 }
                //         });
                const loadMyItems = async () => {
                        const url = `http://localhost:5000/my-items?email=${user?.email}`;
                        try {
                                const { data } = await axios.get(url, {
                                        headers: {
                                                authorization: `Bearer ${localStorage.getItem('token')}`
                                        }
                                });
                                setItems(data);
                        }
                        catch (error) {
                                console.log(error);
                                if (error.response.status === 401 || error.response.status === 403) {
                                        navigate('/login');
                                        signOut(auth);
                                }
                        }
                }
                loadMyItems();
        }, [user]);

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

                                                items?.map ? items?.map(item => <tr
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
                                                                <button onClick={() => handleDeleteItem(item)} type="button" className="btn btn-danger">Delete Item</button>

                                                        </td>

                                                </tr>)
                                                        :
                                                        ''
                                        }
                                </tbody>
                        </table>
                </div>
        );
};

export default MyItems;