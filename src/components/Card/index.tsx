import * as S from "./style"

export interface ICard {
    nome: string
    nota: any
}

export const Card = ({ nome, nota }: ICard) => {
    return (
        <S.Section>
            <div>
                <h1>
                    <strong>Receita:</strong> {nome} <br /> <br />
                    <strong>Avaliação:</strong> {nota}
                </h1>
            </div>
        </S.Section>
    )
}