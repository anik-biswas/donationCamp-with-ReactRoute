import { toast } from "react-toastify";

const getStoredDonate = () =>{
    const storeDonate = localStorage.getItem("donate");
    if(storeDonate) {
        return JSON.parse(storeDonate);
    }
    return [];
}

const saveDonate = id => {
    const storeDonate = getStoredDonate();
    const exist = storeDonate.find(donateId => donateId === id);
    if(!exist){
        storeDonate.push(id);
        localStorage.setItem("donate" ,JSON.stringify(storeDonate))
        toast.success("you have successfully donate");
    }
    else{
        toast.error("you already donate");
    }
}
export {getStoredDonate, saveDonate}