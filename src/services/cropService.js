import axios from 'axios' 

const CROP_API_URL = "http://localhost:8084/crops/allcrops";
const AddCROP_API_URL = "http://localhost:8084/crops/addcrop";
const GETCROPBY_API_URL = "http://localhost:8084/crops/cropbyId";
const updateCROP_API_URL = "http://localhost:8084/crops/updatecrop";
const DELETECROP_API_URL = "http://localhost:8084/crops/deletecrop";
const BUYCROP_API_URL = "http://localhost:8084/crops/buycrop";

class CropService{

    getCrops(){
       
        return  axios.get(CROP_API_URL);
    }

    addCrops(crop){
       
        return  axios.post(AddCROP_API_URL,crop);
    }

    grtCropById(id){
        return axios.get(GETCROPBY_API_URL+"/"+id);
    }

    updateCrop(crop,id){
        return axios.put(updateCROP_API_URL+"/"+id,crop);
    }

    buyCrop(crop,id){
        return axios.put(BUYCROP_API_URL+"/"+id,crop);
    }

    deleteCrop(id){
        return axios.get(DELETECROP_API_URL+"/"+id);
    }

}

export default new CropService();