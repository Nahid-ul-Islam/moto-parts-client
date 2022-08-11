import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L2JjNCT7D2GQE6a4EmqFoe3upMv4ZHVPvvIVTLdvV3Mxqy5DwlOjeV1fInBc0uLeXHhHd6JVDf26nlQQ1QcIQQm00FB0PrzCI');

const Payment = () => {
    const { _id } = useParams();
    const url = `https://cryptic-basin-15490.herokuapp.com/order/${_id}`;

    const { data: order, isLoading } = useQuery(['order', _id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div class="card w-11/12 md:w-[500px] bg-base-100 shadow-lg my-12 border">
                <div class="card-body">
                    <p className="text-orange-600 font-bold">Please pay for "{order.name}"</p>

                    <p className='font-semibold '>Your total cost ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-11/12 md:w-1/2 max-w-md shadow-lg bg-base-100 border">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;