import React from 'react';
import { Link } from 'react-router-dom';
import Part from './Part';

const Parts = () => {
    const parts = [
        {
            "_id": "628c7fadad983bb8be4d7158",
            "name": "Acrophobic Exhaust",
            "image": "https://i.ibb.co/FqS92mN/acrophobic.png",
            "description": "Lighter than the stock exhaust, TIG-welded construction and billet aluminum mounting hadware. Features a welded construction (no springs), light weight magnesium end cap, removable bolts at the inlet cap for easy repacking and a stepped perforated core for increased durability..\r\n",
            "price": 307,
            "minOrder": 374,
            "availableQuantity": 172
        },
        {
            "_id": "628c7fade5f4a875abd7ff24",
            "name": "Dixon Air Cleaner",
            "image": "https://i.ibb.co/SNZ9Ht4/air-cleaner.png",
            "description": "Performance Machine Super Gas Air Cleaner Faceplates are inrerchanfeable faceplates for the Super Gas Air Cleaner. Design matched to Performance Machine cruiser wheels, these custom accessories will give your v-twin unmatched style. CNC machined from billet aluminum.\r\n",
            "price": 126,
            "minOrder": 745,
            "availableQuantity": 469
        },
        {
            "_id": "628c7fade5cbcd14918446ce",
            "name": "Bikemaster Brake Pad",
            "image": "https://i.ibb.co/JtWZ52W/brakePad.png",
            "description": "Formulated for high performance stopping power and long service life. Superior fade resistance. Designed from years of constant research and brake dyno testing. Yielding the latest technology in pad performance. Designed from years of constant research and testing. Good for instant grip.\r\n",
            "price": 657,
            "minOrder": 253,
            "availableQuantity": 336
        },
        {
            "_id": "628c7fadcb61425af21e6427",
            "name": "Cruise Control",
            "image": "https://i.ibb.co/XyMfVg8/cruise-Control.png",
            "description": "The BrakeAway cruise control is a fully mechanical cruise control specifically designed to give the rider relief, while maintaining a feeling of control. It offers easy push button engagement and instant push button or front brake lever disengagement, eleminating. Allows riders to keep their bike at a constant speed\r\n",
            "price": 684,
            "minOrder": 621,
            "availableQuantity": 465
        },
        {
            "_id": "628c7fad3f540527021dbe2e",
            "name": "Shike Headlight",
            "image": "https://i.ibb.co/P1Gf5z4/headlight.png",
            "description": "O.E.M style replacement headlight asssemblies. Looks, fits and performs just like the original headlight. Headlight bulbs not included, use stock type bulbs. Ultra high peroformance 7 inch L.E.D headlamp. Powerful high output L.E.D.s have a color rating of 6,000k. This light will make the visual impressively perfect for the rider.\r\n",
            "price": 468,
            "minOrder": 131,
            "availableQuantity": 161
        },
        {
            "_id": "628c7fad90e9af6e896256a2",
            "name": "Hotobodies Exhaust",
            "image": "https://i.ibb.co/Bjqsg7h/hotobodies.png",
            "description": "Hotobodies Racing MGP Growler inspired exhausts will scare the competition with its deep growl of power and performance while showing off their famous aerodynamic styling. This compact exhaust bolts on your ride with zero modifications, giving you the look of a polished Grandprix model..\r\n",
            "price": 211,
            "minOrder": 169,
            "availableQuantity": 283
        }
    ]
    return (
        <div>
            <div>
                <h2 className='bg-orange-600 text-white text-center text-2xl md:text-4xl font-bold py-10'>Parts</h2>

                <div className=' w-9/12 md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto mt-16 md:mt-24 place-items-center'>
                    {
                        parts.slice(0, 6).map(part => <Part
                            key={part._id}
                            part={part}
                        ></Part>
                        )
                    }
                </div>

                {/* <div className='text-center mb-16'>
                    <Link to='/manage-item'>
                        <button className='bg-rose-800 hover:bg-rose-600 text-white text-center md:text-xl px-5 font-bold py-4 rounded'>
                            Manage Inventory
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Parts;