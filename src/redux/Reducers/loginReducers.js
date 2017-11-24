import { initializeApp } from "firebase";
import { start } from "repl";

let initialState={
    email: '',
    password: '',

}

function loginReducer (state = initialState, action) {
    
    switch(action.type){
        case 'EMAIL_CHANGED': {
            return {
                ...state,
                email: action.payload
            }
        }

        case 'PASSWOR_CHANGED': {
            return {
                ...state,
                password: action.payload
            }
        }

        case 'LOGIN_USER': {
            return  {
                ...state, loading: true,
                error: '',
                email: action.payload,
                password: action.payload
            }
        }

        case 'LOGIN_USER_SUCCESS': {
            return {
                ...state,
                ...initialState,
                user: action.payload
                // user: action.payload,
                // error: '',
                // loading: false,
                // email: '',
                // password: ''
            }
        }

        case 'LOGIN_USER_FAIL': {
            return {
                ...state,
                error: 'Invaid Email or Password.',
                password: '',
                loading: false
            }
        }

        default:
            return state;
    }
}

export default loginReducer;