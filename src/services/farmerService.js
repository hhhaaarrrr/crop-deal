import axios from 'axios' 

const FARMER_API_URL = "http://localhost:8081/farmer/allfarmers";
 const AddFARMER_API_URL = "http://localhost:8081/farmer/addfarmer";
 const GETFARMERBY_API_URL = "http://localhost:8081/farmer/getfarmer";
 const updateFARMER_API_URL = "http://localhost:8081/farmer/updatefarmer";
 const DELETEFARMER_API_URL = "http://localhost:8081/farmer/deletefarmer";

class farmerService{

    getfarmers(){
       
        return  axios.get(FARMER_API_URL);
    }

     addfarmers(farmer){
       
        return  axios.post(AddFARMER_API_URL,farmer)
     }

     getfarmerById(id){
         return axios.get(GETFARMERBY_API_URL+"/"+id);
     }

     updatefarmer(farmer,id){
         return axios.put(updateFARMER_API_URL+"/"+id,farmer);
     }

     deletefarmer(id){
         return axios.get(DELETEFARMER_API_URL+"/"+id);
     }

}

export default new farmerService();