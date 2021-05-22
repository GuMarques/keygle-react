import React, {useState} from 'react';
import './home.css';
import Navbar from '../components/navbar'
import {useSelector} from 'react-redux';
import firebase from '../../config/firebase'
import logo from '../../img/logo.png';

function Home(){
    const [pesquisa, setPesquisa] = useState('');
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const db = firebase.firestore();
    
    function pesquisar1(){
        const nSite = "https://www.g2a.com/search?query=" + pesquisa
        db.collection('historico').add({
            pesquisa: pesquisa,
            site: nSite,
            usuario: usuarioEmail
        }).then(()=>{window.open(nSite)}).catch(()=>{alert('Erro')});
    };

    function pesquisar2(){
        const nSite = "https://www.eneba.com/br/store?text=" + pesquisa
        db.collection('historico').add({
            pesquisa: pesquisa,
            site: nSite,
            usuario: usuarioEmail
        }).then(()=>{window.open(nSite)}).catch(()=>{alert('Erro')});
    };

    function pesquisar3(){
        const nSite = "https://www.nuuvem.com/catalog/search/" + pesquisa
        db.collection('historico').add({
            pesquisa: pesquisa,
            site: nSite,
            usuario: usuarioEmail
        }).then(()=>{window.open(nSite)}).catch(()=>{alert('Erro')});
    };
    return(
        <>
        <Navbar/>
        <form className="repo">
            <img src={logo} alt="logo" className="center"/>
            <div className="input-group redim recenter">
                <input onChange={(e)=>setPesquisa(e.target.value)} type="text" className="form-control" placeholder="Digite o nome do produto"/>
                
                <button onClick={pesquisar1} type="button" className="btn btn-lg btn-block btn-g2a">G2a</button>
                <button onClick={pesquisar2} type="button" className="btn btn-lg btn-block btn-eneba">Eneba</button>
                <button onClick={pesquisar3} type="button" className="btn btn-lg btn-block btn-nuuvem">Nuuvem</button>
            </div>
         </form>
        </>
    );
}

export default Home;