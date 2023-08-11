import { GlobalStyle } from "../../styles/GlobalStyle"
import * as S from "./style"
import Logo from "../../assests/logo.png"

export function Header() {
    return (
        <S.Header>
            <picture>
                <img src={Logo} alt="logo" />
            </picture>

            <a href="/">
                <h1>Receitas de Vó</h1>
            </a>

        </S.Header>
    )
}