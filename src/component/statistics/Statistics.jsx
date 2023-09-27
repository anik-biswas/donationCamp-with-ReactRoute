import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { getStoredDonate } from '../../utility/localstorage';

  const Statistics = () => {
    const donationsData = useLoaderData();
    const donations = donationsData.data;
    const totalPrice = donations.reduce((total, donation) => total + donation.price, 0);
   // const [storeDonation , setStoreDonation] = useState([]);
    const [totalDonation, setTotalDonation] = useState(0); 

        useEffect(() => {
            const storeDonationIds = getStoredDonate();

            if (donations.length > 0) {
            const stores = donations.filter(donation => storeDonationIds.includes(donation.id));

            const totalDonationCost = stores.reduce((total, store) => total + store.price, 0);

            setTotalDonation(totalDonationCost); 
            }
        }, []);
    //console.log(totalPrice)
    //console.log(donations)
       const donationPercentValue = ((totalDonation/totalPrice)*100).toFixed(2);
       const donationPercent = parseFloat(donationPercentValue);
       const totalRemainPercent = 100 -donationPercent;

    const datas = [
        { name: 'Total Price', value: totalRemainPercent },
        { name: 'Total Donation', value: donationPercent },
      ];
   
    const COLORS = ['#FF5733', '#33FF57'];
  
    return (
      <div className='items-center justify-center text-center' width="100%" height="100%">
       
        <div className='inline-block'>
        <PieChart  width={400} height={400}>
          <Pie
            dataKey={`value`}
            data={datas}
            cx="200"
            cy="200"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}%`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </div>
      </div>
    );
  };
  
export default Statistics;