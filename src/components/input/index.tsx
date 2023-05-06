import {useForm}from 'react-hook-form';

export default function Input(name: string) {
  const { register } = useForm();
  return (
    <>
      <label>
        {name}
        <input
          { ...register( name, {required: true}) }
        />
      </label>
    </>
  )
}