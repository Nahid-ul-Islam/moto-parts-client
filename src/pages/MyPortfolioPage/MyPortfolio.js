import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl my-5'>My Portfolio</h2>
            <div className='flex justify-between max-w-xs mx-auto mb-2'>
                <h2>Name :</h2>
                <h2>Nahidul Islam</h2>
            </div>
            <div className='flex justify-between max-w-xs mx-auto mb-2'>
                <h2>Email :</h2>
                <h2>nahidul522@gmail.com</h2>
            </div>
            <div className='flex justify-between max-w-xs mx-auto mb-2'>
                <h2>Education :</h2>
                <h2>B.Sc in CSE</h2>
            </div>
            <div className='flex justify-between max-w-xs mx-auto mb-2'>
                <h2>Skills :</h2>
                <div>
                    <ul>
                        <li>JavaScript (ES6)</li>
                        <li>ReactJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between max-w-xs mx-auto'>
                <h2>Projects :</h2>
                <div>
                    <ul>
                        <li className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-blue-500 mb-2'><a href="https://good-reads-by-nahid.netlify.app/">Best Reads</a></li>
                        <li className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-blue-500 mb-2'><a href="https://immigration-consultant-28ce8.firebaseapp.com/">NIVIZA</a></li>
                        <li className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-blue-500 mb-2'><a href="https://accel-moto.web.app/">ACCEL MOTO</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;