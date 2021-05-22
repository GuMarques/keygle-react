import React, {useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import './favcard.css';

function Favcard({id, produto, site, usuario}){    

    const[urlImagem, setUrlImagem] = useState();

    useEffect(()=>{
        if(site.includes('g2a')){
            firebase.storage().ref('imagens/g2a.png').getDownloadURL().then(url =>{
                setUrlImagem(url);
            })
        }else if(site.includes('eneba')){
            firebase.storage().ref('imagens/eneba.jpg').getDownloadURL().then(url =>{
                setUrlImagem(url);
            })
        }else if(site.includes('nuuvem')){
            firebase.storage().ref('imagens/nuuvem.jpg').getDownloadURL().then(url =>{
                setUrlImagem(url);
            })
        }  
    });

    function abreSite(){
        window.open(site);
    };

    function deleteFav(){
        firebase.firestore().collection('favoritos').doc(id).delete();
    };

    return(
        <div className="col-md-2 col-sm-12 reposit">
            <div className="card-body modal-content">
            <img src={urlImagem} alt='logo' className='img-cartao'/> 
                <h5 className="my-2">{produto}</h5>
                <button onClick={abreSite} type="button" className="btn btn-sm btn-block btn-detalhes">Detalhes</button>
                <button onClick={deleteFav} type="button" className="btn btn-sm btn-block btn-del">Excluir</button>
            </div>
        </div>
    );
}

export default Favcard;