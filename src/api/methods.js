import axiosApiInstance from "./axiossetup";

const BASE_URL = "https://apnaeditor.up.railway.app/api/v1/";

export const get = async (url) =>{
    try{
        const response = await axiosApiInstance.get(`${BASE_URL}${url}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
};

export const post = async (url,data) => {
    try{
        const response = await axiosApiInstance.post(`${BASE_URL}${url}`,data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}