import React, { useEffect, useState } from 'react';
import Loading from '../../../shared/Loading/Loading';
import ReviewContainer from './ReviewContainer';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);

    //loading reviews
    useEffect(() => {
        fetch('https://moto-parts.onrender.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setSpinner(false);
            })
    }, []);


    return (
        <div>
            <div>
                <h2 className='bg-orange-600 text-white text-center text-2xl md:text-4xl font-bold py-10'>What Our Client Say</h2>
            </div>
            {
                spinner ?
                    <Loading></Loading>
                    :
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-9/12 mx-auto gap-24 mt-24'>
                        {
                            reviews?.slice(-4).map(review => <ReviewContainer
                                key={review._id}
                                rev={review}
                            ></ReviewContainer>)
                        }
                    </div>
            }
        </div>
    );
};

export default Review;