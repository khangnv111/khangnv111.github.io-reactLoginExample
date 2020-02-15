import { AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackApi from '../api/Api';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const signin = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });

            navigate('mainFlow');

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Some thing went wrong with sign in' });
        }
    };
};

const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    };
};

export const { Provider, Context } = CreateDataContext(
    authReducer,
    { signin, signout},
    { toke: null, errorMessage: '' }
);