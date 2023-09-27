import { Link } from "react-router-dom";

const DonationCard = (donation) => {
    //console.log(donation);
    const { id,image  , text_color, title ,category , card_color, price} = donation.donation;
    //console.log(title);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-md rounded-none" style={{backgroundColor:card_color}}>
            <img src={image} alt="Album"/>
            <div className="card-body">
            <button className="w-28 h-10 rounded-md " style={{backgroundColor:card_color,color:text_color}}>{category}</button>
                <p className="text-base md:text-xl font-semibold">{title}</p>
                <p className="text-base md:text-lg font-semibold" style={{color:text_color}}>${price}</p>
                
                <Link  to={`/donation/${id}`}><button className="w-24 md:w-28 h-10 rounded-md" style={{backgroundColor:text_color,color:"white"}}>View Details</button></Link>
                
            </div>
            </div>
        </div>
    );
};

export default DonationCard;