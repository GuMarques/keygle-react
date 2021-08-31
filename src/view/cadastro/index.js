import React, {useState} from 'react';
import './cadastro.css';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase'
import 'firebase/auth'

function Cadastro(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    function cadastrar(){
        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado =>{
            alert("Usuario cadastrado com sucesso")
        })
        .catch(erro =>{
            alert(erro)
        })
    }

    return(
        <form>
            <div id="modalCadastro" className="modal-fade hidden" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <Link to="/keygle-react">
                            <div className=" mt-2 mx-3">
                                <svg style={{color: 'black'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                            </div>
                        </Link>
                        <div className="modal-header">
                            <h4 className="modal-title center">Cadastro</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <form>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input onChange={(e)=> setEmail(e.target.value)} id="cEmail" type="text" className="form-control" name="cEmail" placeholder="Email"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input onChange={(e)=> setSenha(e.target.value)} id="cPassword" type="password" className="form-control" name="cPassword" placeholder="Password"/>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={cadastrar} type="button" id ="cadastro" className="btn btn-login pull-center" data-dismiss="modal">Cadastrar</button>
                            <Link to='/keygle-react/login'><button type="button" id ="cancelarCadastro" className="btn btn-login pull-left" data-dismiss="modal">Cancelar</button></Link>
                        </div>
                    </div>      
                </div>
            </div>
        </form>
    );
}

export default Cadastro;