import React, { useState } from 'react';
import ModalDelete from '../Dashboard/ModalDelete/ModalDelete';

const TabularOrder = ({item, setFlag}) => {

    const { _id, name, totalPrice } = item;
    const [id, setId] = useState(_id);

    
    const page = 'tabulrOrderPage';


    return (
        <div>
            <div>
                <ModalDelete
                    id={id}
                    page={page}
                    setFlag={setFlag}
                />
            </div>
            <div className="bg-gray-100">
                <div className="">
                    <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                        <div className='flex bg-white'>
                            <div className='w-1/3 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{name} </p>
                            </div>
                            <div className='w-1/3 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>${totalPrice} </p>
                            </div>
                            <div className='w-1/3 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <label for={id} type="button" data-modal-toggle="popup-modal" className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-rose-800 bg-rose-400 rounded-lg bg-opacity-50 hover:bg-rose-500'>Delete</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TabularOrder;