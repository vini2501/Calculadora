import React from "react";



export default function Botoes(props) {

    const Btn = (label, onClick) => {
        return (
            <button className="bt" onClick={onClick}>{label}</button>
        )
    }

    const addDigito = (d) => {
        if ((d === '+' || d === '-' || d ==='*' || d === '/') && props.operado) {
            props.setOperado(false)
            props.setValor(props.result + d)
            return
        } if (props.operado) {
            props.setValor(d)
            props.setOperado(false)
            return
        }
        const Tela = props.valor + d
        props.setValor(Tela)
    }
    const limparMemoria = () => {
        props.setOperado(false)
        props.setValor('')
        props.setResult(0)
        props.setAcumulador(0)
        return
    }

    const Operacao = (oper) => {

        if (oper === 'bs') {
            let vtela = props.valor
            vtela = vtela.toString().substring(0, (vtela.length - 1))
            props.setValor(vtela)
            props.setOperado(false)
            return
        } try {
            const r = eval(props.valor)
            props.setAcumulador(r)
            props.setResult(r)
            props.setOperado(true)
        } catch {
            props.setResult('ERRO!')
        }

    }


    return (
        <div className="botao">
            {Btn('AC', limparMemoria)}
            {Btn('(', () => { addDigito('(') })}
            {Btn(')', () => { addDigito(')') })}
            {Btn('/', () => { addDigito('/') })}
            {Btn('7', () => { addDigito('7') })}
            {Btn('8', () => { addDigito('8') })}
            {Btn('9', () => { addDigito('9') })}
            {Btn('*', () => { addDigito('*') })}
            {Btn('4', () => { addDigito('4') })}
            {Btn('5', () => { addDigito('5') })}
            {Btn('6', () => { addDigito('6') })}
            {Btn('-', () => { addDigito('-') })}
            {Btn('1', () => { addDigito('1') })}
            {Btn('2', () => { addDigito('2') })}
            {Btn('3', () => { addDigito('3') })}
            {Btn('+', () => { addDigito('+') })}
            {Btn('.', () => { addDigito('.') })}
            {Btn('0', () => { addDigito('0') })}
            {Btn('<', () => { Operacao('bs') })}
            {Btn('=', () => { Operacao('=') })}
        </div>

    )
}