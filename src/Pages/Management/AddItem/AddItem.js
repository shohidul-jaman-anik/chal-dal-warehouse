import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";

const AddItem = () => {
        const { register, handleSubmit } = useForm();
        const onSubmit = data => {
                console.log(data)
        };
        return (
                <div className="container mt-5 pb-5">
                        <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="mb-3">
                                                <h6 class="form-label">Item Name</h6>
                                                <input type="text" class="form-control" {...register("name", { required: true })} autoComplete="off" placeholder="Item Name" />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Item Price</h6>
                                                <input type="number" class="form-control" {...register("price", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Item Price" />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Item Quantity(kg)</h6>
                                                <input type="number" class="form-control" {...register("quantity", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Item Quantity(kg)" />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Description</h6>
                                                <textarea type="text" class="form-control" {...register("description", { required: true })} autoComplete="off" placeholder="Description" rows={4} />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Supplier</h6>
                                                <input type="text" class="form-control" {...register("supplier", { required: true })} autoComplete="off" placeholder="Supplier" />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Sold(Already Sell Item)</h6>
                                                <input type="number" class="form-control" {...register("sold", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Sold(Already Sell Item)" />
                                        </div>
                                        <div class="mb-3">
                                                <h6 class="form-label">Item Image</h6>
                                                <input type="text" class="form-control" {...register("img", { required: true })} autoComplete="off" placeholder="Item Image URL" />
                                        </div>
                                        <div class="d-grid gap-2">
                                                <button type="submit" class="btn login-btn">Add New Item</button>
                                        </div>
                                </form>
                        </div>
                </div>
        );
};

export default AddItem;