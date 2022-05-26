import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast.success(data.name, 'has added');
            reset();
        })
    }
    return (
        <div className="w-full max-w-md mx-auto">
            <h2 className='text-center text-2xl font-semibold bg-zinc-600 py-3 text-white'>Add A Product</h2>
            <form className='d-flex flex-column bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Product Name' required {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Image URL' type="text" required {...register("image")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='number' placeholder='Price' required {...register("price")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='number' placeholder='Available Quantity' required {...register("availableQuantity")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='number' placeholder='Minimum Order' required {...register("minOrder")} />

                <textarea className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Description' type="text" required {...register("description")} />


                <input className='bg-orange-800 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;