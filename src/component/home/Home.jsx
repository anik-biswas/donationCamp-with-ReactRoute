
const Home = () => {
    return (
        <div>
            <div className="hero w-full  h-72 " style={{backgroundImage: 'url(https://i.ibb.co/rMxxFVX/Rectangle-4281.png)'}}>
                <div className="hero-overlay relative  bg-white opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-6xl">
                    <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                    <input type="text" placeholder="search here" className="w-80 h-10 border"/>
                    <button className="btn ml-5 bg-red-500 text-white">Search</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Home;