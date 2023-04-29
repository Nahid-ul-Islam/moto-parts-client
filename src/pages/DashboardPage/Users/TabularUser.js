import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const TabularUser = ({ item, setFlag }) => {

    const { _id, email } = item;
    const [queryEmail, setQueryEmail] = useState(email);

    console.log(item.role);

    const handleMakeAdmin = (queryEmail) => {

        const role = { role: 'admin' }

        fetch(`https://moto-parts.onrender.com/user/${queryEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(role)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Make Admin Done');
                setFlag(preFlag => !preFlag);
            })
    }


    return (
        <div className="bg-gray-100">
            <div className="">
                <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex bg-white'>
                        <div className='w-1/2 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                            <p className='text-center text-sm text-gray-700'>{email}</p>
                        </div>
                        <div className='w-1/2 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                            {
                                item?.role !== 'admin' ?
                                    <button onClick={() => handleMakeAdmin(queryEmail)} type="button" className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-blue-500'>Make Admin</button>
                                    :
                                    <h2 className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50'>Admin</h2>
                            }
                            {/* <button onClick={() => handleMakeAdmin(queryEmail)} type="button" className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-blue-500'>Make Admin</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabularUser;