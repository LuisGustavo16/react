import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
    background-color: ${colors.secondary};
    border-bottom: 0.7rem solid ${colors.black};
    display: flex;
    height: 8rem;
    align-items: center;

    picture{
        margin-top: 0.5rem;
        margin-left: 1rem;
        width: 20%;
        height: 95%;

        img {
            margin-top: 0.4rem;
            height: 90%;
        }
    }

    h1 {
        font-family: 'Nosifer', cursive;
        font-weight: 400;
        color: ${colors.primary};
        text-align: center;
        text-shadow: 0.5rem 0.3rem 0rem black;
        font-size: 70px;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    /*Responsivo*/

    @media (max-width: 978px) {
        h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: 679px) {
        h1 {
            font-size: 2.3rem;
        }
    }

    @media (max-width: 679px) {
        h1 {
            font-size: 1.7rem;

        }

        picture img {
            display: none;
        }

    }

`