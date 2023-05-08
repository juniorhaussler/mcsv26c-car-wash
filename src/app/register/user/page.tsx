import UserRegisterForm from "@/components/userRegisterForm";

export default function UserRegister() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-300">
      <h1 className="font-bold">REGISTRO DE USUÁRIO</h1>
      <UserRegisterForm />
    </div>
  )
}