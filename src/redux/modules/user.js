import axios from "axios";
import { Navigate } from "react-router-dom";

// Actions
const LOAD = 'kurly/user/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';



// Action Creators
export function loadWidgets() {
return { type: LOAD };
}

export function createWidget(widget) {
return { type: CREATE, widget };
}

export function updateWidget(widget) {
return { type: UPDATE, widget };
}

export function removeWidget(widget) {
return { type: REMOVE, widget };
}

// Middleware
export const signUpDB = async (formData) => {
    await axios
        .post('http://localhost:5001/list',formData)
        .then((response) => {
            console.log(response)
            window.alert("회원가입이 완료되었습니다.")
            Navigate('/')
        })
        .catch((error) => {
            console.log(error)
            window.alert("에러!")
        })
}

export const loginDB = async (formData) => {
    await axios
        .post('http://localhost:5001/list',formData)
        .then((response) => {
            console.log(response)
            localStorage.setItem("token",response.data.token)
        })
}




// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
    
    default: return state;
    }
    }
