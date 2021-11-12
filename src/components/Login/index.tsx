import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useAuth } from "../../Providers/user";

interface UserData {
  email: string;
  password: string;
}

const Form = () => {
  const history = useHistory();
  const { authorized, userLogin } = useAuth();

  if (authorized) {
    history.push("/dashboard");
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de email inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Min. de 6 caracteres")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (userData: UserData) => {
    userLogin(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input placeholder="Senha" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default Form;
