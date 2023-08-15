import React from "react";

const listaElement = document.querySelector("#app h1")
const inputElement = document.querySelector ("#app div input")
const buttomElement = document.querySelector ("#app div button")

const receitas = JSON.parse (localStorage.getItem ("lista")) || []

function renderTarefas () {
    /*Ver com o Lazáro*/
}