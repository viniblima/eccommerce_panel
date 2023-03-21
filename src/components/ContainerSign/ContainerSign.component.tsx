import { FunctionComponent, useState } from "react";
import { Tabs, TabPanel } from 'react-tabs';
import { UserContext } from "../../contexts";
import { CustomForm } from "../CustomForm";
import { ContainerProps, Props } from "./ContainerSign.interface";
import { StyledContainerSign, StyledSignInContainer, StyledSignUpContainer, StyledTab, StyledTabList, StyledBorderRight, StyledBorderLeft, StyledBorderInsideLeft, StyledBorderInsideRight, TitleTab } from "./ContainerSign.styles";

const Container: FunctionComponent<ContainerProps> = (props: ContainerProps) => (
    <StyledContainerSign {...props}>
        <Tabs>
            <StyledTabList>
                <StyledTab tabIndex="0" selectedClassName="tab0_selected">
                    <StyledBorderLeft className="tab0border_selected">
                        <StyledBorderInsideLeft/>
                    </StyledBorderLeft>
                    <TitleTab><p>Entrar</p></TitleTab>
                </StyledTab>
            <StyledTab tabIndex="1" selectedClassName="tab1_selected">
                <StyledBorderRight className="tab1border_selected">
                    <StyledBorderInsideRight/>
                    </StyledBorderRight>
                    <TitleTab><p>Criar conta</p></TitleTab>
                </StyledTab>
            </StyledTabList>
            <TabPanel>
                <StyledSignInContainer {...props}>
                    <UserContext.Consumer>
                        {
                            (userContext)  => (
                                <CustomForm
                                
                                {...props.loginForm}
                                loading={userContext.sendingLogin}
                                
                            />
                            )
                        }
                    </UserContext.Consumer>
                </StyledSignInContainer>
            </TabPanel>
            <TabPanel>
                <StyledSignUpContainer {...props}>
                    <CustomForm 
                        {...props.signUpForm}
                    />
                </StyledSignUpContainer>
            </TabPanel>
        </Tabs>
    </StyledContainerSign>
);

const ContainerSign: FunctionComponent<Props> = (props) => {

    return (
        <Container
            {...props}
        />
    );
}
export default ContainerSign;