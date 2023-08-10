import Cenoura from "../../assests/cenoura.png"
import Beterraba from "../../assests/beterraba.png"
import React from "react"
import * as S from "./style"

export function Home() {
    return (
        <S.Section>
            <ul>
                <li><strong> Ver receitas</strong></li>
                <li><strong>Postar minha receita</strong></li>
                <li><strong>Doe para o site</strong></li>
            </ul>
            <img src={Cenoura} alt="cenoura" />
            <img src={Beterraba} alt="beterraba" />
        </S.Section>
    )
}