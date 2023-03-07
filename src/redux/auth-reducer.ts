

export const FOLLOW_FRIENDS = "FOLLOW-FRIENDS"
export const UNFOLLOW_FRIENDS = "UNFOLLOW-FRIENDS"
export const SET_USERS = "SET-USERS"
export const SET_PAGE = "SET-PAGE"
export const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
export const SET_IS_LOADING = "SET-IS-LOADING"
export const SET_USER_DATA = "SET-USER-DATA"
// export const SET_RESULT_CODE = "SET-RESULT-CODE"



export type setUserDataAT = {
    type: typeof SET_USER_DATA
    data: authDataType
}

// export type setResultCodeAT = {
//     type:typeof SET_RESULT_CODE
//     resultCode: 0 | 1
// }

export type actionsType = setUserDataAT

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

export const authReducer = (state = initialState, action:actionsType) => {
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
