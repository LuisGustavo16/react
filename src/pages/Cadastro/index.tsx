import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import * as S from "./style";
import { IErrorResponse, IUser } from "../../interfaces/user.inteface";
import { AxiosError } from "axios";
import { apiUser } from "../../services/data";

export function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IUser>({
    name: '',
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await apiUser.register(formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate('/Login')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }
  return (
    <S.Section>
      <form method="post" onSubmit={handleSubmit}>
        <h1>CADASTRO</h1>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="name" id="nome" placeholder="Nome"
            onChange={(e) => handleChange({ name: e.target.value })}
            value={formData?.name}
          />
        </div>


        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="E-mail"
            onChange={(e) => handleChange({ email: e.target.value })}
            value={formData?.email}
          />
        </div>


        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" placeholder="Senha"
            onChange={(e) => handleChange({ password: e.target.value })}
            value={formData?.password}
          />
        </div>

        <div className="botao">
          <button type="submit">CADASTRAR</button>
        </div>

      </form>

      <a href="/Login">
        <div className="logar">
          <h1 className="login">LOGIN</h1>
        </div>
      </a>


    </S.Section>
  );
};

