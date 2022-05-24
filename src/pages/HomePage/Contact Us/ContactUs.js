import React from 'react';
import { Link } from 'react-router-dom';
import hayabusa from '../../../images/Contact_Us_img/hayabusa.PNG';

const ContactUs = () => {
    return (
        <div className='mb-24 bg-gray-200 pb-10'>
            <h2 className='bg-orange-600 text-white text-center text-2xl md:text-4xl font-bold py-9 mt-28'></h2>

            <div className='text-center mt-10 md:my-20'>
                <h2 className='text-2xl lg:text-4xl font-semibold'>We'd love to here form you</h2>
                <p className='mt-3 mb-10 text-xl font-light'>Whether you have a question about MOTO PARTS, pricing or anything else. Our team is ready to answer all your questions</p>
            </div>
            <div className='md:grid md:grid-cols-2 lg:gap-16 md:gap-12 lg:mx-24 md:mx-6'>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg' src={hayabusa} alt="" />
                </div>
                <div className='text-center md:text-left'>


                    <div>
                        <div className='flex justify-center mt-5'>
                            <h2 className='w-[450px] py-4 text-white text-center text-3xl bg-zinc-600'>Contact Us</h2>
                        </div>
                        <div className="w-full max-w-md mx-auto">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Message
                                    </label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Message" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-orange-600 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;