import { AxiosResponse, AxiosError } from "axios";
import React, { createContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import { httpPost } from "./HttpGlobal.context";
import { save } from "./Storage.context";

interface Props {
    user?: string;
    token?: string;

    creatingUser: boolean;
    setCreatingUser?(value: boolean): void;

    errorCreateUser?: string;
    setErrorCreateUser?(value: string): void;

    showErrorCreateUser?: boolean;
    setShowErrorCreateUser?(value: boolean): void;

    sendingLogin: boolean;
    setSendingLogin?(value: boolean): void;
    
    errorLogin?: string;
    setErrorLogin?(value: string): void;

    showErrorLogin?: boolean;
    setShowErrorLogin?(value: boolean): void;

    login(obj: object): void;
    createUser(obj: object): void;
}

interface IProps {
    children: React.ReactNode;
}

export const UserContext = createContext<Props>({
    creatingUser: false,
    sendingLogin: false,
    login(obj: object) {
        
    },
    createUser(obj: object) {

    }
});


class UserContextProvider extends Component<IProps> {
    
    
    state = {
        creatingUser: false,
        sendingLogin: false,
        errorLogin: "",
        errorCreateUser: "",
        showErrorLogin: false,
        showErrorCreateUser: false,
    }

    setSendingLogin = (value: boolean) => {
        this.setState({ sendingLogin: value});
    }

    setErrorLogin = (value: string) => {
        this.setState({ errorLogin: value});
    }

    setCreatingUser = (value: boolean) => {
        this.setState({ creatingUser: value});
    }

    setErrorCreateUser = (value: string) => {
        this.setState({ errorCreateUser: value });
    }

    setShowErrorLogin = (value: boolean) => {
        this.setState({ showErrorLogin: value });
    }

    setShowErrorCreateUser = (value: boolean) => {
        this.setState({ showErrorCreateUser: value });
    }

    login = async (obj: object) => {
        console.log(obj);
        if(this.state.sendingLogin) {
            return;
        }
        httpPost(
            "/user/signin_portal",
            obj
        ).then((response: AxiosResponse<any, any>) => {
            if(response.status == 200) {
                this.setShowErrorLogin(false);
                console.log(response.data);
                save("token", response.data["Auth"]["Token"]["Hash"])
                save("token_expires_in", response.data["Auth"]["Token"]["ExpiresIn"])

                save("refresh_token", response.data["Auth"]["Refresh"]["Hash"])
                save("refresh_token_expires_in", response.data["Auth"]["Refresh"]["ExpiresIn"])

            } else {
                this.setShowErrorLogin(true);

            }
        }, (error: AxiosError<any, any>) => {
            this.setErrorLogin(error.response!.data["message"]);
            this.setShowErrorLogin(true);
        });


    }

    createUser = async (obj: object) => {
        console.log(obj);
        if(this.state.sendingLogin) {
            return;
        }
        httpPost(
            "/user/signin_portal",
            obj
        ).then((response: AxiosResponse<any, any>) => {
            if(response.status == 200) {
            
            } else {

            }
        }, (error) => {
            console.log(error);
        });


    }

    render() {
        return (
            <UserContext.Provider 
                value={
                    {...this.state,
                    login: this.login,
                    setSendingLogin: this.setSendingLogin,
                    setErrorLogin: this.setErrorLogin,
                    setShowErrorLogin: this.setShowErrorLogin,

                    createUser: this.createUser,
                    setCreatingUser: this.setCreatingUser,
                    setErrorCreateUser: this.setErrorCreateUser,
                    setShowErrorCreateUser: this.setShowErrorCreateUser,
                    }}>
                { this.props.children }
            </UserContext.Provider>
        );
    }
}

export {UserContextProvider};