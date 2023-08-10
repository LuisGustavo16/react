import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
    background-color: ${colors.third};
    height: calc(100vh - 13rem);
    display: flex;
    align-items: center;

    ul {
        padding-left: 4rem;
        width: 30rem;
        align-items: center;
    }

    ul li {
        text-align: center;
        list-style-type: none;
        font-family: 'Odor Mean Chey', serif;
        font-size: 2rem;
        background-color: ${colors.forth};
        width: 30rem;
        border-radius: 3rem;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    img.Beterraba {
        float: right;
        height: 30rem;
        width: 30rem;
    }

    img.Cenoura {
        float: right;
        height: 30em;
        width: 30rem;
    }


`