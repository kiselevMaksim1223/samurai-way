import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authStateType, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export class HeaderClass extends Component<headerPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(r => {
                debugger
                if (r.data.resultCode === 0) {
                    const {id, login, email} = r.data.data
                    this.props.setUserData(id, login, email)
                }
            })
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
    setUserData: (id: number, login: string, email: string) => void
}

const mstp = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export const HeaderContainer = connect(mstp, {setUserData})(HeaderClass)