import axios from "axios";
import { server } from "../../server";
import { userActions } from "../reducers/user";
import { sellerActions } from "../reducers/seller";





//load user
export const loadUser = () => async (dispatch) => {
    try {
        // const dispatch=useDispatch()
        dispatch(userActions.LoadUserRequest());
        const { data } = await axios.get(`${server}/user/getuser`, {
            withCredentials: true
        })
        dispatch(userActions.LoadUserSuccees(
            data.user,
        ));

    } catch (error) {
        dispatch(userActions.LoadUserFail(
            error.response.data.message
        ))

    }

}
 //load seller
export const loadSeller = () => async (dispatch) => {
    try {
        // const dispatch=useDispatch()
        dispatch(sellerActions.LoadSellerRequest());
        const { data } = await axios.get(`${server}/shop/getSeller`, {
            withCredentials: true
        })
        dispatch(sellerActions.LoadSellerSuccees(
            data.seller,
        ));

    } catch (error) {
        dispatch(sellerActions.LoadSellerFail(
            error.response.data.message
        ))

    }

}
//update user info

export const updateUserInfo = (name, email, phoneNumber, password) => async (dispatch) => {
    try {
        // const dispatch=useDispatch()
        dispatch(userActions.updateUserInfoRequest());
        const { data } = await axios.put(`${server}/user/update-user-info`, {
           email,
           password,
           phoneNumber,
           name,
           
        },{
            withCredentials:true,
        })
        dispatch(userActions.updateUserInfoSuccess(
            data.user,
        ));

    } catch (error) {
        dispatch(userActions.updateUserInfoFailed(
            error.response.data.message
        ))

    }

}

export const updateUserAdress=(  county,
    country, city, address1, address2, zipCode, addressType)=>async(dispatch)=>{
    try{
        dispatch(userActions.updateUserAddressRequest());
        const {data}=await axios.put(`${server}/user/update-user-addresses`,{
            country, city, address1, address2, zipCode, addressType

        },{
            withCredentials:true
        });

        dispatch(userActions.updateUserAddressSuccess(
            data.user
        ))


    }catch(error){
        dispatch(userActions.updateUserAddressFailed(
            error.response.data.message
        ))

    }
}


