import React , { useState } from 'react';
import BaseColaboradores from './components/BaseColaboradores';

function App() {

  const [colaboradores , setColaboradores] = useState(BaseColaboradores);
  const [nuevoColaborador , setNuevoColaborador] = useState({

        id: '',
        nombre: '',
        correo: ''
  });

  const [buscar , setBuscar] = useState('');

  const agregarColaborador = (e) => {

    e.preventDefault();

    if(nuevoColaborador.nombre === "" || nuevoColaborador.correo === ""){

      return alert("Faltan datos por llenar");
    }

    setNuevoColaborador({

      id: Date.now(),
      nombre: nuevoColaborador.nombre,
      correo: nuevoColaborador.correo

    })

    setColaboradores([...colaboradores , nuevoColaborador])

    setNuevoColaborador({

      id: "",
      nombre: "",
      correo: ""

    })

  } // Cierra agregarColaborador 

  //comentario

  const filtro = colaboradores.filter((colaborador) => {

    if(colaborador.nombre.toLowerCase().includes( buscar.toLowerCase() )){

      return true;
    }

    return false;

  })

  return (

    <div className="container">

      <div>
        <nav className="navbar bg-secondary mb-5">
            <div className="container-fluid">
                <h1 className="navbar-brand text-white">Buscador de Colaboradores.</h1>
                <form className="d-flex" role="search">
                    <input 
                          className="form-control me-2" 
                          type="search" 
                          placeholder="Ingresa nombre" 
                          aria-label="Search" 
                          onChange={(e) => setBuscar(e.target.value)}
                          value={buscar}
                    />    
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div>
          <h2>Filtro de Busqueda.</h2>
          <ul>
              {
              filtro.map( ({id , nombre , correo}) => (
                  <li className="list-unstyled" key={id}> 
                      {nombre} - {id} {correo}
                  </li>
              ))
              }
          </ul>
        </div>
      </div>

      <div className="mx-3">
        <h2>Formulario de Ingreso de Colaboradores</h2>
        <form onSubmit={agregarColaborador}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre del Colaborador</label>
            <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Ingrese el nombre del colaborador" 
                  onChange={(e) => setNuevoColaborador({
                    id: nuevoColaborador.id,
                    nombre: e.target.value,
                    correo: nuevoColaborador.correo
                  })}
                  value={nuevoColaborador.nombre}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Correo del Colaborador</label>
            <input 
                  type="email" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Ingrese el correo del colaborador" 
                  onChange={(e) => setNuevoColaborador({
                    id: nuevoColaborador.id,
                    nombre: nuevoColaborador.nombre,
                    correo: e.target.value
                  })}
                  value={nuevoColaborador.correo}
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Agregar Colaborador</button>
          </div>
        </form>
      </div>

      <div>

        <h2>Listado de Colaboradores.</h2>
        <ul>
            {
            colaboradores.map( ({id , nombre , correo}) => (
                <li className="list-unstyled" key={id}> 
                    {nombre} - {id} {correo}
                </li>
            ))
            }
        </ul>
      </div>
    </div>
    
  )
};

export default App;
