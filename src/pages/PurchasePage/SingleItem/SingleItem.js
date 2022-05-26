import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../shared/Loading/Loading';
import Footer from '../../../shared/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SingleItem = () => {

    const [user] = useAuthState(auth);
    // console.log(user);


    const { id } = useParams();
    const [item, setItem] = useState({});
    const [canBuy, setCanBuy] = useState(true);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`https://cryptic-basin-15490.herokuapp.com/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setSpinner(false);
            })
    }, [id]);
    //item 

    const { name, image, description, price, minOrder, availableQuantity } = item;
    const productName = name;


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


    const handleOrder = event => {
        event.preventDefault();
        const name = productName;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const totalPrice = num * price;
        //console.log(name, email, address, phone, totalPrice);

        //sending order details to database
        const newOrder = { name, email, address, phone, totalPrice };
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Orderd successfully');
                event.target.reset();
            })

        //update the available quantity of the parts in the databse
        const newQuantity = availableQuantity - num;
        const updatedQuantity = { newQuantity };
        //console.log(updatedQuantity);
        fetch(`http://localhost:5000/parts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity),
        })
            .then(res => res.json())
            .then(data => {
                console.log('parts available Quantity has updated after the new order');
            })


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
                                <form onSubmit={handleOrder} className='flex flex-col space-y-4 items-center justify-center'>
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" name='name' placeholder='Name' value={user?.displayName} readOnly disabled />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="email" name='email' placeholder='Email' value={user?.email} readOnly disabled />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" name='address' placeholder='Address' />
                                    <input className='w-80 border-2 rounded p-2 border-orange-600' type="text" name='phone' placeholder='Phone Number' />
                                    {
                                        canBuy === false ? <button disabled className='w-36 bg-orange-200 text-white p-3 font-medium tracking-wider rounded '>Order</button>
                                            :
                                            // <button className='w-36 bg-orange-600 text-white p-3 font-medium tracking-wider rounded hover:bg-orange-700'>Order</button>
                                            <input type="submit" value='Order' className='w-36 bg-orange-600 text-white p-3 font-medium tracking-wider rounded hover:bg-orange-700' />
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