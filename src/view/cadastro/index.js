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