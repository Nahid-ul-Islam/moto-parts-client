import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, image, name, description, price, minOrder, availableQuantity } = part;
    return (
        <div>
            <div className="p-5 bg-white max-w-sm rounded overflow-hidden shadow-2xl mb-16">
                <div className='flex justify-center'>
                    <img src={image} alt="" srcSet="" />
                </div>
                <h2 className='text-2xl font-medium text-center'>{name}</h2>
                <p className='text-center font-medium'>Price: ${price}</p>
                <p className='text-center font-medium'>Quantity: {availableQuantity}</p>
                <p className='text-center font-medium'>Minimum Order: {minOrder}</p>
                <p className='mt-3 text-justify'>{description}</p>
                <div className='text-center'>
                    <Link to={`/parts/${_id}`}>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Part;