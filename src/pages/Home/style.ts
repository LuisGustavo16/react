import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
    background-color: ${colors.third};
    height: calc(100vh - 13rem);
    display: flex;
    align-items: center;

    ul {
        padding-left: 4rem;
        width: 80%;
        align-items: center;

        li {
            text-align: center;
            list-style-type: none;
            font-family: 'Odor Mean Chey', serif;
            font-size: 2rem;
            background-color: ${colors.forth};
            width: 100%;
            border-radius: 3rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        li:hover {
            background-color: #d0b9f5;
            box-shadow: 0.3rem 0.2rem 0.5rem black;
        }

    }

    section.opcoes {
        display: flex;
        width: 60%;
        height: 100%;
        align-items: center;
    }

    section.cenouraSection {
        height: 100%;
        width: 45%;
        display: flex;
        align-items: flex-end;
        padding-bottom: 5rem;
        padding-right: 1rem;
    }

    section.beterrabaSection {
        height: 100%;
        width: 25%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 4rem;
    }

    img.Beterraba {
        height: 24rem;
        width: 26rem;
    }

    img.Cenoura {
        height: 22em;
        width: 16rem;
    }

    a {
        text-decoration: none;
        color: ${colors.black};
    }

    /*Responsivo*/

    @media (max-width: 1277px) {
        img.Cenoura {
            display: none;
        }

        section.opcoes {
            width: 90%;
        }

        section.beterrabaSection {
            width: 10%;
        }

        img.Beterraba {
            height: 25rem;
            width: 25rem;
        }
    }

    @media (max-width: 1059px) {

        img.Beterraba {
            display: none;
        }
    }

    @media (max-width: 560px) {

        ul li {
            font-size: 1.5rem;
        }

        section.cenouraSection {
            display: none;
        }

        section.beterrabaSection {
            display: none;
        }

        section.opcoes {
            width: 100%;
        }
    }

`