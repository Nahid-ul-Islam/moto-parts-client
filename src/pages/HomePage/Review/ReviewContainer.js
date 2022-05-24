import React from 'react';
import Rating from 'react-rating';
import { AiTwotoneStar } from 'react-icons/ai';


const ReviewContainer = ({rev}) => {
    const { name, picture, review, rating } = rev;
    return (
        <div className="p-5 max-w-sm rounded overflow-hidden shadow-2xl">
            <img className="w-2/4 rounded-full mx-auto" src={picture} alt='' />
            <div className="px-8 py-4">
                <div className='text-center mb-5'>
                    <h2 className="font-bold text-xl mb-2">{name}</h2>
                    <p className='mt-5 text-stone-300'>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<AiTwotoneStar/>}
                            fullSymbol={< AiTwotoneStar style={{ color: 'goldenrod' }}/>}
                            fractions={2}
                            readonly>
                        </Rating>
                    </p>
                </div>
                <p className="text-gray-700 text-justify">
                    <span className='text-xl text-red-600 font-semibold'>“ </span>{review}<span className='text-xl text-red-600 font-semibold'> ”</span>
                </p>

            </div>
        </div>
    );
};

export default ReviewContainer; 