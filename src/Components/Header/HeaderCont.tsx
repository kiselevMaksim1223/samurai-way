import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export class HeaderClass extends Component<headerPropsType> {

    componentDidMount() {
        this.props.authMeTC()
        // axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        //     withCredentials: true
        // })
        // headerAPI.authMe()
        //     .then(res => {
        //         if (res.resultCode === 0) {
        //             const {id, login, email} = res.data
        //             this.props.setUserData(id, login, email)
        //         }
        //     })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export type headerPropsType = mstpPT & mdtpPT

type mstpPT = {
    isAuth:boolean
    login: string | null
}

type mdtpPT = {
    // setUserData: (id: number, login: string, email: string) => void
    authMeTC: () => void
}

const mstp = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export const HeaderContainer = connect(mstp, {authMeTC})(HeaderClass)