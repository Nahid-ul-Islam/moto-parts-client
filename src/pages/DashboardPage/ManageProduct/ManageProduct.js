import React, { useEffect, useState } from 'react';
import TabularProduct from './TabularProduct';

const ManageProduct = () => {
    const [spinner, setSpinner] = useState(true);
    const [products, setProducts] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect( () => {
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setSpinner(false);
        })
    }, [flag]);
    return (
        <div>
            <div className='bg-slate-700'>
                <h2 className='text-center text-4xl font-bold text-white pt-12 pb-5'>Orders</h2>
                <h3 className='text-center text-2xl font-semibold text-white pt-5 pb-11'>Total Order : {products.length}</h3>
                <div className='bg-gray-100 pt-10'>
                    <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                        <div className='flex bg-gray-200 flex-wrap'>
                            <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Product Name</p>
                            <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Price</p>
                            <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Available Quantity</p>
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
                                products.map(item => <TabularProduct
                                    key={item._id}
                                    item={item}
                                    setFlag={setFlag}
                                ></TabularProduct>)
                            }
                        </div>
                }
                <div className='h-10 bg-gray-100'></div>
            </div>
        </div>
    );
};

export default ManageProduct;