import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import { useNavigate, Link } from 'react-router-dom';

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
    const navigate = useNavigate();

    const handleToSingIn = () => {
        navigate('/dashboard')
    }
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="Digite seu nome"/>
                    <Input placeholder="Digite seu sobrenome"/>
                    <Input placeholder="Digite seu melhor e-mail"/>
                    <Input placeholder="Digite sua senha" type="password"/>
                    <Input placeholder="Confirme sua senha" type="password"/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSingIn}>CADASTRE-SE</Button>
                    <p>Já faz parte do inter? <Link to="/signin">Entre agora</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
