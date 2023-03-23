import { FunctionComponent } from "react";
import { ImgAvatar, StyledUserCard, UserName, UserRole } from "./UserCard.styles";

const UserCard: FunctionComponent = () => {
    return(
        <StyledUserCard>
            <ImgAvatar />
            <UserName></UserName>
            <UserRole></UserRole>
        </StyledUserCard>
    );
}

export default UserCard;