import { FunctionComponent } from "react";
import { HeaderTab } from "../HeaderTab";
import { StyledContainerTab } from "./ContainerTab.styles";

interface IProps {
    children: React.ReactNode;
}

const ContainerTab: FunctionComponent<IProps> = (props: IProps) => {
    return(
        <StyledContainerTab>
            <HeaderTab />
            {props.children}
        </StyledContainerTab>
    );
}

export default ContainerTab;