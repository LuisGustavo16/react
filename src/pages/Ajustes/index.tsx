import { useState } from "react"
import * as S from "./style"
export function Ajustes () {
    const [ cor, setCor ] = useState(1)

    function mudarCor() {
        if (cor == 1)
            setCor(2)
        else
            setCor(1)
    }

    return (
        <S.Section>
            <button onClick={mudarCor}>botao</button>
        </S.Section>
    )
}