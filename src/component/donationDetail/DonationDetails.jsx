import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.data.find(donation => donation.id === idInt)
    console.log(donation);
    const {image ,card_color , title_color, text_color, title  ,description, category, price} = donation;

    const HandleDonate =() => {
        toast("you have successfully donate");
    }
    return (
        <div className="my-8">
                <div className="hero min-h-screen relative rounded-xl" style={{backgroundImage: `url(${image})`}}>
                <div className=" absolute bottom-0 py-5 pl-10 h-24 w-full bg-black bg-opacity-70">
                    <button className={`btn btn-primary`} onClick={HandleDonate} style={{backgroundColor:text_color}} >Donate ${price}</button>
                    </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-5">{title}</h2>
                    <p className="my-5 text-lg font-semibold text-justify">{description}</p>
                    <ToastContainer></ToastContainer>
          </div>
    );
};

export default DonationDetails;