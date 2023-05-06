import { ReactNode } from "react";
import { useForm} from "react-hook-form";

type formProps = {
  children: ReactNode;
}

export default function Form({ children }: formProps, classes: string) {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  return (
    <>
      <form className={ classes }>
        {children}
      </form>
    </>
  )
}