import React, {useState} from 'react';
import './lostpassword.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';

function LostPassword(){
    const [email, setEmail] = useState();
    
    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            alert("Um email de redefiniçao foi enviado para seu email");
        }).catch(error => {
            alert("Email invalido")
        })
    }

    return(
        <>
        <form>
            <div id="modalCadastro" className="modal-fade hidden" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title center">Recuperaçao de Senha</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <form>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input onChange={e=>setEmail(e.target.value)} className="form-control" type="email" placeholder="Email"/>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={recuperarSenha} type="button" className="btn btn-login pull-center">Recuperar</button>
                            <Link to='/login'><button type="button" id ="cancelarCadastro" className="btn btn-login pull-left" data-dismiss="modal">Cancelar</button></Link>
                        </div>
                    </div>      
                </div>
            </div>
        </form>
        </>
    )
}

export default LostPassword;