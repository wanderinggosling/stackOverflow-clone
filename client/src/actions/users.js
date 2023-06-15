import * as api from '../api/index'

export const getAllUsers=()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllUsers();
        dispatch({type: 'FETCH_ALL_USERS', payload: data})
    } catch (error) {
        console.log(error)
    }
}