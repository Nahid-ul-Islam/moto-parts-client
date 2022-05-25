import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <label for="dashboard-sidebar" className='drawer-button font-bold text-black text-2xl bg-gray-300 rounded-md lg:hidden '><AiOutlineArrowRight /></label>

            <div class="drawer-content">
                <div className=' bg-gray-200 p-2 w-[40px] inline-block rounded-md ml-1 mt-1 lg:hidden'>
                    <label for="dashboard-sidebar" className='drawer-button font-bold text-black text-2xl bg-gray-300 rounded-md'><AiOutlineArrowRight /></label>
                </div>
                <div className='inline-block ml-7 mb-5 md:ml-48 lg:ml-0 lg:block lg:mt-5'>
                <h2 className='text-2xl lg:text-4xl font-bold text-center text-orange-600 '>Welcome to the Dashboard</h2>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content font-bold text-lg">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/add-review'>Add a Review</Link></li>

                    <li><Link to='/dashboard/manage-order'>Manage Order</Link></li>
                    <li><Link to='/dashboard/manage-product'>Manage Product</Link></li>
                    <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                    <li><Link to='/dashboard/make-admin'>All User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;