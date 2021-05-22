import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../config/firebase'
import 'firebase/auth'

import {useSelector, useDispatch} from 'react-redux';

import logo from '../../img/logo.png';

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const dispatch = useDispatch();


    function autenticar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado =>{
            dispatch({type: 'LOGIN', usuarioEmail: email})
        })
        .catch(erro =>{
            alert(erro)
        })
        
    }

    return(
        <form>
            <div id="modalLogin" className="modal-fade" role="dialog">
                
                {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to = "/" /> : null
                }
                
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={logo} alt="logo" className="center mb-3"/>
                        </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <form>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control" name="email" placeholder="Email"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                            <input onChange={(e)=> setSenha(e.target.value)} type="password" className="form-control" name="password" placeholder="Password"/>
                                        </div>
                                    </form>
                                    <Link to="/lostpassword" className="">Esqueci minha senha!</Link>
                                </div>
                            </div>
                            <div className="modal-footer">
                            <Link to='/cadastro' className="">
                                <button type="button" id ="iniciaCadastro" className="btn btn-login pull-left" data-dismiss="modal">Cadastrar</button>
                            </Link>
                            <button onClick={autenticar} type="button" id ="entrar" className="btn btn-login" data-dismiss="modal">Entrar</button>
                        </div>
                    </div>      
                </div>
            </div>
        </form>
        
    );
}

export default Login;