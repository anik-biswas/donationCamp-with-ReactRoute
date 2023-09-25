import { useEffect, useState } from "react";
import Card from "./Card";

const HomeCard = () => {
    const [donations,setDonation] = useState([]);
    useEffect ( () => {
        fetch('donation.json')
        .then (res => res.json())
        .then(data =>setDonation(data.data))
        
    },[])
 return (
        <div className="grid grid-cols-4 justify-between gap-7 my-10">
            {
                donations.map(donation => <Card donation={donation} key={donation.id}></Card>)
            }
        </div>
    );
};

export default HomeCard;