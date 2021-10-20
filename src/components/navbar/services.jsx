import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import history from '../utils/history';
import { USER_INFO_AUT } from '../utils/rutas';

function Services() {
  const { url } = useRouteMatch();
  const cookies = new Cookies();
  const token = cookies.get('session');
  const [user, setUser] = useState({
    nombre: '',
    carne: 0,
  });
  const [image, setImage] = useState(false);

  // TODO utilizar proptypes

  function logout() {
    cookies.remove('session', { path: '/' });
    history.push('/');
    history.go();
  }
  function searchFriends() {
    const request = async () => {
      try {
        const { data } = await Axios.get(USER_INFO_AUT,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setUser({
          nombre: data[0].nombre_completo.split(' ', 1),
          carne: data[0].carne,
        });
        const img = new Image();
        img.src = `../../../public/assets/${data[0].carne}.png`;
        // eslint-disable-next-line no-unused-expressions
        img.width > 0
          ? setImage(true)
          : null;
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }
  useEffect(() => {
    searchFriends();
  }, []);

  return (
    <div className="d-flex align-items-center ">
      <div className="services container align-items-end" style={{ height: '28px' }}>
        <div className="row dropdown">
          <div className="row">
            <img src={`../../../public/assets/${image ? `${user.carne}.png` : 'default.svg'}`} alt="Profile" className="w-25 rounded-circle align-self-center" />
            {' '}
            <div className="col-8">
              {user.nombre}
            </div>
          </div>
          <div className="row">
            <div className="dropdown-content container">
              <Link to={`${url}/profile`} className="noDecorations">
                <p className="row">Cuenta</p>
              </Link>
              <a className="noDecorations" onClick={logout}>
                <p className="row">Cerrar sesion</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Services;
