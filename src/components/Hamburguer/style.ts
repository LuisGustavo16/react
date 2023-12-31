import { colors } from "../../styles/GlobalStyle";
import styled from "styled-components";

export const Section = styled.section `

    div{
        position: fixed;
        width: 35px;
        height: 35px;
        right: 20px;
        top: 45px;

        span{
            display: block;
            z-index: 999;
            width: 35px;
            height: 5px;
            margin-bottom: 10px;
            background-color: ${colors.forth};
            border-radius: 3px;
            transition: all ease .2s;
        }
    }

    ul{
        position: fixed;
        z-index: 999;
        width: 10rem;
        height: 300px;
        background-color: ${colors.forth};
        margin-right: 84px;
        transition: all ease .2s;
        display: none;

        a{
            text-decoration: none;
            color: black;

            li{
                list-style-type: none;
                font-family: 'Odor Mean Chey', serif;
                padding-left: 1rem;
                padding-top: 15px;

                :hover {
                    background-color: ${colors.hover};
                }
            }
        }
    }

    .hamburguer{
        position: fixed;
        z-index: 1000;
        height: 35px;
        width: 35px;
        top: 45px;
        cursor: pointer;
        opacity: 0;
        right: 20px;
    }

    .hamburguer:checked{
        right: 11rem;
    }

    .hamburguer:checked ~ div{
        right: 11rem;
    }

    .hamburguer:checked ~ div span{
        background-color: ${colors.forth};
    }

    .hamburguer:checked ~ div span:nth-child(1){
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    }

    .hamburguer:checked ~ div span:nth-child(2){
        opacity: 0;
    }

    .hamburguer:checked ~ div span:nth-child(3){
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    }

    .hamburguer:checked ~ ul{
        margin-right: 0;
        right: 0;
        display: block;
    }
`