import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://moto-parts.onrender.com/parts').then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>;
    }
    console.log(parts);


    return (
        <div>
            {
                isLoading ?
                    <Loading></Loading>
                    :
                    <div>
                        <h2 className='bg-orange-600 text-white text-center text-2xl md:text-4xl font-bold py-10'>Parts</h2>

                        <div className=' w-9/12 md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto mt-16 md:mt-24 place-items-center'>
                            {
                                parts?.slice(0, 6).map(part => <Part
                                    key={part._id}
                                    part={part}
                                ></Part>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Parts;