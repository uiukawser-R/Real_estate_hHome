import img1 from '../../assets/bbc1.png'
import img2 from '../../assets/bbc2.png'
import img3 from '../../assets/bbc3.png'
const BrowseByCategory = () => {
    return (
        <div className='mt-6'>
            <h1 className='text-4xl mb-4'>Browse By Category</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Appartment</h2>
                        <p>Lorem ipsum dolor sitam consectetur elit.</p>
                        <p>22 Property</p>
                        
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Duplex House</h2>
                        <p>Lorem ipsum dolor sitam consectetur elit.</p>
                        <p>25 Property</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Office</h2>
                        <p>Lorem ipsum dolor sitam consectetur elit.</p>
                        <p>30 Property</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseByCategory;