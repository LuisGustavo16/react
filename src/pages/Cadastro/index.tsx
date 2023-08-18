import React from "react";
import * as S from "./style"

export function Cadastro () {
    return (
        <S.Section>
            <div className="form">

                <div className="dado">
                    <label htmlFor="nome">Nome:</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className="dado">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="nome" id="nome" />
                </div>

                <div className="dado">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" name="senha" id="senha" />
                </div>

                <div className="dado">
                    <label htmlFor="senha">Confirme a Senha:</label>
                    <input type="text" name="senha" id="senha" />
                </div>

                <div className="botao">
                    <button type="submit">Cadastrar</button>
                </div>

                <a href="/">
                    <h2>Voltar</h2>
                </a>

            </div>
        </S.Section>
    )
}