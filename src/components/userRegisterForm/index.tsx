'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

type Inputs = {
  name: string,
  cpf: string,
  birthDate: Date,
  email: string,
  cellPhone: string,
  password: string,
};

const schema = yup.object({
  name: yup.string().required("O campo Nome é necessário"),
  cpf: yup.string().required("O campo CPF é necessário"),
  birthDate: yup.date().required("O campo Data de Nascimento é necessário"),
  email: yup.string().email("O email deve ter um formato válido").required("O campo Email é necessário"),
  cellPhone: yup.string().required("O campo Celular é necessário"),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos').required('A eenha é obrigatório'),
}).required();


export default function UserRegisterForm() {
  
  const {register, handleSubmit, watch, formState: {errors} } = useForm<Inputs>({
    resolver: yupResolver(schema)});

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  console.log('errors', errors);  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
      <label className="flex flex-col font-bold">
        Nome
        <input type="text" {...register('name', {required: true})} className="rounded-md"/>
        <span className="text-red-600">{errors.name?.message}</span>
      </label>
      <label className="flex flex-col font-bold">
        CPF
        <input type="text" {...register('cpf', {required:true})} className="rounded-md"/>
        <span className="text-red-600">{errors.cpf?.message}</span>
      </label>
      <label className="flex flex-col font-bold">
        Data de Nascimento
        <input type="date" {...register('birthDate', {required:true})} className="rounded-md"/>
        <span className="text-red-600">{errors.birthDate?.message}</span>
      </label>
      <label className="flex flex-col font-bold">
        Email
        <input type="email" {...register('email', {required: true})} className="rounded-md"/>
        <span className="text-red-600">{errors.email?.message}</span>
      </label>
      <label className="flex flex-col font-bold">
        Celular
        <input type="text" {...register('cellPhone', {required: true})} className="rounded-md"/>
        <span className="text-red-600">{errors.cellPhone?.message}</span>
      </label>
      <label className="flex flex-col font-bold">
        Senha
        <input type="password" {...register('password', {required: true})} className="rounded-md"/>
        <span className="text-red-600">{errors.password?.message}</span>
      </label>
      <button type="submit" className="bg-slate-600 text-white mt-2 rounded-md h-9 w-52">Cadastar</button>
    </form>
  )
}