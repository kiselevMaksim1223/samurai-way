import {authReducer, authStateType, setUserData} from "./auth-reducer";

test("data should be loaded", () => {

    const initialState:authStateType = {
        data: {
            id: null,
            login:null,
            email:null
        },
        isAuth:false

    }


    const action = setUserData(123, "max44465", "123@mail.ru")

    const newState = authReducer(initialState, action)

    expect(newState.data.id).toBe(123)
    expect(newState.data.login).toBe("max44465")
    expect(newState.data.email).toBe("123@mail.ru")
})

// test("data should be loaded", () => {
//
//     const initialState:authStateType = {
//         data: {
//             id: null,
//             login:null,
//             email:null
//         },
//         messages:[],
//         fieldsErrors:[],
//         resultCode:1,
//         isLoading:false
//     }
//
//
//     const action = setResultCode(0)
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.resultCode).toBe(0)
// })