import './App.css'
import SideBar from './componentes/SiderBar'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Filtro from './componentes/Filtro'
import Ordenacao from './componentes/Ordenacao'
import Card from './componentes/Card'
import { useEffect, useState } from 'react'

function App() {

  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(resposta => resposta.json())
      .then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <SideBar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
