import React, {useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import './histcard.css';

function Histcard({id, pesquisa, site, usuario}){    

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

    function deleteHist(){
        firebase.firestore().collection('historico').doc(id).delete();
    };

    function addFav(){
        firebase.firestore().collection('favoritos').add({
            produto: pesquisa,
            site: site,
            usuario: usuario
        });
    };

    return(
        <div className="col-md-2 col-sm-12 reposit">
            <div className="card-body modal-content">
            <img src={urlImagem} alt='logo' className='img-cartao'/> 
                <h5 className="my-2">{pesquisa}</h5>
                <button onClick={abreSite} type="button" className="btn btn-sm btn-block btn-detalhes">Detalhes</button>
                <button onClick={addFav} type="button" className="btn btn-sm btn-block btn-fav">Favoritar</button>
                <button onClick={deleteHist} type="button" className="btn btn-sm btn-block btn-del">Excluir</button>
            </div>
        </div>
    );
}

export default Histcard;