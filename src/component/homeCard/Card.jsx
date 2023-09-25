import { Link } from "react-router-dom";

const Card = (donation) => {

    const {id,image ,card_color , title_color, text_color, title , category} = donation.donation;
    
    //console.log(donation)
    return (
        <div>
            <Link to={`/donation/${id}`}>
            <div className={`card    shadow-xl  `  } style={{backgroundColor:card_color}}>
                <img src={image} alt="Shoes" />
                <div className="card-body">
                    <button className="w-28 h-10 rounded-xl text-white" style={{backgroundColor:title_color}}>{category}</button>
                    <p className={`text-lg font-semibold`} style={{color:text_color}}>{title}</p>
                </div>
                </div>
            
            </Link>
            
        </div>
    );
};

export default Card;