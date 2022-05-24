import React from 'react';
import appleLogo from '../../images/Footer_logo/apple-logo.svg';
import playstoreLogo from '../../images/Footer_logo/playstore-logo.svg';
import microsoftLogo from '../../images/Footer_logo/microsoft-logo.svg';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-auto pt-10 '>
                <div className='flex flex-col items-center'>
                    <div className='ml-10 md:ml-0'>
                        <h6>Information</h6>
                        <h6 className='text-sm'>View All</h6>
                        <h6 className='text-sm'>Manage Parts</h6>
                        <h6 className='text-sm'>Classic Bike Parts</h6>
                        <h6 className='text-sm'>Heavy V8 Bike Parts</h6>
                        <h6 className='text-sm'>About Inventory</h6>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Popular</h6>
                        <h6 className='text-sm'>- Exhaust</h6>
                        <h6 className='text-sm'>- Fuel Injection</h6>
                        <h6 className='text-sm'>- MRF Tire</h6>
                        <h6 className='text-sm'>- CBR Clutch</h6>
                        <h6 className='text-sm'>- Brembo Brakes</h6>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Country</h6>
                        <h6 className='text-sm'>- USA</h6>
                        <h6 className='text-sm'>- India</h6>
                        <h6 className='text-sm'>- Japan</h6>
                        <h6 className='text-sm'>- Italy</h6>
                        <h6 className='text-sm'>- Thailand</h6>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Legal</h6>
                        <h6 className='text-sm'>- Terms & Conditons</h6>
                        <h6 className='text-sm'>- Terms of Use</h6>
                        <h6 className='text-sm'>- Privacy Policy</h6>
                        <h6 className='text-sm'>- Site Map</h6>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Help</h6>
                        <h6 className='text-sm'>- Add Item</h6>
                        <h6 className='text-sm'>- Manage Item</h6>
                        <h6 className='text-sm'>- Delivered</h6>
                        <h6 className='text-sm'>- Affiliate</h6>
                        <h6 className='text-sm'>- FAQ's</h6>
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className='text-center md:pt-10 pt-7 mr-4'>
                    <img className='w-[30px]' src={appleLogo} alt="" />
                </div>
                <div className='text-center md:pt-10 pt-7 mr-4'>
                    <img className='w-[30px]' src={playstoreLogo} alt="" />
                </div>
                <div className='text-center md:pt-10 pt-7'>
                    <img className='w-[30px]' src={microsoftLogo} alt="" />
                </div>
            </div>
            <div className='text-center pb-5 md:pt-10 pt-7'>
                <small >Copyright © 2022, Developed By Nahidul Islam</small>
            </div>
        </div>
    );
};

export default Footer;