import { AxiosResponse } from "axios";
import React, { createContext, Component } from "react";
import { httpPost } from "./HttpGlobal.context";

interface Props {
    user?: string;
    token?: string;

    creatingUser?: boolean;
    setCreatingUser?(value: boolean): void;

    sendingLogin?: boolean;
    setSendingLogin?(value: boolean): void;
}

interface IProps {
    children: React.ReactNode;
}

export const UserContext = createContext<Props>({
    creatingUser: false,
    sendingLogin: false,
});


class UserContextProvider extends Component<IProps> {
    state = {
        creatingUser: false,
        sendingLogin: false,
    }

    setSendingLogin = (value: boolean) => {
        this.setState({ sendingLogin: value});
    }

    login = async (email: string, password: string) => {
        if(this.state.sendingLogin) {
            return;
        }
        const response: AxiosResponse<any, any> = await  httpPost(
            "signin_portal",
            {
                "Email": email,
                "Password": password,
            }
        );

        if(response.status == 200) {
            
        }
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, setSendingLogin: this.setSendingLogin }}>
                { this.props.children }
            </UserContext.Provider>
        );
    }
}

export {UserContextProvider};