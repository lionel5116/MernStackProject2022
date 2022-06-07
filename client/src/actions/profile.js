import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE,
         PROFILE_ERROR} from "./types";



//Get current users profile
export const getCurrentUserProfile = () => async dispacth => {
    try {
        const res = await axios.get('/api/profile/me');

        dispacth( {
          type: GET_PROFILE,
          payload: res.data
        });

    }
    catch (err) {
      dispacth( {
        type: PROFILE_ERROR,
        payload: {msg:err.response.statusText,status:err.response.status}
      });
    }
}