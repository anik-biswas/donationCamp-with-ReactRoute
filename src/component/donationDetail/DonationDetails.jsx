import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.data.find(donation => donation.id === idInt)
    console.log(donation);
    const {image ,card_color , title_color, text_color, title , category} = donation;

    return (
        <div>
                <div className=" relative w-full  h-96" style={{backgroundImage: `url(${image})`, backgroundSize : `cover`, backgroundRepeat:`no-repeat`, backgroundPosition : `center`}}>
                 {/* <div className="  h-20 w-full bg-black bg-opacity-70"></div> */}
                  {/* <div className="top-11"> */}
                  {/* <img className=" relative w-full  h-96" src={image} alt="" /> */}
                    <div className=" absolute bottom-0 py-5 pl-10 h-20 w-full bg-black bg-opacity-70">
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                  {/* </div> */}
                
                </div>
         </div>
    );
};

export default DonationDetails;