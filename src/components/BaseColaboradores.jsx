/* import React , { useState } from 'react';

const Basecolaboradores = () => {

    const [datos , setDatos] = useState(); */
    export const BaseColaboradores = ([
    
        {
    
            id: "1",
            nombre: "Rodrigo Salas",
            correo: "rodrigo@mail.com"
    
        },
        {
    
            id: "2",
            nombre: "Juan Soto",
            correo: "juan@mail.com"
    
        },
    
        {
    
            id: "3",
            nombre: "pedro perez",
            correo: "pedro@mail.com"
    
        },
    
        ]);

        export default BaseColaboradores;

    /* const enviarFormulario = (e) => {

        e.preventDefault();
        //console.log('enviando form');
        console.log(Basecolaboradores);
    }

    const capturaNombre = (e) => {

        //console.log(e.target.value);
        setDatos(e.target.value);
    }

    const capturaCorreo = (e) => {

        console.log(e.target.value);
    }
    
    return (

    <div className="">

        <div>
            <div>
                <nav className="navbar bg-secondary mb-5">
                    <div className="container-fluid">
                        <h1 className="navbar-brand">Buscador de Colaboradores.</h1>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            <form className='mx-3' onSubmit={enviarFormulario}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nombre del Colaborador</label>
                    <input onChange={capturaNombre} name='nombre' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese el nombre del colaborador" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Correo del Colaborador</label>
                    <input onChange={capturaCorreo} name='correo' type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese el correo del colaborador" />
                </div>
                <div class="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Agregar Colaborador</button>
                </div>
            </form>
        </div>

        <hr></hr>

            <h2>Listado de Colaboradores.</h2>
            <ul>
                {
                Basecolaboradores.map( ({id , nombre , correo}) => (
                    <li className="list-unstyled" key={id}> 
                        {nombre} - {id} {correo}
                    </li>
                ))
                }
            </ul>
    </div>
        );
        
}

    export default Basecolaboradores; */

