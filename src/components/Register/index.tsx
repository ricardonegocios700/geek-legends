import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { Container, FormContainer } from './styles';
import { Link } from 'react-router-dom';


interface FormTypes {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    geekPref: string;
    aboutYou: string;
}

const Register = () => {

    const schema = yup.object().shape({

    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>({ resolver: yupResolver(schema) });


    return(
        <>
        
        <Container>
            <h1>Cadastrar</h1>
            <FormContainer>
                
                <input placeholder='Nome'/>

                <input placeholder='Email'/>

                <input placeholder='Senha'/>

                <input placeholder='Confirmar senha'/>

                <input placeholder='Preferências geek'/>

                <textarea placeholder='Sobre você'/>

            </FormContainer>
            <div>
               <span>Já possui uma conta?</span><Link to='/login'>Login</Link> 
            </div>
            
        </Container>
        </>
    )
}

export default Register;