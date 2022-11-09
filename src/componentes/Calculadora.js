import React, { useState } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import "./style.css"




export default function Calculadora() {

    const [valortela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)



    return (
        <div className="conteiner">
            <Display valor={valortela} result={resultado} />
            <Botoes
                operado={operado} setOperado={setOperado}
                valor={valortela} setValor={setValorTela}
                result={resultado} setResult={setResultado}
                acumulador={acumulador} setAcumulador={setAcumulador}
            />
        </div>
    )
}