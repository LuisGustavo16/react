import * as S from "./style"

export function Hamburguer() {
    return (

        <S.Section>
                <input type="checkbox" className="hamburguer" />

                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <a href="">
                        <li>Entrar</li>
                    </a>
                    <a href="/Cadastro">
                        <li>Cadastrar</li>
                    </a>
                    <a href="Login">
                        <li>Login</li>
                    </a>
                    <a href="/Ajustes">
                        <li>Ajustes</li>
                    </a>
                </ul>
        </S.Section>

    )
}