import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import MyTabularOrder from './MyTabularOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user.email;

    const [flag, setFlag] = useState(false);

    const [myOrder, setMyOrder] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch(`https://cryptic-basin-15490.herokuapp.com/my-order?email=${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('my-order array', data);
                setMyOrder(data);
                setSpinner(false);
            })
    }, [flag]);




    //console.log(myOrder);


    return (
        <div className='bg-slate-700'>
            <h2 className='text-center text-4xl font-bold text-white pt-12 pb-5'>My Orders</h2>
            <h3 className='text-center text-2xl font-semibold text-white pt-5 pb-11'>Added {myOrder.length} items</h3>
            <div className='bg-gray-100 pt-10'>
                <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex bg-gray-200 flex-wrap'>
                        <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Product Name</p>
                        <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Price</p>
                        <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Payment</p>
                        <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Remove</p>
                    </div>
                </div>
            </div>
            {
                spinner ?
                    <div className='my-10'>
                        <div className="flex justify-center items-center">
                            < div className="animate-spin rounded-full h-16 w-16 lg:h-32 lg:w-32 border-b-2 border-white"></div>
                        </div>
                        <h4 className='text-center text-xl fond-semibold text-white mt-5'>Loading...</h4>
                    </div>
                    :
                    <div className='bg-gray-100 h-screen'>
                        {
                            myOrder.map(item => <MyTabularOrder
                                key={item._id}
                                item={item}
                                setFlag={setFlag}
                            ></MyTabularOrder>)
                        }
                    </div>
            }
            <div className='h-10 bg-gray-100'></div>
        </div>
    );
};

export default MyOrders;