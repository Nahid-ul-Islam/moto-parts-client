import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

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
            toast.success('Profile updated');
            reset();
        })
    }

    return (
        <div>
            <div className="w-full max-w-md mx-auto">
            <h2 className='text-center text-2xl font-semibold bg-zinc-600 py-3 text-white'>My Profile</h2>
            <form className='d-flex flex-column bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name' required {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" placeholder='email' required {...register("email")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Phone' type="number" required {...register("phone")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Education' type="text" required {...register("education")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Location' type="text" required {...register("location")} />

                <input className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Linked' type="number" required {...register("linkedIn")} />

                <input className='bg-orange-800 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="Update" />
            </form>
        </div>
        </div>
    );
};

export default MyProfile;