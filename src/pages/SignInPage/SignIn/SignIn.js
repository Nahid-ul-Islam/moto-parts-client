import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogIn/SocialLogIn';
import Loading from '../../../shared/Loading/Loading';

const SignIn = () => {
    let errorElement;
    const emailRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {

        errorElement = <p className='text-red-600 mt-4 text-center'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

    }

    const forgetPassword = async () => {
        const email = emailRef.current.value;
        console.log('email', email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast("Please enter your email");
        }
    }



    return (
        <div className='flex md:justify-center h-screen my-auto bg-gray-100 pt-32'>
            <div className=''>
                <h2 className='text-center text-3xl bg-slate-800 pb-4 pt-2 text-white'>Sign In</h2>
                <div className=" max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" ref={emailRef} name='email' type="email" placeholder="email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-orange-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-orange-800 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <input className='w-full' type="submit" value='Sign In' />
                            </button>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <button onClick={forgetPassword}
                                className="inline-block align-baseline  text-blue-600 hover:text-blue-800" href="#">
                                Forgot Password?
                            </button>
                            <p>Don't have an account?</p>
                            <Link to='/signup' className="inline-block align-baseline font-bold text-red-500 hover:text-red-700">
                                Register?
                            </Link>
                        </div>
                        <SocialLogin></SocialLogin>
                        {errorElement}
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;