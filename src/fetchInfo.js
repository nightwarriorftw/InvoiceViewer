import {
    getInfoSuccess,
    getInfoError,
    getInfoPending
} from './actions/info';
import axios from 'axios';

const getData = () => {
    return dispatch => {
        dispatch(getInfoPending());
        axios.get('http://ec2-13-127-117-101.ap-south-1.compute.amazonaws.com:8080/api/invoice')
        .then(res => res.json())
        .then(res=>{
            if(res.error){
                throw(res.error);
            }
            dispatchEvent(getInfoSuccess(res.data))
            return res.data;
        }).catch(error=>{
            dispatch(getInfoError(error))
        })
    }
}

export default getData;
