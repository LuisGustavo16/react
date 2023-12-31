import Cenoura from "../../assests/cenoura.png"
import Beterraba from "../../assests/beterraba.png"
import * as S from "./style"

export function Home() {
    return (
        <S.Section>

            <section className="opcoes">
                
                <ul>

                    <a href="/segundaPagina">
                        <li><strong> Ver receitas</strong></li>
                    </a>

                    <a href="/adicionar">
                        <li><strong>Postar minha receita</strong></li>
                    </a>

                    <a href="/pix">
                        <li><strong>Doe para o site</strong></li>
                    </a>
                    
                </ul>
            </section>

            <section className="beterrabaSection">
                <img className="Beterraba" src={Beterraba} alt="beterraba" />
            </section>

            <section className="cenouraSection">
                <img className="Cenoura" src={Cenoura} alt="cenoura" />
            </section>

        </S.Section>
    )
}