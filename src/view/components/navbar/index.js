import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function Navbar(){    
    const dispatch = useDispatch();
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' className="navbar-brand text-white mx-2 bold mx-3" href="#">Keygle</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto col-12">
            {
              useSelector(state => state.usuarioLogado) > 0 ?
              <>
                <li className="nav-item active order"><Link to='/historico/meu'>Historico</Link></li>
                <li className="nav-item active order"><Link to='/favoritos/meu'>Favoritos</Link></li>
                <li className="nav-item active order active"><Link to='/sobre'>Sobre</Link></li>
                <li className="nav-item active order"><Link to='/' onClick={() => dispatch({type: 'LOGOUT'})}>Sair</Link></li>
              </>
              :
              <>
                <li className="nav-item active order"><Link to='/cadastro'>Cadastro</Link></li>
                <li className="nav-item active order"><Link to='/login'>Login</Link></li>
                <li className="nav-item active order"><Link to='/sobre'>Sobre</Link></li>
              </>
            }
             </ul>
        </div>
      </nav>
    );
}

export default Navbar;