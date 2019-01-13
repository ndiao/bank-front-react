import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './Types';
import setJWTToken from '../securityUtils/setJWTToken';
import jwt_decode from 'jwt-decode';

export const createNewUser = (newUser, history) => async (dispatch) => {
	try {
		await axios.post('/user/register', newUser);
		history.push('/login');
		dispatch({
			type: GET_ERRORS,
			payload: {}
		});
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	}
};

export const login = (LoginRequest) => async (dispatch) => {
	try {
		// Post => Login Request
		const res = await axios.post('/user/login', LoginRequest);
		// Extract token from res.data
		const { token } = res.data;
		// store token in the localStorage
		localStorage.setItem('jwtToken', token);
		// Set our token in header ***
		setJWTToken(token);
		// Decode token on React
		const decoded = jwt_decode(token);
		// Dispatch to ower securityReducer
		dispatch({
			type: SET_CURRENT_USER,
			payload: decoded
		});
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('jwtToken');
	setJWTToken(false);
	dispatch({
		type: SET_CURRENT_USER,
		payload: {}
	});
};
