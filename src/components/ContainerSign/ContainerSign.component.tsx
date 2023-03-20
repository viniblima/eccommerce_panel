import { FunctionComponent, useState } from "react";
import { Button } from "../Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CustomForm } from "../CustomForm";
import { ContainerProps, Props } from "./ContainerSign.interface";
import { TitlePanel, StyledContainerSign, StyledSignInContainer, StyledSignUpContainer, SubtitlePanel, StyledTab, StyledTabList } from "./ContainerSign.styles";

const Container: FunctionComponent<ContainerProps> = (props: ContainerProps) => (
    <StyledContainerSign {...props}>
        <Tabs>
    <StyledTabList>
      <StyledTab tabIndex="0">Title 1</StyledTab>
      <StyledTab tabIndex="1">Title 2</StyledTab>
    </StyledTabList>

    <TabPanel>
    <StyledSignUpContainer {...props}>
                <CustomForm 
                    {...props.signUpForm}
                />
            </StyledSignUpContainer>
    </TabPanel>
    <TabPanel>
    <StyledSignInContainer {...props}>
                <CustomForm 
                    {...props.loginForm}
                />
            </StyledSignInContainer>
    </TabPanel>
  </Tabs>


            

            {/* <OverlayContainer {...props}>
                <Overlay {...props}>
                    <OverlayPanelLeft {...props}>
                        <TitlePanel>Bem-vindo(a) de volta!</TitlePanel>
                        <SubtitlePanel>Faça login com sua conta</SubtitlePanel>
                        <Button variation="default" text="Sign In" type="submit" onClick={() => props.handleClickFirst()}/>
                    </OverlayPanelLeft>

                    <OverlayPanelRight {...props}>
                        <TitlePanel>Olá! Primeiro acesso?</TitlePanel>
                        <SubtitlePanel>Crie seu usuário e tenha acesso!</SubtitlePanel>
                        <Button variation="default" text="Sign Up" type="submit" onClick={() => props.handleClickSecond()}/>
                    </OverlayPanelRight>
                </Overlay>
            </OverlayContainer> */}
        </StyledContainerSign>
);

const ContainerSign: FunctionComponent<Props> = (props) => {
    // const [tab, setTab] = useState<Tab>('left');

    return (
        <Container
            // tab={tab}
            // handleClickFirst={() => setTab('right')}
            // handleClickSecond={() => setTab('left')}
            {...props}
        />
    );
}
export default ContainerSign;