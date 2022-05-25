import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    //console.log(user.displayName, user.email);


    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkedIn = event.target.linkedIn.value;

        const updateProfile = { name, email, phone, education, location, linkedIn};
        console.log(updateProfile);
        
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
        .then(res => res.json())
        .then(result => {
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" value={user?.displayName ||"Username"} />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" value={user?.email ||"email"}readOnly />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Phone
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number" placeholder="+8801*********" />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Education
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="education" name="education" type="text" placeholder="Education" />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" name="location" type="text" placeholder="Location" />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            LinkedIn
                        </label> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="linkedIn" name="linkedIn" type="text" placeholder="LinkedIn" />
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