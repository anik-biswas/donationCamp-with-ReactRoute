import { useEffect, useState } from "react";

import FilterCard from "./FilterCard";
const Banner = ({ onSearch }) => {
    const [donations,setDonation] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    
    useEffect ( () => {
        fetch('donation.json')
        .then (res => res.json())
        .then(data =>setDonation(data.data))
        
    },[])
    const [filteredCards, setFilteredCards] = useState(donations);

    const handleCategoryNameChange = (name) => {
        setCategoryName(name.target.value);
      };
      const filteredCard = () => {
        const filtered = donations.filter((donation) =>
          donation.category.toLowerCase().includes(categoryName.toLowerCase())
        );
        setFilteredCards(filtered);
        onSearch();
      };
      
     // console.log(filteredCards)

    return (
        <div>
          <div className="hero w-full  h-72 " style={{backgroundImage: 'url(https://i.ibb.co/rMxxFVX/Rectangle-4281.png)'}}>
                <div className="hero-overlay relative  bg-white opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-6xl">
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                    <input
                        type="text"
                        placeholder="Search by category"
                        className="w-60 md:w-80 h-10 border text-black"
                        value={categoryName}
                        onChange={handleCategoryNameChange}
                     />
                    <button className="btn ml-2 bg-red-500 text-white" onClick={filteredCard}>
          Search
        </button>
                    </div>
                </div>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10 my-10">
            {
                
                filteredCards.map(fiters=><FilterCard donation={fiters} key={fiters.id}></FilterCard>) 
                
            }
            
        </div> 
        </div>
    );
};

export default Banner;