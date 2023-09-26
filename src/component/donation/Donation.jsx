import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../../utility/localstorage";
import DonationCard from "./DonationCard";

const Donation = () => {
    const donationsData = useLoaderData();
    const donations = donationsData.data;
    const [storeDonation , setStoreDonation] = useState([]);
    const [dataLength,setDataLength] =useState(4);
    useEffect ( () => {
        const storeDonationIds = getStoredDonate();
       
        if(donations.length > 0){
            //let stores =[];
            const  stores = donations.filter(donation => storeDonationIds.includes(donation.id));
            // console.log(stores);
            //setStoreDonation(stores);
            // for(const id of storeDonationIds){
            //     const donation = donations.find(donation => donation.id === id);
            //     if(donation) {
            //         stores.push(donation);
            //     }
            // }
            setStoreDonation(stores);
        }
    },[])
    //console.log(storeDonation );
    return (
        <div>
        <div className="grid grid-cols-2 gap-10 my-10">
            {
                 storeDonation.slice(0,dataLength).map(donation => <DonationCard donation={donation} key={donation.id}></DonationCard>)
            
           }
           </div>
           <div className="w-full  text-center">
           <div className={dataLength===storeDonation.length&&'hidden' ||""}  >
            <button onClick={()=> setDataLength(storeDonation.length)} className="btn btn-primary w-32 ">Show All</button>
            </div>
           </div>
             
        </div>
        
    );
};

export default Donation;