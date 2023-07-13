import React from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import axios, { AxiosResponse } from 'axios';

import { Form, Input, Button } from '../../GlobalStyles';

type InputsLogin = {
    email: string;
    password:string;
};


const schema = yup.object().shape({
    email: yup.string().required().email('Email is invalid'),
    password: yup.string().required()
})

function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<InputsLogin>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<InputsLogin> =  (data) => {
        
            
            console.log("login data",data);
            
   
    }

  return (
    <div>
      <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('email')} placeholder="Digite o e-mail"/>
                <p>{errors.email?.message}</p>
                <Input type='password' {...register('password')} placeholder="Digite a senha" />
                <p>{errors.password?.message}</p>
                <Button type="submit">Login</Button>
            </Form>
    </div>
  )
}

export default Login
