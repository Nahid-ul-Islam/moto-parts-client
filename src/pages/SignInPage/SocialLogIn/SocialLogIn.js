import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/Social/google.png';
import Loading from '../../../shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-red-600 mt-2'>Error: {error?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {errorElement}
            <div className='flex justify-center mb-5 md:mb-0 mt-5'>

                <button onClick={() => signInWithGoogle()} className="flex items-center  bg-orange-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> <img src={google} alt="" />
                    <p className='mb-0 ml-5'>Google Sign In</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;