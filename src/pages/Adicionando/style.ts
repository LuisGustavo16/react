import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Section = styled.section `
    height: calc(100vh - 13rem);
    padding: 5rem;
    background-color: ${colors.third};


    input {
        height: 5rem;
        width: 30rem;
        background-color: ${colors.forth};
        box-shadow: 0.1rem 0.1rem 0rem ${colors.black};
        border-radius: 1rem;
        font-size: 3rem;
        font-family: 'Odor Mean Chey', serif;
    }

    section.envio {
        padding-top: 3rem;
    }

    button {
        height: 3rem;
        width: 5rem;
        background-color: ${colors.botao};
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 600;
        box-shadow: 0.2rem 0.2rem 0rem ${colors.black};
    
        :hover {
            background-color: ${colors.botaoHover};
            color: ${colors.white};
        }
    }

    @media (max-width: 662px) {
        input {
            width: 20rem;
        }
    }
`