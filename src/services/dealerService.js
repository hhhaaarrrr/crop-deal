import axios from 'axios'

const DEALER_API_URL = "http://localhost:8080/dealer/all";
const AddDEALER_API_URL = "http://localhost:8080/dealer/adddealer";
 const GETDEALERBY_API_URL = "http://localhost:8080/dealer/finddealer";
 const updateDEALER_API_URL = "http://localhost:8080/dealer/update";
const DELETEDEALER_API_URL = "http://localhost:8080/dealer/delete";


class dealerService{

    getdealers(){
       
        return  axios.get(DEALER_API_URL);
    }
    adddealer(dealer){
       
        return  axios.post(AddDEALER_API_URL,dealer);
     }

     getdealerById(id){
         return axios.get(GETDEALERBY_API_URL+"/"+id);
     }

     updatedealer(dealer,id){
         return axios.put(updateDEALER_API_URL+"/"+id,dealer);
     }

    deletedealer(id){
        return axios.get(DELETEDEALER_API_URL+"/"+id);
    }


}
export default new dealerService();