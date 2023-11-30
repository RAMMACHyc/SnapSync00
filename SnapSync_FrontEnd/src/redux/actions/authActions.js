import * as actionTypes from './actionTypes';
import ApiService from '../Api/api';


export const signin = (user, router) => async (dispatch) => {
    try {
      const data  = await ApiService.signIn(user);
      dispatch({ type: actionTypes.AUTH, data });
      
      localStorage.setItem('profile', JSON.stringify(data));
  
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  
  export const signup = (user, router) => async (dispatch) => {
    try {
      const data  = await ApiService.signUp(user);
  
      dispatch({ type: actionTypes.AUTH, data });
      
      localStorage.setItem('profile', JSON.stringify(data));
  
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  
