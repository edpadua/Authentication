import React from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

const Form = tw.form`
   
`;

const Input = tw.input`
w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline
`;


type Inputs = {
    name: string;
    email: string;
    password: string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email('Email is invalid'),
    password: yup.string().min(6)
})

function Register() {

    const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div>
            <form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('name')} placeholder="Digite o nome"/>
                <p>{errors.name?.message}</p>
                <Input {...register('email')} placeholder="Digite o e-mail"/>
                <p>{errors.email?.message}</p>
                <Input type='password' {...register('password')} placeholder="Digite a senha" />
                <Input type='submit' />
            </form>
        </div>
    )
}

export default Register
