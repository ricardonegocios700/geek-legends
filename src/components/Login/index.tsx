import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";
import * as yup from "yup";

import { useAuth } from "../../Providers/user";
import { H1, Container, Input, ContainerInput, FormLogin } from "./styles";

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
    <Container>
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <H1>Login</H1>
        <ContainerInput className="input">
          <Input placeholder="Email" {...register("email")} />
          {errors.email && <span>{errors.email?.message}</span>}
          <Input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password?.message}</span>}
        </ContainerInput>
        <Button type="submit" title="Logar" />
        <a href="/signup"> Não possui uma conta? Cadastro</a>
      </FormLogin>
    </Container>
  );
};

export default Form;
