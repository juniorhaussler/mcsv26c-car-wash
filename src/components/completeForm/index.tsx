import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  email: string,
  password: string,
};

const schema = yup.object({
  email: yup.string().email("O email deve ter um formato válido").required("O campo email é necessário"),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos').required('A senha é obrigatório'),
}).required();

export default function CompleteForm() {
  
  const {register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)});
  
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log('errors', errors);
  return (
    <div className="bg-purple-100 flex items-center justify-center">
      <form onSubmit={ handleSubmit(onSubmit) } className=" bg-red-100 flex flex-col h-2/5  w-4/5">
        <label className=" flex flex-col">
          Email
          <input type="text" {...register('email', {required: true})} />
          <span>{errors.email?.message}</span>
        </label>
        <label className=" flex flex-col">
          Senha
          <input type="password" {...register('password', {required: true})} />
          <span>{errors.password?.message}</span>
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}