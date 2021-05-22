import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Navbar from '../components/navbar';
import firebase from '../../config/firebase';
import Histcard from '../histcard';

function Historico({match}){    

    const[historico, setHist] = useState([]);
    var listaHist = [];
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        if(match.params.parametro){
            firebase.firestore().collection('historico').where('usuario', '==', usuarioEmail).get().then(async(resultado) =>{
                await resultado.docs.forEach( doc =>{
                    listaHist.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setHist(listaHist);
            })
        }else{

        }        
    });

    return(
        <>
            <Navbar/>
            <div className="row">
            {
                historico.map(item => <Histcard id={item.id} pesquisa={item.pesquisa} site={item.site} usuario={item.usuario}/>)
            }
            </div>
        </>
    );
}

export default Historico;