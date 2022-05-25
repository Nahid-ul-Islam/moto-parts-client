import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data, event) => {
        console.log(data);
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast.success('Thank you for your review');
            reset();
        })
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <h2 className='text-center text-2xl font-semibold bg-zinc-600 py-3 text-white'>Add A Review</h2>
            <form className='d-flex flex-column bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name' required {...register("name", { required: true, maxLength: 20 })} />

                <textarea className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Review' required {...register("review")} />

                <div className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <label className='mr-4' htmlFor="rating">Rating :  </label>
                <select htmlFor="rating" className='px-2' placeholder='Price' type="number" {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Photo URL' type="text" required {...register("picture")} />

                <input className='bg-orange-800 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;