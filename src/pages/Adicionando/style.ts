import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Section = styled.section `
    height: calc(100vh - 13rem);
    padding: 5rem;
    background-color: ${colors.third};


    input {
        background-color: ${colors.white};
        box-shadow: 0.1rem 0.1rem 0rem ${colors.black};
    }
`