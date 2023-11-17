import * as S from "./style"

export function Adicionar() {
    return (
        <S.Section>
            <section className="caixa">
                <input type="text" />
            </section>

            <section className= "envio">
                <button type="submit">Enviar</button>
            </section>

        </S.Section>
    )
}