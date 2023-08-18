import { colors } from "../../styles/GlobalStyle"
import styled from "styled-components"

export const Section = styled.section `
    height: 100vh;
    background-color: ${colors.third};
    display: flex;
    justify-content: center;
    align-items: center;

    div.form {
        background-color: ${colors.secondary};
        height: 40rem;
        width: 30rem;
        border-radius: 2rem;
        padding: 3rem;

        a {
            width: 100%;
            padding-top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: ${colors.white};
            font-family: 'Odor Mean Chey', serif;

            :hover {
                color: ${colors.hover};
            }
        }

        .botao {

            padding-top: 6rem;

            button {
                height: 4rem;
                width: 25rem;
                border-radius: 2rem;
                font-family: 'Odor Mean Chey', serif;
                font-size: 1.7rem;

                :hover {
                    background-color: ${colors.hover};
                }
            }

        }

        div.dado {
            height: 5rem;
            width: 10rem;
        
            label { 
                color: ${colors.white};
                font-family: 'Odor Mean Chey', serif;
            }   

            input {
                font-family: 'Odor Mean Chey', serif;
                height: 2rem;
                width: 20rem;
                padding: 5px;
                font-size: 1rem;
                border-radius: 1rem;
            }      
        }
    }
`