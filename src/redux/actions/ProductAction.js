import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from "../constants/ProductConstants"
import axios from "axios"
export const ProductListActions = ()=>async(dispatch)=>{
   
    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/items")
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})
    }
}