import React, { useState } from 'react';

const ModalDelete = ({ id, setFlag, page }) => {


    const handleDelete = () => {
        console.log("inside function", id);
        if (page === 'tabulrOrderPage') {
            fetch(`https://moto-parts.onrender.com/my-order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setFlag(preFlag => !preFlag);
                    console.log("deletion completed");
                })
        }
        else if (page === 'tabularProductPage') {
            fetch(`https://moto-parts.onrender.com/parts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setFlag(preFlag => !preFlag);
                    console.log("deletion completed");
                })
        }
    }


    return (
        <div>
            <input type="checkbox" id={id} class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box lg:ml-80 mt-24">
                    <h3 class="font-bold text-lg text-center">Are you sure you want to delete the item?</h3>
                    <div class="modal-action justify-center">
                        <label for={id} class="btn ">Cancel</label>
                        <label onClick={handleDelete} for={id} class="btn bg-red-700 hover:bg-red-600">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;