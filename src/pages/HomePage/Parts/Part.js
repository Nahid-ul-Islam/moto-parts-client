import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, image, name, description, price, minOrder, availableQuantity } = part;
    return (
        <div>
            <div className="relative p-5 bg-white max-w-sm border rounded overflow-hidden shadow-2xl mb-16">
                <div className='flex justify-center'>
                    <img className='hover:scale-90 transition ease-in-out ' src={image} alt="" srcSet="" />
                    <div className='absolute top-0 right-0'>
                        <div className='bg-orange-600 text-white lg:text-lg font-medium p-3 rounded w-20 text-center'>
                            <p>${price}</p>
                        </div>
                    </div>
                </div>
                <p className='bg-gray-900 text-white hover:text-gray-200 lg:text-xl font-medium text-center p-2 rounded-sm mb-2'>{name}</p>
                <p className='text-center font-medium mt-4'>Available Quantity: {availableQuantity}</p>
                <p className='text-center font-medium'>Minimum Order: {minOrder}</p>
                <hr className='mt-4' />
                <p className='mt-3 text-justify'>{description}</p>
                <div className='text-center'>
                    <Link to={`/parts/${_id}`}>
                        <button className="bg-gray-900 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Part;