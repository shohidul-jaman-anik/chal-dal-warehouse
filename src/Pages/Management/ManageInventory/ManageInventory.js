import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import LoadItems from '../../../Hooks/LoadItems';
import './ManageInventory.css';
import stockImg from '../../images/stock.png';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
        const [items, setItems] = LoadItems();

        const navigate = useNavigate();
        const navigateToAddNewItemPage = () => {
                navigate('/add-item')
        }

        // Handle Delete Item:
        const handleDeleteItem = deleteItem => {
                const sure = window.confirm(`Are you sure to delete ${deleteItem.name} ?`);
                if (sure) {
                        const url = `http://localhost:5000/items/${deleteItem._id}`;
                        fetch(url, {
                                method: 'DELETE',
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data.deletedCount > 0) {
                                                const updateItems = items?.filter(item => item._id !== deleteItem._id)
                                                setItems(updateItems)
                                                toast(`Successfully Delete ${deleteItem.name}`);
                                        }
                                        else {
                                                toast("something went wrong! Please try again");
                                        }
                                })
                }
        }
        return (
                <div className="mt-5 container pb-5 mb-5">
                        <div className="">
                                <div className="text-center">
                                        <div className="add-item-section">
                                                <h3 className="brand-color fw-bold">Add New Item</h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Green_arrow_right.svg/320px-Green_arrow_right.svg.png" className="img-fluid" height="60" width="60" alt="" />
                                                        </div>

                                                        <div className="d-grid gap-2 mt-2">
                                                                <button onClick={() => navigateToAddNewItemPage()} type="submit" className="btn login-btn">Add New Item</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <h3 className="brand-color text-center pb-5 fw-bold text-decoration-underline">Manage Your All Items</h3>
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
                        <ToastContainer></ToastContainer>
                </div>
        );
};

export default ManageInventory;