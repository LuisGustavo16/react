import { colors } from "../../styles/GlobalStyle"
import styled from "styled-components"

export const Section = styled.section `
    height: 100vh;
    background-color: ${colors.third};
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 20%;
        height: 50%;
        display: grid;
        justify-content: center;
        align-items: center;
        background-color: ${colors.secondary};
        border-radius: 2rem;

        label {
            color: ${colors.forth};
            font-family: "Odor Mean Chey", serif;
        }

        input {
            background-color: ${colors.forth};
            height: 2rem;
            border-radius: 2rem;
            padding-left: 0.6rem;
            font-family: "Odor Mean Chey", serif;
        }

        div {
            display: grid;
        }

    }

    .botao2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .enviar2 {
            height: 3rem;
            width: 13rem;
            border-radius: 6rem;
            background-color: ${colors.forth};
            font-family: "Odor Mean Chey", serif;
            font-size: 1.5rem;

            :hover {
                background-color: ${colors.hover};
            }
        }
    }

    a {
            text-decoration: none;
            color: ${colors.forth};
            padding-left: 5.2rem;
        }
    
`