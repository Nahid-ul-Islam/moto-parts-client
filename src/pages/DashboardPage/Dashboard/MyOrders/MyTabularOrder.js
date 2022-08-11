import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalDelete from '../ModalDelete/ModalDelete';



const MyTabularOrder = ({ item, setFlag }) => {
    const { _id, name, totalPrice } = item;
    const [id, setId] = useState(_id);
    const navigate = useNavigate();

    const gotopayment = _id => {
        navigate(`/dashboard/payment/${_id}`);
    }

    const page = 'tabulrOrderPage'
    return (
        <div>
            <div>
                <ModalDelete
                    id={id}
                    setFlag={setFlag}
                    page={page}
                />
            </div>
            <div className="bg-gray-100">
                <div className="">
                    <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                        <div className='flex bg-white'>
                            <div className='w-1/4 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{name} </p>
                            </div>
                            <div className='w-1/4 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>${totalPrice} </p>
                            </div>
                            <div className='w-1/4 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                {
                                    (totalPrice && item.paid) && <span className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-green-800 bg-green-400 rounded-lg'>Paid</span>
                                }
                                {
                                    (totalPrice && !item.paid) && <button onClick={() => gotopayment(_id)} type="button" className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-green-800 bg-green-400 rounded-lg bg-opacity-50 hover:bg-green-500'>Pay</button>
                                }
                            </div>
                            <div className='w-1/4 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <label for={id} type="button" data-modal-toggle="popup-modal" className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-rose-800 bg-rose-400 rounded-lg bg-opacity-50 hover:bg-rose-500'>Delete</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyTabularOrder;