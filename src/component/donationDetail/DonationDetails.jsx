import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonate } from "../../utility/localstorage";
const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.data.find(donation => donation.id === idInt)
    //console.log(donation);
    const {image  , text_color, title  ,description, price} = donation;

    const HandleDonate =() => {
        
        saveDonate(idInt)

    }
    return (
        <div className="my-8">
                <div className="hero h-80 md:min-h-screen relative rounded-xl" style={{backgroundImage: `url(${image})`}}>
                <div className=" absolute bottom-0 py-5 pl-10 h-20 w-full bg-black bg-opacity-70">
                    <button className={`btn btn-primary  text-xs md:text-base`} onClick={HandleDonate} style={{backgroundColor:text_color}} >Donate ${price}</button>
                    </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-5">{title}</h2>
                    <p className="my-5 text-sm md:text-lg font-semibold text-justify">{description}</p>
                    <ToastContainer></ToastContainer>
          </div>
    );
};

export default DonationDetails;