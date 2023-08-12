import { colors } from "../../styles/GlobalStyle";
import styled from "styled-components";

export const Section = styled.section `
    padding-left: 3rem;
    padding-bottom: 3rem;

    div {
        width: 25rem;
        height: 10rem;
        background-color: ${colors.forth};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3rem;
    }

    div:hover {
        background-color: ${colors.hover};

        h1 {
            background-color: ${colors.hover};
        }
    }

    h1 {
        background-color: ${colors.forth};
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
    }

`