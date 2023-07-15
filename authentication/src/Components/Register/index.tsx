import React from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import axios, { AxiosResponse } from 'axios';

import { Form, Input, Button } from '../../GlobalStyles';

const REGISTER_URL = '/register';


type Inputs = {
    name: string;
    email: string;
    password:string;
    confirm_password:string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email('Email is invalid'),
    password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: 
    yup.string().required('Password confirmation is required').oneOf([yup.ref('password')], 'Passwords must match'),
})

function Register() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            console.log("data",data);
            const response: AxiosResponse<Inputs> = await axios.post("http://localhost:3000/users", JSON.stringify(data),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            reset({
                name: "",
                email: "",
                password: "",
                confirm_password:"",
              })
          } catch (error) {
            console.log(error);
          }
   
    }


    return (
        <div>
            <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('name')} placeholder="Digite o nome"/>
                <p>{errors.name?.message}</p>
                <Input {...register('email')} placeholder="Digite o e-mail"/>
                <p>{errors.email?.message}</p>
                <Input type='password' {...register('password')} placeholder="Digite a senha" />
                <p>{errors.password?.message}</p>
                <Input type='password' {...register('confirm_password')} placeholder="Digite a senha novamente para confirmar" />
                <p>{errors.confirm_password?.message}</p>
                <Button type="submit">Registrar</Button>
            </Form>
        </div>
    )
}

export default Register
