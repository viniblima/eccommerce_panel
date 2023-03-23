import { Component, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { get } from "../contexts/Storage.context";

interface IProps {
    children: React.ReactNode;
}

class AuthGuard extends Component<IProps> {
    token?: any;

    componentDidMount(): void {
        this.token = get("token");
    }

    render(): ReactNode {
        if(this.token == null) {
            return this.props.children;
        } else {
            return <Navigate to="/login" replace />;
        }
    }
}

export { AuthGuard }