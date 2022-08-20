import Card from "../componentes/card/index";
import {useState} from "react";

// IMPLEMENTA UM COMPONENTE POR MEIO DE UMA TAG


export default function Home() {
  //DESTRUTURAÇÃAO
  // const state = useState(0)
  // const numero = state[0]
  // const setNumero = state[1]
  // console.log(numero)
  const [numero, setNumero] = useState(0)

  return (
      <main>
        <h1>CONTADOR</h1>
        {/* <p>{numero}</p>
        <button 
          onClick={() => {
            console.log(setNumero)
           setNumero(numero+1)

          }}
            >Incrementar</button>
        <button onClick={() => {
          setNumero(numero-1)
           }}>Diminuir</button> */}
        {/* <Card bg_color='#DC143C' idade='20' nome='Aurilene'/>
        <Card bg_color='#00FFFF' idade='21' nome='Gabi'/>
        <Card bg_color='#6495ED' idade='22' nome='Joao victor'/>
        <Card bg_color='#FFF8DC' idade='23' nome='Diogo'/>
        <Card bg_color='#000008B' idade='24' nome='Victor'/>
        <Card bg_color='#9932CC' idade='25' nome='Vitor'/>  */}
        <Card nome="Aurilene" idade='20' dados={{dado1: 'dado', dado2: 'dado'}} />
      </main>
  )
};