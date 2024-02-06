import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import img1 from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.png'
import SectionTitle from '../Shered/SectionTitle';
const ExploreCities = () => {
    return (
        <div className='mt-6'>
            <SectionTitle subHeading={'FIND PROPERTIES'} heading={'Explore Our Cities'}></SectionTitle>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500">
                            Shoes
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4.5}
                                    readOnly
                                />
                            </div>
                            <p>4.5</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="border bg-orange-500 p-1 text-white">240/sqft</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500">
                            Shoes
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4.5}
                                    readOnly
                                />
                            </div>
                            <p>4.5</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="border bg-orange-500 p-1 text-white">240/sqft</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500">
                            Shoes
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4.5}
                                    readOnly
                                />
                            </div>
                            <p>4.5</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="border  bg-orange-500 p-1 text-white">240/sqft</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ExploreCities;