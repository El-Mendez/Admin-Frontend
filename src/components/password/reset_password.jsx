import React, { useState} from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import history from '../history';
import Cookies from 'universal-cookie';
import { SIGNUP } from '../utils/rutas';
import logo from "../../assets/logo.svg";

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Validación de datos ingresados por el usuario
const schema = z.object({
  password: z.string().nonempty({ message: 'Ingrese una contraseña' }).min(8, { message: 'Mínimo 8 caracteres' }),
  confirm_password: z.string().nonempty({ message: 'Ingrese una contraseña' }).min(8, { message: 'Mínimo 8 caracteres' }),
});

export default function Register() {

  const cookies = new Cookies();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onChange',
    resolver: zodResolver(schema),
  });


  const [user, setUser] = useState({
    password: '',
    confirm_password: '',
  });

  const [filled, setFilled] = useState({
    password: false,
    confirm_password: false,
  });


  // Envía la información del usuario a la base de datos
  // Retorna error si el carné ya está guardado o no se pasaron todos los parámetros
  function signUp(){
    console.log("Loading...");
    console.log(user)
    console.log(user.carne, user.nombre, user.apellido)
    const fetchData = async () => {
      try {
        const { data } = await Axios.post(SIGNUP,
            {
              carne: user.carne,
              nombre: user.nombre,
              apellido: user.apellido,
              carreraId: user.carreraId,
              password: user.password
            }
        );
        cookies.set('session', data.token, {path: '/'})
        history.push(`/data`);
        history.go();
      } catch (error) {
        console.log(error);
        alert('El carné ingresado ya se encuentra registrado');
      }
    };
    fetchData();
  };

  // Actualiza los estados a medida que el usuario escribe
  const handleInputChange = (e) => {
    console.log(e.target.name)
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== '') {
      setFilled({
        ...filled,
        [e.target.name]: true,
      });
    } else {
      setFilled({
        ...filled,
        [e.target.name]: false,
      });
    }
  };


  // Valida la información ingresada en el formulario y hace el request
  const onSubmit = (data) => {
    // signUp();
  };

  return (
        <div className="register-container mx-3">
          <img src={logo} alt="Logo" className="img-size w-50"/>
          <h2>Cuenta</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Password */}
            <div className="input-container">
                         <span className={`material-icons input-icon ${filled.password ? 'is-filled' : ' '}`}>
                            lock
                        </span>
              <input
                  className="input ms-1"
                  type="password"
                  name="password"
                  placeholder="Nueva contraseña"
                  onInput={handleInputChange}
                  {...register('password')}
              />
            </div>
            <small className="text-danger text-small d-block mb-2 mt-1">
              <div className="d-flex align-items-center ps-2">
                {errors.password
                    ? <span className="material-icons me-1">error_outline</span>
                    : null
                }
                {errors.password?.message}
              </div>
            </small>
            {/* Confirm password */}
            <div className="input-container">
                         <span className={`material-icons input-icon ${filled.password ? 'is-filled' : ' '}`}>
                            lock
                        </span>
              <input
                  className="input ms-1"
                  type="password"
                  name="password"
                  placeholder="Confirmar contraseña"
                  onInput={handleInputChange}
                  {...register('password')}
              />
            </div>
            <small className="text-danger text-small d-block mb-2 mt-1">
              <div className="d-flex align-items-center ps-2">
                {errors.confirm_password
                    ? <span className="material-icons me-1">error_outline</span>
                    : null
                }
                {errors.confirm_password?.message}
              </div>
            </small>
            {/* Reset password button */}
            <div className="d-flex flex-column justify-content-center align-items-center mt-4 px-2">
              <button onSubmit={onSubmit} className="btn-fill arrow-button w-50">SIGUIENTE
                <span
                    className="material-icons position-absolute ms-1">arrow_forward</span>
              </button>
              <button onSubmit={onSubmit} className="btn-fill arrow-button w-50">CANCELAR
                <span
                    className="material-icons position-absolute ms-1">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
  );
}
