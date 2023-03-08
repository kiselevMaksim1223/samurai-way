import {AppThunkType} from "./redux-store";
import {headerAPI} from "../api/users-api";

export const SET_USER_DATA = "SET-USER-DATA"

export type setUserDataAT = {
    type: typeof SET_USER_DATA
    data: authDataType
}

// export type setResultCodeAT = {
//     type:typeof SET_RESULT_CODE
//     resultCode: 0 | 1
// }

export type authActionsType = setUserDataAT

type authDataType = {
    id:number | null
    login:string | null
    email:string | null
}

export type authStateType = {
    data: authDataType
    isAuth: boolean

}

const initialState:authStateType = {
    data: {
        id: null,
        login:null,
        email:null
    },
    isAuth:false

}

export const authReducer = (state = initialState, action:authActionsType) => {
    switch (action.type){
        case SET_USER_DATA:
            debugger
            return {...state, ...action, isAuth:true}
        // case SET_RESULT_CODE:
        //     return {...state, resultCode:action.resultCode}
        default:
            return state
    }
}

//переименуем AC в названия без AC для сокращения кода в mapDispatchToProps
export const setUserData:((id:number, login:string, email:string)=> setUserDataAT) = (id, login, email) => ({type:SET_USER_DATA, data:{id, login, email}})
// export const setResultCode:((resultCode:0 | 1)=> setResultCodeAT) = (resultCode) => ({type:SET_RESULT_CODE, resultCode})


export const authMeTC = (): AppThunkType => (dispatch) => {
    headerAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                const {id, login, email} = res.data
                dispatch(setUserData(id, login, email))
            }
        })
}