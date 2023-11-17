import { dados } from "../../dados/index"
import * as S from "./style"
import { ComponentCard } from "../../components"

export function Receitas() {
    return (
        <S.Section>

            <section className="pesquisa">

                <input type="text" name="pesquisa" id="pesquisa" placeholder="Procurar" />

            </section>

            <section className="lista">

                {dados.map(item => (
                    <ComponentCard
                        key={item.id}
                        nome={item.nome}
                        nota={item.nota}
                    />
                ))}

            </section>


        </S.Section>
    )
}