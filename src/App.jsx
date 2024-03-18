import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseColaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
import Buscador from './components/Buscador'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ message: '', color: '' })
  const [search, setSearch] = useState('')

  const filtrados = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return colaborador
    }
  })

  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Lista de Colaboradores</h1>
      <Container className='mt-5'>
        <Row>
          <Col xs={12} md={4}>
            <Buscador search={search} setSearch={setSearch} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Listado colaboradores={filtrados} />
          </Col>
          <Col xs={12} md={4}>
            <Formulario
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
              setAlert={setAlert}
            />
            {alert.message !== '' && (<Alert message={alert.message} color={alert.color} />)}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
