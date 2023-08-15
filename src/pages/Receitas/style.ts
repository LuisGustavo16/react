import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section `

    min-height: calc(100vh - 13rem);
    background-color: ${colors.third};

    section.pesquisa {
        display: flex;
        height: 20%;
        padding: 2rem;
        width: 100%;

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

        /*Responsivo*/

        @media (max-width: 1387px) {
            section.lista {
                grid-template-columns: auto auto;
            }
        }

        @media (max-width: 910px) {
            section.lista {
                grid-template-columns: auto;
                justify-content: center;
            }
        }

`