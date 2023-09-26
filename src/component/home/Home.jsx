import { useState } from "react";
import Banner from "../banner/Banner";
import HomeCard from "../homeCard/HomeCard";

const Home = () => {
    const [showFilteredCards, setShowFilteredCards] = useState(true);
    const handleSearch = () => {
        
        setShowFilteredCards(false);
      };
    
    return (
        <div>
            
            {/* <Banner></Banner>
            <HomeCard></HomeCard> */}
            {/* {showFilteredCards ? null : <HomeCard />}

            {showFilteredCards ? <Banner></Banner> : null} */}
            <Banner onSearch={handleSearch} />
            {showFilteredCards && <HomeCard />}
            </div>
        
    );
};

export default Home;