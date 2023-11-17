import * as S from "./style"
import Logo from "../../assests/logo.png"
import { ComponentHamburguer } from ".."

export function Header() {
    return (
            <S.Header>
                <picture>
                    <a href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                </picture>

                <a href="/">
                    <h1>Receitas de Vó</h1>
                </a>
                <ComponentHamburguer/>
            </S.Header>
    )
}