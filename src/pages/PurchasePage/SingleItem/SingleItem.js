import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../shared/Loading/Loading';
import Footer from '../../../shared/Footer/Footer';


const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [canBuy, setCanBuy] = useState(true);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setSpinner(false);
            })
    }, [id]);

    const { name, image, description, price, minOrder, availableQuantity } = item;

    const min = parseInt(minOrder);
    const max = parseInt(availableQuantity);

    const [num, setNum] = useState(0);
    useEffect(() => {
        setNum(min);
    }, [min]);

    const incNum = () => {
        if (num <= max - 1) {
            setNum(num + 1);
        }
        if (num >= min - 1 && num <= max - 1) {
            setCanBuy(true);
        }
        if (num > max - 1) {
            toast.error(`You can order min ${min} and max ${parseInt(availableQuantity)}!`);
            setCanBuy(false);
        }
    };

    const decNum = () => {
        if (num > 0) {
            if (num >= min + 1) {
                setNum(num - 1);
            }
            if (num >= min + 1 && num <= max + 1) {
                setCanBuy(true);
            }
            if (num < min + 1) {
                toast.error(`You can order min ${min} and max ${parseInt(availableQuantity)}!`);
                setCanBuy(false);
            }
        }
    }
    const handleChange = event => {
        setNum(event.target.value);
    }




    return (
        <div>

            {
                spinner ?
                    <Loading></Loading>
                    :
                    <div>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 mb-10'>
                            <div className='flex flex-col text-center justify-center mt-10'>
                                <img className='w-64 mx-auto' src={image} alt="" />
                                <p className='text-2xl text-orange-600 font-bold mb-2'>{name}</p>
                                <p className='font-bold text-lg mb-2'>Price: {price}</p>
                                <p className='w-80 lg:w-96 text-justify mb-2'>{description}</p>
                                <p className='font-medium mb-1'>Available quantity of this product: <span className='text-gray-700 font-semibold'>{availableQuantity}</span></p>
                                <p className='font-medium mb-1'>Minimum order quantity: <span className='text-gray-700 font-semibold'>{min}</span></p>
                                <p className='text-lg font-medium mb-2'>Select Quantity</p>
                                <div className='flex items-center justify-center space-x-1'>
                                    <AiOutlineMinus onClick={decNum} className='w-6 h-6 hover:cursor-pointer transition focus:ease-linear text-orange-600'></AiOutlineMinus>
                                    <input onChange={handleChange} className='w-32 h-10 px-2 border-2 border-black rounded text-center' type="text" name='number' value={num} />
                                    <AiOutlinePlus onClick={incNum} className='w-6 h-6 hover:cursor-pointer text-orange-600'></AiOutlinePlus>
                                </div>
                            </div>
                            <div className='lg:mt-48'>
                                <p className='text-2xl font-medium text-center mb-4'>Place Order</p>
                                <form className='flex flex-col space-y-4 items-center justify-center'>
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" placeholder='Name' />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="email" placeholder='Email' />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" placeholder='Address' />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" placeholder='Phone Number' />
                                    {
                                        canBuy === false ? <button disabled className='w-36 bg-orange-200 text-white p-3 font-medium tracking-wider rounded '>Order</button>
                                            :
                                            <button className='w-36 bg-orange-600 text-white p-3 font-medium tracking-wider rounded hover:bg-orange-700'>Order</button>
                                    }

                                </form>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>

            }

        </div>
    );
};

export default SingleItem;