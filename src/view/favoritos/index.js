import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Navbar from '../components/navbar';
import firebase from '../../config/firebase';
import Favcard from '../favcard';

function Favoritos({match}){    

    const[favoritos, setFav] = useState([]);
    var listaFav = [];
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        if(match.params.parametro){
            firebase.firestore().collection('favoritos').where('usuario', '==', usuarioEmail).get().then(async(resultado) =>{
                await resultado.docs.forEach( doc =>{
                    listaFav.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setFav(listaFav);
            })
        }else{

        }        
    });

    return(
        <>
            <Navbar/>
            <div className="row">
            {
                favoritos.map(item => <Favcard id={item.id} produto={item.produto} site={item.site} usuario={item.usuario}/>)
            }
            </div>
        </>
    );
}

export default Favoritos;