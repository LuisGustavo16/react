import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section `

    height: calc(100vh - 13rem);
    background-color: ${colors.third};

    section.pesquisa {
        height: 20%;
        padding: 2rem;

            input {
                font-size: 1.6rem;
                font-family: 'Alfa Slab One', cursive;
                font-weight: 300;
                padding-left: 1rem;
                background-color: ${colors.forth};
                border-radius: 2rem;
                width: 20rem;
            }
        }

        section.lista {
                display: grid;
                grid-template-columns: auto auto auto;
        }

`