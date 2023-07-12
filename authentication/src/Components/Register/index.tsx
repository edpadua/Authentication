import React from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import axios, { AxiosResponse } from 'axios';

const REGISTER_URL = '/register';

const Form = tw.form`
   
`;

const Input = tw.input`
w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline
`;


const Button = tw.button`
bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
`;


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

    const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response: AxiosResponse<Inputs> = await axios.post("http://localhost:3000/users", data);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
   
    }


    return (
        <div>
            <form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('name')} placeholder="Digite o nome"/>
                <p>{errors.name?.message}</p>
                <Input {...register('email')} placeholder="Digite o e-mail"/>
                <p>{errors.email?.message}</p>
                <Input type='password' {...register('password')} placeholder="Digite a senha" />
                <p>{errors.password?.message}</p>
                <Input type='password' {...register('confirm_password')} placeholder="Confirme a senha" />
                <p>{errors.confirm_password?.message}</p>
                <Button type="submit">Registrar</Button>
            </form>
        </div>
    )
}

export default Register
