import React from 'react';
import { MdOutlineUnsubscribe } from 'react-icons/md';


const PartsNews = () => {
    return (
        <div className='my-24'>
            <div className='md:grid md:grid-cols-2 lg:gap-48 md:gap-12 xl:mx-40 2xl:mx-80 2xl:px-20 md:mx-6'>
                <div>
                    <h2 className='text-2xl lg:text-3xl xl:text-4xl font-light'><span className='inline-block text-orange-600 '><MdOutlineUnsubscribe/></span> <span className='font-bold'>SUBSCRIBE</span>ForNewsletter</h2>
                    <br />
                    <p className='px-9 xl:pl-12 mb-5'>Subscribe to our weekly newsletter to get notified and stay updated with latest parts news.</p>
                </div>
                <div className='xl:mx-40 text-center md:text-left'>
                    <input className='border-2 rounded-lg py-2 px-2' type="email" name="email" id="email" placeholder="Email Address" />
                    <br />
                    <input className='bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded mt-5' type="submit" value="Subscribe" />
                </div>
            </div>
            
        </div>
    );
};

export default PartsNews;