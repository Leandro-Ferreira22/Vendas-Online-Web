import Input from "../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "./components/screens/styles/loginScreen.styles";


const LoginScreen = () => {
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="./logo.png" />
                <Input title="USUÁRIO:"/>
                <Input title="SENHA:"/>
            </LimitedContainer>  
        </ContainerLogin>
        <BackgroundImage src="./background.png"/>
    </ContainerLoginScreen>);
};

export default LoginScreen;