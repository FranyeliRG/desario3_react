import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const validate = (e) => {
    e.preventDefault()
    const colaboradorId = { ...nuevoColaborador, id: Date.now() }
    setColaboradores([...colaboradores, colaboradorId])

    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    })

    if (colaboradorId.nombre === '' || colaboradorId.correo === '' || colaboradorId.edad === '' || colaboradorId.cargo === '' || colaboradorId.telefono === '') {
      setAlert({ message: 'Por favor, llenar todos los campos', color: 'danger' })
    } else {
      setAlert({ message: 'Usuario agregado con Éxito', color: 'success' })
    }
  }

  const addNuevoColaborador = (e) => {
    setNuevoColaborador({ ...nuevoColaborador, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h4 className='d-flex justify-content-center'>Ingrese un nuevo Colaborador</h4>
      <Form onSubmit={validate}>
        <Form.Group className='mb-1' controlId='formBasicNombre'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your Name'
            name='nombre'
            onChange={addNuevoColaborador}
            value={nuevoColaborador.nombre}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your Email'
            name='correo'
            onChange={addNuevoColaborador}
            value={nuevoColaborador.correo}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEdad'>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your Age'
            name='edad'
            onChange={addNuevoColaborador}
            value={nuevoColaborador.edad}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCargo'>
          <Form.Label>Job Position</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your Job Position'
            name='cargo'
            onChange={addNuevoColaborador}
            value={nuevoColaborador.cargo}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTelefono'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your Phone Number'
            name='telefono'
            onChange={addNuevoColaborador}
            value={nuevoColaborador.telefono}
          />
        </Form.Group>
        <Button className='d-grid gap-2' variant='outline-dark' size='md' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Formulario
