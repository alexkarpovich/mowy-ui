import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';


function LoginPage(props) {
    const context = useContext(AuthContext);
    const { onChange, onSubmit, values } = useForm(loginUser, {
        email: '',
        password: ''
    });

    const [login] = useMutation(LOGIN, {
        update(_, { data: { login: userData } }) {
            context.login(userData);
            props.history.push('/'); 
        },
        variables: {
            input: values
        }
    });

    function loginUser() {
        login();
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId='login-email'>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type='email' 
                    name='email'
                    placeholder='Введите ваш email...' 
                    onChange={onChange}
                />
            </Form.Group>

            <Form.Group controlId='login-password'>
                <Form.Label>Пароль</Form.Label>
                <Form.Control 
                    type='password' 
                    name='password'
                    placeholder='Введите пароль...'
                    onChange={onChange}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Войти
            </Button>
        </Form>
    );
}

const LOGIN = gql`
    mutation Login($input: UserLoginInput!) {
        login(input: $input) {
            token
        }
    }
`;

export default LoginPage;