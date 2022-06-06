import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [userDetails, setUserDetails] = useState({});

    
    useEffect(() => {
        fetch(`https://cryptic-basin-15490.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetails(data));
    }, []);


    const handleSubmit = (event) => {

        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkedIn = event.target.linkedIn.value;

        const updatedProfile = { name, email, phone, education, location, linkedIn };
        console.log(updatedProfile);

        fetch(`https://cryptic-basin-15490.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(result => {
                updateProfile({ displayName: name });
                toast.success('Profile updated');
            })
    }

    return (
        <div className='pt-32 h-screen bg-gray-100'>
            <div className='flex justify-center'>
                <h2 className='w-[450px] py-4 text-white text-center text-3xl bg-slate-800'>My Profile</h2>
            </div>
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder={user?.displayName || "Username"} required />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" value={user?.email || "email"} readOnly />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Phone
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number" placeholder={userDetails?.phone || "+8801*********"} required />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Education
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="education" name="education" type="text" placeholder={userDetails?.education || "Education"} required />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" name="location" type="text" placeholder={userDetails?.location || "Location"} required />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            LinkedIn
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="linkedIn" name="linkedIn" type="text" placeholder={userDetails?.linkedIn || "LinkedIn"} required />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-orange-800 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <input className='w-full' type="submit" value="Update" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;