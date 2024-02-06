import img from '../../assets/g.jpg'
const Subscribe = () => {
    return (
        <div className="py-4 relative mt-12">
            <div className="bg-white h-32 w-32 p-4  rounded-full mx-auto absolute left-[45%] -top-10"> 
                <img src={img} className="h-full w-full object-cover"></img>
            </div>
            <div className="hero h-96 rounded-sm" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-95 bg-blue-950"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Subscribe For Newsletter</h1>
                        <p className="mb-5">Be the first one to know about discounts, offers and events. <br></br> Unsubscribe whenever you like.</p>
                        <div className="join rounded-none">
                            <input className="input input-bordered join-item" placeholder="Enter Your Email"/>
                            <button className="btn join-item  bg-orange-600 text-white lowercase">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;